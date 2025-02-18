"use client"
import { useRouter } from 'next/navigation';
import { usefetchData } from '@/customHooks/usefetchData'
import { handleSubmit } from '@/utils/handleSubmit';
import { DocumentCard } from '@/components/DocumentCard';
import React from 'react';
import { DeleteAlert } from '@/components/DeleteAlert';

const documentsListAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/documents/`
const downloadExcelAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/download-excel/`

interface PropsType {
    handelTriggerer: () => void;
    renderer: number
}

const DocumentsList = ({ handelTriggerer, renderer }: PropsType) => {
    const [isDelete, setIsDelete] = React.useState(false)
    const [groupId, setGroupId] = React.useState<number | null>(null)
    const router = useRouter()

    const { data, isLoading, error }: any = usefetchData(documentsListAPIURL, "GET", renderer)
    const documentsData = data?.data.groups

    const handleExcelDownload = async (group_id: number) => {
        console.log('calling12')
        const res = await fetch(downloadExcelAPIURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                'group_id': group_id
            })
        })

        if (!res.ok) {
            throw new Error('Failed to download file');
        }

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'ExportedData.xlsx';
        document.body.appendChild(a);
        a.click();

        a.remove();
        window.URL.revokeObjectURL(url);
    }

    const handleDelete = async () => {
        const deleteurl = `${documentsListAPIURL}${groupId}/`
        const { data, loading, err }: any = await handleSubmit(deleteurl, {}, 'delete')
        setIsDelete(false)
        handelTriggerer()
        console.log('calling1')
    }

    const handleNavigate = (documentData: any) => {
        console.log('calling2')
        console.log(documentData.tests[0], 'data')
        const stringData = btoa(JSON.stringify(documentData.tests))
        localStorage.setItem('stringData', stringData)
        router.push(`/documentview`)
    }

    const buttonConfig = {
        handleNavigate: handleNavigate,
        handleDownload: handleExcelDownload,
        setGroupId: (value: number) => { setGroupId(value); setIsDelete(true) }
    }

    return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-8'>
            {
                documentsData && documentsData.map((document: any, i: number) => (
                    <DocumentCard
                        key={document.result_group_id}
                        document={document}
                        buttonConfig={buttonConfig}
                    />
                ))
            }
            {isDelete && <DeleteAlert closeHandler={() => setIsDelete(false)} deleteHandler={handleDelete} />}
        </div>
    )
}

export default DocumentsList
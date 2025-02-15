"use client"
import { usefetchData } from '@/customHooks/usefetchData'
import { DownloadCard } from '@/components/DownloadCard';


const documentsListAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/documents/`
const downloadExcelAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/download-excel/`

const DocumentsList = () => {
    const { data, isLoading, error }: any = usefetchData(documentsListAPIURL, "GET")
    const documentsData = data?.data.groups

    const handleExcelDownload = async (group_id: number) => {
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

    return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-8'>
            {
                documentsData && documentsData.map((document: any, i: number) => (
                    <DownloadCard key={document.result_group_id} document={document} handleExcelDownload={handleExcelDownload} />
                ))
            }
        </div>
    )
}

export default DocumentsList
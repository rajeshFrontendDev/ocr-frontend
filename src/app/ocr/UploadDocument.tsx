"use client"
import { handleSubmit } from "@/utils/handleSubmit"
import { CloudUpload } from "lucide-react"
import React from "react"

const ExtractTextAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/extract-text/`

interface PropsType {
    handelTriggerer: () => void
}

const UploadDocument = ({ handelTriggerer }: PropsType) => {
    const [fileName, setFileName] = React.useState<string | null>(null)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [message, setMessage] = React.useState<string | null>(null)

    const formData = new FormData()

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        else {
            setFileName(e?.target?.files[0].name)
            formData.append('file', e?.target?.files[0])
            setIsLoading(true)
            const { data, err } = await handleSubmit(ExtractTextAPIURL, formData, 'POST')
            console.log(err)
            if (data) {
                setMessage('Extracted')
                setIsLoading(false)
                handelTriggerer()
            }
        }

        console.log('cal')
    }

    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="text-black text-xl">Upload your image</h1>
            <form action="" className="flex mt-4 justify-center items-center rounded-lg p-4 bg-sky-400 shadow-md shadow-stone-100">
                <div className="custom-file-input w-[300px] h-[200px]">
                    <input className="h-[150px] w-[280px]" type="file" onChange={handleFileUpload} />
                    <CloudUpload className="absolute pointer-events-none top-0 left-0 h-[150px] w-[280px]" />
                    <p className="text-center">{fileName ? fileName : 'No file choosen'}</p>
                </div>
            </form>
            <div>
                {isLoading ? <p className="text-xl font-semibold">Extracting...</p> : <p className="text-xl font-semibold">{message}</p>}
            </div>
        </section>
    )
}

export default UploadDocument
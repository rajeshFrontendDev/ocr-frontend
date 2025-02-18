"use client"
import { handleSubmit } from "@/utils/handleSubmit"
import { CloudUpload } from "lucide-react"
import React from "react"

const ExtractTextAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/extract-text/`

const UploadDocument = () => {
    const [fileName, setFileName] = React.useState<string | null>(null)

    const formData = new FormData()

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        else {
            setFileName(e?.target?.files[0].name)
            formData.append('file', e?.target?.files[0])
            const { data, loading, err } = await handleSubmit(ExtractTextAPIURL, formData, 'POST')
            console.log('res', data)
        }
    }

    return (
        <section className="flex flex-col justify-center items-center">
            <p>Upload your image</p>
            <form action="" >
                <div className="custom-file-input rounded-lg p-4 bg-sky-400 shadow-md shadow-stone-100">
                    <input type="file" onChange={handleFileUpload} />
                    <CloudUpload className="abosolute top-0 left-0" />
                    <span>{fileName ? fileName : 'No file choosen'}</span>
                </div>
            </form>
        </section>
    )
}

export default UploadDocument
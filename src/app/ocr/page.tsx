"use client"
import React from 'react'
import { fetchApi } from '@/customHooks/fetchApi'

const documentsListAPIURL = `${process.env.NEXT_PUBLIC_API_URL}ocr/api/documents/`
const page = () => {

    const { data, isLoading, error }: any = fetchApi(documentsListAPIURL, "GET")

    console.log('data', data?.data.groups)
    console.log('isLoading', isLoading)
    console.log('error', error)
    const documentsData = data?.data.groups

    return (
        <section>
            <div>
                {
                    documentsData && documentsData.map((document: any, i: number) => (
                        <div>
                            {document.result_group_id}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default page
"use client"

import { useSearchParams } from 'next/navigation'

const ViewDocument = () => {
    const searchParams = useSearchParams()
    const document: any = localStorage.getItem('stringData')
    const documentData = JSON.parse(atob(document))

    console.log('data', documentData)


    return (
        // document view section
        <section className='w-full h-full text-white'>
            <div></div>
            {
                documentData && documentData.map((data: any) => (
                    <p style={{ top: data.top, left: data.left, position: 'absolute', border: '1px solid' }} key={data.id}>
                        {data?.text}
                    </p>
                ))
            }

        </section>
    )
}

export default ViewDocument
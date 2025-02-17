"use client"

import { useSearchParams } from 'next/navigation'

const ViewDocument = () => {
    const searchParams = useSearchParams()
    const document: any = searchParams.get('data')
    const documentData = document ? JSON.parse(decodeURIComponent(document)) : null;

    console.log('data', documentData[0]?.id)


    return (
        // document view section
        <section>
            <div>view section</div>
            {
                // documentData && documentData?.map((data: any) => {
                //     <p>
                //         {data.text}
                //     </p>
                // })
            }
        </section>
    )
}

export default ViewDocument
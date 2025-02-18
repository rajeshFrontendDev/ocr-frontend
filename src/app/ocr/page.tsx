'use client'

import React from 'react'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import DocumentsList from './DocumentLists';
import UploadDocument from './UploadDocument';

const page = () => {
    const [renderer, setRenderer] = React.useState<number>(0)

    const handelTriggerer = () => {
        setRenderer((prev: number) => prev + 1)
    }

    return (
        <section className=''>
            <MaxWidthWrapper className='mt-10 px-2'>
                <UploadDocument handelTriggerer={handelTriggerer} />
                <DocumentsList handelTriggerer={handelTriggerer} renderer={renderer} />
            </MaxWidthWrapper>
        </section>
    )
}

export default page
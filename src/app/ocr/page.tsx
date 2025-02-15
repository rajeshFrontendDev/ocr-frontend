import React from 'react'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import DocumentsList from './DocumentLists';
import UploadDocument from './UploadDocument';

const page = () => {

    return (
        <section className=''>
            <MaxWidthWrapper>
                <UploadDocument />
                <DocumentsList />
            </MaxWidthWrapper>
        </section>
    )
}

export default page
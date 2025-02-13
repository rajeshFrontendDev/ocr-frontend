import React from 'react'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { DocumentsList } from './DocumentLists';

const page = () => {

    return (
        <section className=''>
            <MaxWidthWrapper>
                <DocumentsList />
            </MaxWidthWrapper>
        </section>
    )
}

export default page
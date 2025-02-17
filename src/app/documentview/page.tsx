"use client"
import React from 'react'
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import ViewDocument from './ViewDocument';

const page = () => {

    return (
        <section className=''>
            <MaxWidthWrapper>
                <ViewDocument />
            </MaxWidthWrapper>
        </section>
    )
}

export default page
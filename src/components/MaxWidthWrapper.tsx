import { cn } from "@/utils/twmerge"
import React from "react"

type propsType = {
    children: React.ReactNode;
    className?: string
}

export const MaxWidthWrapper = ({ children, className }: propsType) => {
    return (
        <div className={cn("container mx-auto", className)}>
            {children}
        </div>
    )
}

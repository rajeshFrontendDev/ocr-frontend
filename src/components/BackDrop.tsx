import { cn } from "@/utils/twmerge"

interface PropsType {
    transHead?: boolean;
    closeHandler: () => void
}

export const BackDrop = (props: PropsType) => {
    const { transHead, closeHandler } = props
    return (
        <div
            onClick={closeHandler}
            className={cn("fixed inset-0 z-10 bg-blue-300 opacity-40", transHead && 'top-[80px]')} />
    )
}
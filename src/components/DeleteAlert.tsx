import { BackDrop } from "./BackDrop"

interface PropsType {
    closeHandler: () => void
    deleteHandler: () => void
}

export const DeleteAlert = ({ closeHandler, deleteHandler }: PropsType) => {
    return (
        <>
            <div className="fixed left-1/2 top-1/2 z-20 rounded space-y-2 bg-white p-8 -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-gray-700 text-center font-semibold text-lg">
                    Are you sure to delete?
                </h2>

                <div className="space-x-4">
                    <button className="px-4 py-2 rounded-lg bg-blue-400 " onClick={closeHandler}>
                        cancel
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-green-700" onClick={deleteHandler}>
                        Confirm
                    </button>
                </div>
            </div>
            <BackDrop closeHandler={closeHandler} />
        </>
    )
}
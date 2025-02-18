import { CloudDownload, EyeOff, Trash2 } from 'lucide-react';
import { format } from "date-fns";

type propsType = {
    document: {
        result_group_id: number;
        tests: {
            created_at: string
        }[]
    };
    buttonConfig: {
        handleDownload: (value: number) => void;
        handleNavigate: (value: object) => void;
        setGroupId: (value: number) => void
    }
}

export const DocumentCard = ({ document, buttonConfig }: propsType) => {
    return (
        <button className='block bg-[#3D3D3D] px-4 py-2 rounded-lg hover:opacity-80' >
            <p className='font-bold'>Document</p>
            <div className='flex justify-center gap-8 mt-2'>
                <CloudDownload className='hover:text-sky-600'
                    onClick={() => buttonConfig.handleDownload(document.result_group_id)}
                />
                <EyeOff className='hover:text-sky-600'
                    onClick={() => buttonConfig.handleNavigate(document)}
                />
                <Trash2 className='hover:text-sky-600'
                    onClick={() => buttonConfig.setGroupId(document.result_group_id)} />
            </div>
            <p>{format(new Date(document.tests[0]?.created_at), 'dd-MMM-yyyy, HH:MM')}</p>
        </button>
    )
}
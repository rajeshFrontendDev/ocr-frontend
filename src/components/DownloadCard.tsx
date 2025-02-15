import { CloudDownload, EyeOff, Trash2 } from 'lucide-react';
import { format } from "date-fns";

type propsType = {
    document: {
        result_group_id: number;
        tests: {
            created_at: string
        }[]
    };
    handleExcelDownload: (value: number) => void
}

export const DownloadCard = ({ document, handleExcelDownload }: propsType) => {
    return (
        <button className='block bg-[#3D3D3D] px-4 py-2 rounded-lg hover:opacity-80' >
            <p className='font-bold'>Document Name</p>
            <div className='flex justify-center gap-8 mt-2'>
                <CloudDownload className='hover:text-sky-600' onClick={() => handleExcelDownload(document.result_group_id)} />
                <EyeOff className='hover:text-sky-600' />
                <Trash2 />
            </div>
            <p>{format(new Date(document.tests[0]?.created_at), 'dd-MMM-yyyy, HH:MM')}</p>
        </button>
    )
}
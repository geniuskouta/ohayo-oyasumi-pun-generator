import { PunSingle, Nullable } from '../../utils/types'

interface DispayProps {
    newPun: Nullable<PunSingle>,
}

export function PunGeneratorDisplay ({newPun}: DispayProps) {
    return (
        <>
            {
                newPun && newPun.text
            }
        </>
    );
}

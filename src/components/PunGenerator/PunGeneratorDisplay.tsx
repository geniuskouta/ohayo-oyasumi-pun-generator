import { PunSingle, Nullable } from '../../utils/types'

interface DispayProps {
    newPun: Nullable<PunSingle>,
}

export function PunGeneratorDisplay ({newPun}: DispayProps) {
    return (
        <div className="pungenerator-display">
            {
                newPun ? newPun.text : 'おつかれさま'
            }
        </div>
    );
}

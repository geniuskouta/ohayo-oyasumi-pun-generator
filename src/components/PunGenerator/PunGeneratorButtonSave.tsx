import { PunSingle, Nullable, Dispatcher } from '../../utils/types'

interface ButtonProps {
    newPun: Nullable<PunSingle>,
    punCollection: PunSingle[]
    setPunCollection: Dispatcher<PunSingle[]>
}

export function PunGeneratorButtonSave ({newPun, punCollection, setPunCollection}: ButtonProps) {
    return (
        newPun && <a
        className="pungenerator-action-button"
        onClick={() => {
            punCollection = punCollection.filter(item => item.id !== newPun.id);
            setPunCollection([newPun, ...punCollection]);
        }}>Save</a>
    );
}

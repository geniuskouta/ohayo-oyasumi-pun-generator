import {Dispatch, SetStateAction} from 'react';
import { PunSingle } from '../../utils/types'

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface ButtonProps {
    setNewPun: Dispatcher<PunSingle | null>
}

const newPun: PunSingle = {
    id: 4,
    text: 'new pun',
    date: new Date()
}

export function PunGeneratorButtonCreate ({setNewPun}: ButtonProps) {
    return (
        <a className="pungenerator-action-button" onClick={() => {
            setNewPun(newPun)
        }}>Generate</a>
    );
}

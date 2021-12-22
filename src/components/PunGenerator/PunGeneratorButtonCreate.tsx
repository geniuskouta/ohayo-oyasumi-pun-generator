import {Dispatch, SetStateAction} from 'react';
import { PunSingle } from '../../utils/types'
import { otsukarePun } from '../../utils/pun'

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface ButtonProps {
    setNewPun: Dispatcher<PunSingle | null>
}

export function PunGeneratorButtonCreate ({setNewPun}: ButtonProps) {
    const newPun: PunSingle = {
        id: 4,
        text: otsukarePun(),
        date: new Date()
    }

    return (
        <a className="pungenerator-action-button" onClick={() => {
            setNewPun(newPun)
        }}>Generate</a>
    );
}

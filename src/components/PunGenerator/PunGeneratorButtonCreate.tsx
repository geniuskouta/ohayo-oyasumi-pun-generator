import {Dispatch, SetStateAction} from 'react';
import { PunSingle } from '../../utils/types'
import { pickOtsukarePun } from '../../utils/pun'

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface ButtonProps {
    setNewPun: Dispatcher<PunSingle | null>
}

export function PunGeneratorButtonCreate ({setNewPun}: ButtonProps) {
    const newPun: PunSingle = pickOtsukarePun();
    newPun.date = new Date();
    return (
        <a
        href="#"
        className="pungenerator-action-button" onClick={(e) => {
            e.preventDefault();
            setNewPun(newPun)
        }}>Generate</a>
    );
}

import { PunSingle } from './types'
import punData from '../data/pun.json'

const otsukareArray = punData.otsukare;
let index = 0;

export function pickOtsukarePun(): PunSingle {
    if(index < otsukareArray.length - 1) {
        index++;
    } else {
        index = 0;
    }

    return otsukareArray[index];
}

export const savePunToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
}

export const savePunToLocalStorage = (key: string, pun: PunSingle): void => {
    let storageExists: boolean = localStorage.getItem(key) ? true : false;

    const initializePunList = () => {
        let punList = [];
        punList.push(pun)
        localStorage.setItem(key, JSON.stringify(punList));
    }

    const savePun = () => {
        let punList: any = localStorage.getItem(key);
        console.log(punList)
        punList = JSON.parse(punList);
        punList = punList.filter((item: any) => item.id !== pun.id);
        punList.push(pun);
        localStorage.setItem(key, JSON.stringify(punList));
    }

    switch(key) {
        case 'otsukare':
        case 'ohayo':
        case 'oyasumi':
            if(!storageExists) {
                initializePunList();
            }
            savePun();
            break;
        default:
            return ;
    }
}

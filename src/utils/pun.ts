import { PunSingle } from './types'
import punData from '../data/pun.json'

const otsukareArray = punData.otsukare;
let randomIndex = getRandomIndex(otsukareArray);

function getRandomIndex(list: PunSingle[]) {
    return Math.floor(Math.random() * list.length)
}

export function pickOtsukarePun(): PunSingle {
    let prevRandomIndex = randomIndex;
    randomIndex = getRandomIndex(otsukareArray);
    if(prevRandomIndex === randomIndex) {
        let maxIndex = randomIndex === otsukareArray.length - 1;
        randomIndex =  maxIndex ? randomIndex - 1 : randomIndex + 1;
    }
    return otsukareArray[randomIndex];
}

export const savePunToClipboard = (text: string) : PunSingle[] | void => {
    navigator.clipboard.writeText(text);
}

export const getPunFromLocalStorage = (key: string) => {
    let storageExists: boolean = localStorage.getItem(key) ? true : false;
    if(storageExists) {
        let punList = localStorage.getItem(key) || '';
        return JSON.parse(punList);
    }
}

export const updatePunListToLocalStorage = (key: string, punList: PunSingle[]): void => {
    const savePunList = () => {
        localStorage.setItem(key, JSON.stringify(punList));
    }

    switch(key) {
        case 'otsukare':
        case 'ohayo':
        case 'oyasumi':
            savePunList();
            break;
        default:
            return ;
    }
}

import {Dispatch, SetStateAction} from 'react';

export type Nullable<T> = T | null;
export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface PunSingle {
    id: number,
    text: string,
    date: Date
}

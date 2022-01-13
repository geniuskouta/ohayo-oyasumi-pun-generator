import { useState } from 'react';
import { PunSingle, Dispatcher } from '../../utils/types'
import { getPunDate } from '../../utils/date';
import { savePunToClipboard, updatePunListToLocalStorage } from '../../utils/pun';
import { ReactComponent as PunDeleteIcon } from '../../assets/icon/trash-alt-regular_6C1838.svg'


interface ItemProps {
    punData: PunSingle,
    punCollection: PunSingle[],
    setPunCollection: Dispatcher<PunSingle[]>
}

interface NotificationProps {
    isNotificationHidden: Boolean
}

interface DeleteButtonProps {
    punData: PunSingle,
    punCollection: PunSingle[]
    setPunCollection: Dispatcher<PunSingle[]>
}

const PunItem = ({ punData, punCollection, setPunCollection }: ItemProps) => {
    const date: string = punData.date ? getPunDate(punData.date) : '';
    const [isCopied, setCopied] = useState<Boolean>(false);
    const [isNotificationHidden, setNotificationHidden] = useState<Boolean>(false);

    return (
        <li
            className={"punlist-item"}
            key={'punlist-item-' + punData.id}
            onClick={() => {
                if (!isCopied) {
                    savePunToClipboard(punData.text);
                    setCopied(true);
                    setTimeout(() => {
                        setNotificationHidden(true);
                    }, 1000);
                    setTimeout(() => {
                        setNotificationHidden(false);
                        setCopied(false);
                    }, 1200);
                }
            }}>
            <div className="punlist-item-text">{punData.text}</div>
            <div className="punlist-item-date">{date}</div>
            <PunDeleteButton punData={punData} punCollection={punCollection} setPunCollection={setPunCollection} />
            {isCopied && <PunItemNotificationClipboard isNotificationHidden={isNotificationHidden} />}
        </li>
    );
}

const PunItemNotificationClipboard = ({ isNotificationHidden }: NotificationProps) => {
    return (
        <div
            className={
                isNotificationHidden ? "punlist-item-notification-clipboard " + "punlist-item-notification-clipboard-hidden"
                    : "punlist-item-notification-clipboard"
            }>
            Copied!
        </div>
    );
}

const PunDeleteButton = ({ punData, punCollection, setPunCollection }: DeleteButtonProps) => {
    return (
        <a className="punlist-item-delete-button"
            onClick={() => {
                punCollection = punCollection.filter(item => item.id !== punData.id);
                setPunCollection([...punCollection]);
                updatePunListToLocalStorage('otsukare', punCollection)
            }}
        >
            <PunDeleteIcon className="punlist-item-delete-button-icon" />
        </a>
    );
}

export default PunItem;  

import { useState } from 'react';
import { PunSingle } from '../../utils/types'
import { getPunDate } from '../../utils/date';
import { savePunToClipboard } from '../../utils/pun'

interface ListProps {
  punCollection: PunSingle[],
}

interface ItemProps {
  punData: PunSingle
}

interface NotificationProps {
  isNotificationHidden: Boolean
}

function PunList({punCollection}: ListProps) {
  return (
    <ul>
      {
        punCollection.map((punItem: PunSingle) => {
          return <PunItem punData={punItem} />
        })
      }
    </ul>
  );
}

const PunItem = ({punData}: ItemProps) => {
    const date: string = punData.date ? getPunDate(punData.date) : '';
    const [isCopied, setCopied] = useState<Boolean>(false);
    const [isNotificationHidden, setNotificationHidden] = useState<Boolean>(false);

    return (
      <li
      className={"punlist-item"}
      key={'punlist-item-' + punData.id}
      onClick={() => {
        if(!isCopied) {
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
        {isCopied && <PunItemNotificationClipboard isNotificationHidden={isNotificationHidden} />}
      </li>
    );
}

const PunItemNotificationClipboard = ({isNotificationHidden}: NotificationProps) => {
  return (
    <div
    className={
      isNotificationHidden ? "punlist-item-notification-clipboard " + "punlist-item-notification-clipboard-hidden"
      :"punlist-item-notification-clipboard"
    }>
      Copied!
    </div>
  );
}

export default PunList;

import { PunSingle } from '../../utils/types'
import { getPunDate } from '../../utils/date';

interface ListProps {
  punCollection: PunSingle[],
}

interface ItemProps {
  punData: PunSingle
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
    const date: string = getPunDate(punData.date);
    return (
      <li className="punlist-item">
        <div className="punlist-item-text">{punData.text}</div>
        <div className="punlist-item-date">{date}</div>
      </li>
    );
}

export default PunList;

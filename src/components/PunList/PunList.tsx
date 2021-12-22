import { PunSingle } from '../../utils/types'

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
    const date: string = punData.date.toString();
    return (
      <li>
        {punData.text}<br/>
        {date}
      </li>
    );
}

export default PunList;

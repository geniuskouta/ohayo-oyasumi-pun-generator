import React, {useState} from 'react';
import { PunSingle } from '../../utils/types'

const initialPunCollection: PunSingle[] = [
  {
    id: 1,
    text: 'ohayo',
    date: new Date(),
  }
];

function PunList() {
  const [punCollection, setPunCollection] = useState(initialPunCollection);
  return (
    <ul>
      <PunItem punData={punCollection[0]} />
    </ul>
  );
}
interface Props {
  punData: PunSingle
}

const PunItem: React.FC<Props> = ({punData}) => {
    const date: string = punData.date.toString();
    return (
      <li>
        {punData.text}<br/>
        {date}
      </li>
    );
}

export default PunList;

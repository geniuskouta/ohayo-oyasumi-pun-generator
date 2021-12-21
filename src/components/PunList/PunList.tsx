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
    return <li>{punData.text}</li>;
}

export default PunList;

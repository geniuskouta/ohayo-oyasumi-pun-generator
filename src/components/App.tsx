import React, {useEffect, useState} from 'react';
import PunList from './PunList/PunList'
import { PunSingle } from '../utils/types'

const initialPunCollection: PunSingle[] = [
  {
    id: 1,
    text: 'ohayo',
    date: new Date(),
  },
  {
    id: 2,
    text: 'kimaaa',
    date: new Date(),
  },
];

function App() {
  const [punCollection, setPunCollection] = useState(initialPunCollection);

  return (
    <>
      <PunList punCollection={punCollection} />
    </>
  );
}

export default App;

// https://typeofnan.dev/your-first-react-typescript-project-todo-app/

import {useState} from 'react';
import PunList from './PunList/PunList'
import { PunSingle } from '../utils/types'

import { PunGenerator } from './PunGenerator/PunGenerator';
import { PunGeneratorButtonCreate } from './PunGenerator/PunGeneratorButtonCreate';
import { PunGeneratorButtonSave } from './PunGenerator/PunGeneratorButtonSave';
import { PunGeneratorDisplay } from './PunGenerator/PunGeneratorDisplay';

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
  const [newPun, setNewPun] = useState<PunSingle | null>(null);

  return (
    <>
      <PunGenerator>
        <PunGeneratorDisplay newPun={newPun} />
        <PunGeneratorButtonCreate setNewPun={setNewPun} />
        <PunGeneratorButtonSave
        newPun={newPun}
        punCollection={punCollection}
        setPunCollection={setPunCollection} />
      </PunGenerator>
      <PunList punCollection={punCollection} />
    </>
  );
}

export default App;

// https://typeofnan.dev/your-first-react-typescript-project-todo-app/

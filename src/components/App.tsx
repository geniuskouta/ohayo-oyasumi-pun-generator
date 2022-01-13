import {useState, useEffect} from 'react';
import PunItem from './PunList/PunItem';
import { PunSingle } from '../utils/types'
import { getPunFromLocalStorage } from '../utils/pun';

import { PunGenerator } from './PunGenerator/PunGenerator';
import { PunGeneratorButtonCreate } from './PunGenerator/PunGeneratorButtonCreate';
import { PunGeneratorButtonSave } from './PunGenerator/PunGeneratorButtonSave';
import { PunGeneratorDisplay } from './PunGenerator/PunGeneratorDisplay';

function App() {
  const [punCollection, setPunCollection] = useState<PunSingle[] | []>([]);
  const [newPun, setNewPun] = useState<PunSingle | null>(null);

  useEffect(() => {
      let punList = getPunFromLocalStorage('otsukare');
      if(punList) {
        setPunCollection(punList);
      }
  }, []);

  return (
    <>
      <PunGenerator>
        <PunGeneratorDisplay newPun={newPun} />
        <nav className="pungenerator-action-button-list">
          <PunGeneratorButtonCreate setNewPun={setNewPun} />
          <PunGeneratorButtonSave
          newPun={newPun}
          punCollection={punCollection}
          setPunCollection={setPunCollection} />
        </nav>
      </PunGenerator>
      <ul>
        {/* avoid props drilling by not making PunList component here */}
        {
          punCollection.map(punData => {
            return <PunItem
            punData={punData}
            punCollection={punCollection}
            setPunCollection={setPunCollection}
            />
          })
        }
      </ul>
    </>
  );
}

export default App;

// https://typeofnan.dev/your-first-react-typescript-project-todo-app/

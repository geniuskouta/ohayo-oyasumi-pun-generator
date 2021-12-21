import React, {useEffect, useState} from 'react';
import PunList from './PunList/PunList'

function App() {
  const [dataList, setDataList] = useState<any | null>(null);

  useEffect(() => {
    console.log(dataList)
      if(!dataList) {
        setDataList([{id: 1, text: 'ohayo', date: new Date()}]);
        console.log(dataList)
      }
  }, [dataList]);

  return (
    <>
      <PunList dataList={dataList} />
    </>
  );
}

export default App;

// https://typeofnan.dev/your-first-react-typescript-project-todo-app/

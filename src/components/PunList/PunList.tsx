import React from 'react';

function PunList(dataList: any) {
  return (
    <ul>
        {
            dataList.map((item: any, index: number) => {
                return <PunItem punData={item} key={index}  />
            })
        }
    </ul>
  );
}

function PunItem(punData: any) {
    return <li>{punData.text}</li>;
}

export default PunList;

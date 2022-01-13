// not used

interface ListProps {
  children?: React.ReactNode
}

function PunList({children}: ListProps) {
  return (
    <ul>
      {{children}}
    </ul>
  );
}

export default PunList;

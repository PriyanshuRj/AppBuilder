const PolkaDot = () => {
  return <div className="w-1 h-1 bg-gray-500 rounded-full"></div>;
};

const PolkaDotGrid = ({ rows, columns }) => {
  const polkaDots = [];

  for (let i = 0; i < columns; i++) {
    polkaDots.push(<PolkaDot key={i} />);
  }

  return <div >
    {[...Array(rows * 20)].map((_, rowIndex) => (
      <div key={rowIndex} className={`grid h-[1.25rem]`} style={{ gridTemplateColumns: `repeat(20, minmax(0, 1fr))` }}>

        {polkaDots}
      </div>
    ))}


  </div>
};
export default PolkaDotGrid;
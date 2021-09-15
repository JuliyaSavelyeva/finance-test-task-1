const redBackgroundStyle = redBackground[index]
  ? { backgroundColor: '#FCE8E6' }
  : { backgroundColor: '#e6f4ea' };

const redColorStyle = redBackground[index] ? { color: '#a50e0e' } : { color: '#137333' };

const arrow = redBackground[index] ? <ArrowDown /> : <ArrowUp />;

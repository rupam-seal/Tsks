const Progress = ({ task }) => {
  const percentage = task.progress;
  return (
    <div className="progress">
      <Bar>{percentage}</Bar>
      <Percentage>{percentage}</Percentage>
    </div>
  );
};

export const Bar = ({ children }) => {
  return (
    <div className="bar">
      <div className="bar__line" style={{ width: `${children}%` }}></div>
    </div>
  );
};

export const Percentage = ({ children }) => {
  return <span className="percentage">{children}%</span>;
};

export default Progress;

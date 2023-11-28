import "./app-info.css";

const AppInfo = (props) => {
  const { numEmployers, numEmployersUp } = props;

  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании Interlok</h1>
      <h2>Общее число сотрудников: {numEmployers}</h2>
      <h2>Премию получат: {numEmployersUp}</h2>
    </div>
  );
};

export default AppInfo;

import "./Body.css";
import CardDay from "../CardDay/CardDay";
import DaysRow from "../DaysRow/DaysRow";
const Body = () => {
  return (
    <div id="Body">
      <DaysRow />
      <div id="RowWeek1" className="RowWeek">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
      <div id="RowWeek2" className="RowWeek">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
      <div id="RowWeek3" className="RowWeek">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
      <div id="RowWeek4" className="RowWeek">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
      <div id="RowWeek5" className="RowWeek">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
      <div id="RowWeek6" className="RowWeek">
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </div>
    </div>
  );
};

export default Body;

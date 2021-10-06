import "./Body.css";
import WeeksRows from "../WeeksRows/WeeksRows";
import DaysRow from "../DaysRow/DaysRow";
const Body = () => {
  return (
    <div id="Body">
      <DaysRow />
      <WeeksRows />
    </div>
  );
};

export default Body;

import "./WeeksRows.css";
import CardDay from "../CardDay/CardDay";
import moment from "moment";
const WeeksRows = () => {
  var previousMonth = moment()
    .subtract(1, "M")
    .endOf("month")
    .format("YYYY-MM-DD");
  var nextMonth = moment().add(1, "M").startOf("month").format("YYYY-MM-DD");
  var daysInMonth = moment().daysInMonth();
  var fullMonth = [];
  var previousMonthLastDays: Array<{ dayN: string; dayT: string }> = [];
  var nextMonthFirtDays = [];
  var startOfMonth = moment().startOf("month").format("YYYY-MM-DD");

  for (let index = 0; index < daysInMonth; index++) {
    fullMonth.push({
      dayN: moment(startOfMonth).format("DD"),
      dayT: moment(startOfMonth).format("d"),
    });
    startOfMonth = moment(startOfMonth).add(1, "d").format("YYYY-MM-DD");
  }

  if (fullMonth[0].dayT !== "0") {
    for (let index = 0; index < parseInt(fullMonth[0].dayT); index++) {
      previousMonthLastDays.push({
        dayN: moment(previousMonth).format("DD"),
        dayT: moment(previousMonth).format("d"),
      });
      previousMonth = moment(previousMonth)
        .subtract(1, "d")
        .format("YYYY-MM-DD");
    }
    previousMonthLastDays = previousMonthLastDays.reverse();
  }

  if (fullMonth[fullMonth.length - 1].dayT !== "6") {
    for (
      let index = 6;
      index > parseInt(fullMonth[fullMonth.length - 1].dayT);
      index--
    ) {
      nextMonthFirtDays.push({
        dayN: moment(nextMonth).format("DD"),
        dayT: moment(nextMonth).format("d"),
      });
      nextMonth = moment(nextMonth).add(1, "d").format("YYYY-MM-DD");
    }
  }

  fullMonth = previousMonthLastDays.concat(fullMonth).concat(nextMonthFirtDays);
  const weekRows = [1, 2, 3, 4, 5, 6, 7];
  console.log(fullMonth);
  return (
    <div id="WeeksRows">
      {weekRows.map((i) => (
        <div id={"RowWeek" + i} className="RowWeek" key={i}>
          <CardDay />
          <CardDay />
          <CardDay />
          <CardDay />
          <CardDay />
          <CardDay />
          <CardDay />
        </div>
      ))}
    </div>
  );
};

export default WeeksRows;

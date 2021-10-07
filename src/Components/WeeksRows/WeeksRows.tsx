import "./WeeksRows.css";
import moment from "moment";
const WeeksRows = () => {
  var previousMonth = moment()
    .subtract(1, "M")
    .endOf("month")
    .format("YYYY-MM-DD");
  var nextMonth = moment().add(1, "M").startOf("month").format("YYYY-MM-DD");
  var daysInMonth = moment().daysInMonth();
  var fullMonth: Array<{ dayN: string; dayT: string; current: boolean }> = [];
  var previousMonthLastDays: Array<{
    dayN: string;
    dayT: string;
    current: boolean;
  }> = [];
  var nextMonthFirtDays = [];
  var startOfMonth = moment().startOf("month").format("YYYY-MM-DD");

  for (let index = 0; index < daysInMonth; index++) {
    fullMonth.push({
      dayN: moment(startOfMonth).format("DD"),
      dayT: moment(startOfMonth).format("d"),
      current: true,
    });
    startOfMonth = moment(startOfMonth).add(1, "d").format("YYYY-MM-DD");
  }

  if (fullMonth[0].dayT !== "0") {
    for (let index = 0; index < parseInt(fullMonth[0].dayT); index++) {
      previousMonthLastDays.push({
        dayN: moment(previousMonth).format("DD"),
        dayT: moment(previousMonth).format("d"),
        current: false,
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
        current: false,
      });
      nextMonth = moment(nextMonth).add(1, "d").format("YYYY-MM-DD");
    }
  }

  fullMonth = previousMonthLastDays.concat(fullMonth).concat(nextMonthFirtDays);
  const weekRows = [1, 2, 3, 4, 5, 6];
  const daysColumns = [1, 2, 3, 4, 5, 6, 7];
  var indexFullMonth = -1;
  return (
    <div id="WeeksRows">
      {weekRows.map((i) => {
        return (
          <div id={"RowWeek" + i} className="RowWeek" key={i}>
            {daysColumns.map((days) => {
              indexFullMonth++;
              if (fullMonth[indexFullMonth].current === false) {
                return (
                  <div
                    className="CardNotCurrentDay"
                    key={`CardDay${indexFullMonth}`}
                  >
                    <span>{fullMonth[indexFullMonth].dayN}</span>
                  </div>
                );
              } else {
                return (
                  <div className="CardDay" key={`CardDay${indexFullMonth}`}>
                    <span>{fullMonth[indexFullMonth].dayN}</span>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WeeksRows;

import "./Header.css";
import moment from "moment";
import "moment/locale/pt-br";
const Header = () => {
  var currentMonth = moment().format("YYYY-MM-DD");
  var previousMonth = moment()
    .subtract(1, "M")
    .endOf("month")
    .format("YYYY-MM-DD");
  var nextMonth = moment().add(1, "M").startOf("month").format("YYYY-MM-DD");
  var daysInMonth = moment().daysInMonth();
  var fullMonth = [];
  var startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  var startOfMonthText = moment().startOf("month").format("YYYY-MM-DD");

  for (let index = 0; index < daysInMonth; index++) {
    fullMonth.push({
      dayN: moment(startOfMonth).format("DD"),
      dayT: moment(startOfMonthText).format("d"),
    });
    startOfMonth = moment(startOfMonth).add(1, "d").format("YYYY-MM-DD");
    startOfMonthText = moment(startOfMonthText)
      .add(1, "d")
      .format("YYYY-MM-DD");
  }

  if (fullMonth[0].dayT !== "0") {
    console.log(7 - parseInt(fullMonth[0].dayT));
    console.log(previousMonth);
    console.log(nextMonth);
  }

  return (
    <div id="Header">
      <span>{moment().format("MMMM").toUpperCase()}</span>
    </div>
  );
};

export default Header;

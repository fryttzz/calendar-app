import "./Header.css";
import moment from "moment";
import "moment/locale/pt-br";
const Header = () => {
  return (
    <div id="Header">
      <span>{moment().format("MMMM").toUpperCase()}</span>
    </div>
  );
};

export default Header;

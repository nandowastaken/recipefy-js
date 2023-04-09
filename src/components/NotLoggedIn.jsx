import { Link } from "react-router-dom";
import notLogged from "../assets/svg/notLogged.svg";

var styles = {
  profilePicture: {
    borderRadius: "100%",
    width: "45px",
    height: "45px",
  },
};

export default function NotLoggedIn() {
  return (
    <Link to="/login">
      <img src={notLogged} style={styles.profilePicture}></img>
    </Link>
  );
}

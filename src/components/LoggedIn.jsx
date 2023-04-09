import { Link } from "react-router-dom";
import women from "../assets/imgs/women.jpg";

var styles = {
  profilePicture: {
    borderRadius: "100%",
    width: "45px",
    height: "45px",
  },
};

export default function LoggedIn() {
  return (
    <Link to="/profile">
      <img src={women} style={styles.profilePicture}></img>
    </Link>
  );
}

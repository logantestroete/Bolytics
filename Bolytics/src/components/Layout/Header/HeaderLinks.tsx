import { Link } from "react-router";
import "../../../styles/index.css";
import HeaderStyles from "./componentStyles";


function HeaderLinks() {
    return (
        <nav className={`${HeaderStyles.links}`}>
            <Link to="/" >Dashboard</Link>
            <Link to="/" >Simulations</Link>
            <Link to="/" >Comparisons</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default HeaderLinks;
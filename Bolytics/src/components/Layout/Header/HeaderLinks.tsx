import { Link } from "react-router";
import "../../../styles/index.css"


function HeaderLinks() {
    return (
        <nav className="flex gap-6 justify-self-center">
            <Link to="/" >Dashboard</Link>
            <Link to="/" >Simulations</Link>
            <Link to="/" >Comparisons</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default HeaderLinks;
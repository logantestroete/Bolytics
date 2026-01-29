import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-logo-container">
                <img src="/src/Assets/Bolytics_logo.png" className="header-logo"/>
                <div className="header-title">Bolytics</div>
            </div>
            <ul className="header-links">
                <li className="header-link">Players</li>
                <li className="header-link">Teams</li>
                <li className="header-link">Stats</li>
                <li className="header-link">About</li>
            </ul>
            <div className="header-account-links">
                <button className="header-login btn btn-primary">Log In</button>
                <button className="header-signup btn btn-skeleton">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;
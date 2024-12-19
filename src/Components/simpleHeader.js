import { Link } from "react-router-dom";
import logo from "./img/Logo-icon.svg"

export default function Header() {
    return(
        <header class="header" id="header-use">
        <div class="container header-container">
            <div class="logo">
                <Link to="/" class="logo-link">
                    <img src={logo} alt="logo" class="logo-img" />
                    <p class="logo-text">Mood</p>
                </Link>
            </div>
        </div>
        </header>
    );
}

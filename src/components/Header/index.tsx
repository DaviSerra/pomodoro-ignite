import { Headercontainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";
import logoIgnite from '../../assets/Logo-ignite.svg'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <Headercontainer>
            <img src={logoIgnite} />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Scroll">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </Headercontainer>
    )
}
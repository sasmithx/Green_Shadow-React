import { NavLink } from "react-router";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faList,
    faPaperPlane, faRightFromBracket,
    faShapes,
    faTractor,
    faTrowel,
    faUsersBetweenLines
} from '@fortawesome/free-solid-svg-icons';
import {faPagelines} from "@fortawesome/free-brands-svg-icons";

export function Navigation() {
    return (
        <div className="sidebar">
            <div className="logo-menu">
                <h2 className="logo">Menu</h2>
            </div>
            <ul className="nav flex-column" id="list">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/dashboard"
                        id="btnDash"
                    >
                        <FontAwesomeIcon icon={faPaperPlane}  size="lg"/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/vehicle"
                        id="btnVehicle"
                    >
                        <FontAwesomeIcon icon={faTractor}  size="lg"/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/crop"
                        id="btnCrop"
                    >
                        <FontAwesomeIcon icon={faPagelines}  size="lg"/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/staff"
                        id="btnStaff"
                    >
                        <FontAwesomeIcon icon={faUsersBetweenLines}  size="lg"/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/equipment"
                        id="btnEquipment"
                    >
                        <FontAwesomeIcon icon={faTrowel} size="lg"/>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/field"
                        id="btnField"
                    >
                        <FontAwesomeIcon icon={faShapes} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/log"
                        id="btnLog"
                    >
                        <FontAwesomeIcon icon={faList} />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/logout"
                        id="btnLogout"
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

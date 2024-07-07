import {React, Component} from "react";
import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return(
            <aside className="SideBar">
                <div className="sideBarTitle">
                    <span></span>
                </div>

                <ul className="sideBar-List">
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined">dashboard</span> Dashboard
                    </li>
                    <li className="sidebar-list-item">
                        <span className="material-icons-outlined">income</span> Income
                    </li>
                    <li className="sidebar-list-item">
                        <span class="material-icons-outlined">expense</span> Expenses
                    </li>
                    <li className="sidebar-list-item">
                        <span class="material-icons-outlined">setting</span> Settings
                    </li>
                    
                </ul>
            </aside>
        )
    }
}

export default Sidebar;
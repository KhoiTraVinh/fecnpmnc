import "./sidebar.css";
import {
  Home,
  AttachMoney,
  ConnectingAirports,
  MapsHomeWork,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/flights" className="link">
              <li className="sidebarListItem">
                <ConnectingAirports className="sidebarIcon" />
                Vé máy bay
              </li>
            </Link>
            <Link to="/hotels" className="link">
              <li className="sidebarListItem">
                <MapsHomeWork className="sidebarIcon" />
                Khách sạn
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Giao dịch
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

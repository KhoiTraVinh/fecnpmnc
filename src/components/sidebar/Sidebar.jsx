import "./sidebar.css";
import {
  Home,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  ConnectingAirports,
  MapsHomeWork,
  TravelExplore,
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
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PersonOutline className="sidebarIcon" />
                Người Dùng
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <TravelExplore className="sidebarIcon" />
                Địa điểm
              </li>
            </Link>
            <Link to="/airline" className="link">
              <li className="sidebarListItem">
                <ConnectingAirports className="sidebarIcon" />
                Hãng bay
              </li>
            </Link>
            <Link to="/hotel" className="link">
              <li className="sidebarListItem">
                <MapsHomeWork className="sidebarIcon" />
                Nhà hàng
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

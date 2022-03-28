import "./sidebar.css";
import * as React from "react";
import { Star } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

export const Sidebar = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="sidebar">
      <div className="sidebarSearching">
        <span className="sidebarSearchingTitle">Bộ lọc</span>
        <button className="sidebarSearchingButton">Áp dụng</button>
      </div>
      <div className="sidebarPrice">
        <span className="sidebarPriceTitle">Khoảng giá 1 người (Vnđ)</span>
        <div className="sidebarPriceTag">
          <div className="sidebarPriceTagElement">
            <Checkbox {...label} defaultChecked /> 0 - 500.000
          </div>
          <div className="sidebarPriceTagElement">
            <Checkbox {...label} /> 500.000 - 1.000.000
          </div>

          <div className="sidebarPriceTagElement">
            <Checkbox {...label} /> 1.000.000 - 2.000.000
          </div>

          <div className="sidebarPriceTagElement">
            <Checkbox {...label} /> 2.000.000 - 5.000.000
          </div>

          <div className="sidebarPriceTagElement">
            <Checkbox {...label} /> 5.000.000 - 20.000.000
          </div>

          <div className="sidebarPriceTagElement">
            <Checkbox {...label} /> 20.000.000 - 50.000.000
          </div>
        </div>
      </div>
      <div className="sidebarRate">
        <span className="sidebarRateTitle">Hạng sao</span>
        <div className="sidebarRateTag">
          <div className="sidebarRateTagElement">
            <Checkbox {...label} /> <Star className="sidebarRateIcon" />
          </div>

          <div className="sidebarRateTagElement">
            <Checkbox {...label} /> <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
          </div>

          <div className="sidebarRateTagElement">
            <Checkbox {...label} /> <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
          </div>

          <div className="sidebarRateTagElement">
            <Checkbox {...label} /> <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
          </div>

          <div className="sidebarRateTagElement">
            <Checkbox {...label} /> <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
            <Star className="sidebarRateIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

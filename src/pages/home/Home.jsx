import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { transactionNumData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      <div className="homeChart">
        <div className="homeChartTop">
          <FeaturedInfo />
        </div>
        <div className="homeChartBottom">
          <Chart
            data={transactionNumData}
            title="Thống kê giao dịch"
            grid
            dataKey="Giao dịch thành công"
          />
        </div>
      </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

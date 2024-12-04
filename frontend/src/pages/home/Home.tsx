import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox2 from "../../components/bigChartBox1/BigChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import SavingBox from "../../components/savings/savings";
import MapBox from "../../components/map/map";

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* Top Box */}
      <div className="box box1">
        <TopBox />
      </div>
      
      {/* Saving Box */}
      <div className="box box3">
        <SavingBox />
      </div>
      
      {/* Pie Chart Box */}
      <div className="box box4">
        <PieChartBox />
      </div>
      
      {/* Map Box */}
      <div className="box box5">
        <MapBox />
      </div>
      
      {/* Big Chart Box 2 */}
      <div className="box box6">
        <BigChartBox2 />
      </div>
      
      {/* Big Chart Box */}
      <div className="box box7">
        <BigChartBox />
      </div>
    </div>
  );
};

export default Home;

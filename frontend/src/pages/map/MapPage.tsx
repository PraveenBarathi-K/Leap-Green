import React from 'react';
import './MapPage.scss';
import SiteBox from '../../components/siteview/CurrentOverview';

import Performance from '../../components/parkperfomance/ParkPerformance';
import MapBox from '../../components/map/map';
import BigChartBox from '../../components/bigChartBox/BigChartBox';
import BigChartBox2 from '../../components/bigChartBox1/BigChartBox';
import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/Footer';
import LiveStatusBox from '../../components/parklivestatus/LiveStatusBox';

const MapPage: React.FC = () => {
    return (
        <div className="map-page">
            <Navbar />
            <div className="container">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
          
                    <main className="main-content">
                        {/* Top Box */}
                        <div className="box box1">
                        <MapBox />
                        </div>
                        
                        {/* Saving Box */}
                        <div className="box box3">
                            <LiveStatusBox />
                        </div>
                        
                        {/* Pie Chart Box */}
                        <div className="box box4">
                        <LiveStatusBox />
                        </div>
                        
                        {/* Map Box */}
                        <div className="box box5">
                            <Performance />
                        </div>
                        
                        {/* Big Chart Box 2 */}
                        <div className="box box6">
                            <SiteBox />
                        </div>
                        
                        {/* Big Chart Box */}
                        <div className="box box7">
                            <BigChartBox />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MapPage;
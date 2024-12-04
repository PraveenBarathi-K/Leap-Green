import React from 'react';
import './LiveStatusBox.scss';

const LiveStatusBox = () => {
  return (
    <div className="live-status-box">
      <h2>Live Status</h2>
      <div className="status-info">
        <div className="info-item">
          <h3>Instant Generation</h3>
          <p>2.7 MW</p>
        </div>
        <div className="info-item">
          <h3>Today's Generation</h3>
          <p>43.37 MWh</p>
        </div>
      </div>
      <div className="turbine-status">
        <h3>Turbine Status</h3>
        <div className="status-circles">
          <div className="circle run">
            <span>17</span>
            <p>Run</p>
          </div>
          <div className="circle not-prod">
            <span>0</span>
            <p>Not.Prod</p>
          </div>
          <div className="circle stop">
            <span>0</span>
            <p>Stop</p>
          </div>
          <div className="circle no-com">
            <span>0</span>
            <p>No.Com</p>
          </div>
        </div>
      </div>
      <div className="average-wind-speed">
        <h3>Average Wind Speed</h3>
        <p>6.18 (m/s)</p>
      </div>
    </div>
  );
};

export default LiveStatusBox; 
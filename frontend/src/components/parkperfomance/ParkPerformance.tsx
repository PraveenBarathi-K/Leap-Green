import React from 'react';
import './ParkPerformance.scss';

const ParkPerformance = () => {
    return (
        <div className="park-performance-card">
            <h2 className="title">Park Performance</h2>
            <div className="performance-metrics">
                <div className="metric">
                    <span>LPF (Yesterday)</span>
                    <span className="value">8.5 %</span>
                </div>
                <div className="metric">
                    <span>AVAILABILITY</span>
                    <span className="value">100 %</span>
                </div>
                <div className="metric">
                    <span>EFFICIENCY</span>
                    <span className="value">89.8 %</span>
                </div>
            </div>
            <h2 className="title">Alarms</h2>
            <div className="alarms-metrics">
                <div className="metric">
                    <span>Total Downtime</span>
                    <span className="value">3:50 Hrs.</span>
                </div>
                <div className="metric">
                    <span>Total Open Alarms</span>
                    <span className="value">257</span>
                </div>
                <div className="metric">
                    <span>Unresolved more than 24Hrs.</span>
                    <span className="value">253</span>
                </div>
            </div>
        </div>
    );
};

export default ParkPerformance;
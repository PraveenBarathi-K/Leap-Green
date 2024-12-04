import React from 'react';
import './CurrentOverview.scss';

const CurrentOverview = () => {
    const data = [
        { name: 'Q AK15', status: 'Active', generation: 107.9, windSpeed: 6.3, todaysGeneration: 2.35, plf: 17, availability: 100 },
        { name: 'Q AK16', status: 'Active', generation: 235.4, windSpeed: 6.9, todaysGeneration: 2.66, plf: 19, availability: 100 },
        { name: 'Q AK18', status: 'Active', generation: 182.7, windSpeed: 6.8, todaysGeneration: 2.15, plf: 16, availability: 100 },
        { name: 'Q AK223', status: 'Active', generation: 130.5, windSpeed: 5.7, todaysGeneration: 2.3, plf: 17, availability: 100 },
        { name: 'Q AK249', status: 'Active', generation: 63.6, windSpeed: 4.5, todaysGeneration: 4.16, plf: 26, availability: 100 },
        { name: 'Q AK25', status: 'Active', generation: 88.4, windSpeed: 6, todaysGeneration: 1.55, plf: 12, availability: 100 },
    ];

    return (
        <div className="current-overview">
            <h2>Current Overview - AKAL</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Wind Direction</th>
                        <th>Ins. Generation (kW)</th>
                        <th>Wind Speed (m/s)</th>
                        <th>Today's Generation (MWh)</th>
                        <th>PLF (%)</th>
                        <th>Machine Availability (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <span className={`status-indicator ${item.status.toLowerCase()}`}></span>
                                {item.status}
                            </td>
                            <td>↑</td> {/* Placeholder for Wind Direction */}
                            <td>{item.generation}</td>
                            <td>{item.windSpeed}</td>
                            <td>{item.todaysGeneration}</td>
                            <td>{item.plf}</td>
                            <td>
                                <div className="availability-bar">
                                    <div className="availability-fill" style={{ width: `${item.availability}%` }}></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CurrentOverview;
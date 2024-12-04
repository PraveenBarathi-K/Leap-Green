import React from 'react';

const TurbineDataTable: React.FC<{ data: any[] }> = ({ data }) => {
    return (
        <table className="turbine-table">
            <thead>
                <tr>
                    <th>Turbine</th>
                    <th>Control Time</th>
                    <th>Modified Time</th>
                    <th>Active Power In</th>
                    <th>Active Power Out</th>
                    <th>Reactive Power In</th>
                    <th>Reactive Power Out</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.turbine}</td>
                        <td>{item.controlTime}</td>
                        <td>{item.modifiedTime}</td>
                        <td>{item.atPwrIn}</td>
                        <td>{item.atPwrOut}</td>
                        <td>{item.reactPwrIn}</td>
                        <td>{item.reactPwrOut}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TurbineDataTable;
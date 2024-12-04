import React, { useState } from 'react';

interface DataFilterProps {
    onFilterChange: (filters: { startDate: string; endDate: string; attribute: string }) => void;
}

const DataFilter: React.FC<DataFilterProps> = ({ onFilterChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [attribute, setAttribute] = useState('Active Power In');

    const handleFilterChange = () => {
        onFilterChange({ startDate, endDate, attribute });
    };

    return (
        <div className="data-filter">
            <label>
                Start Date:
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label>
                End Date:
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            <label>
                Attribute:
                <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
                    <option value="Active Power In">Active Power In</option>
                    <option value="Active Power Out">Active Power Out</option>
                    <option value="Reactive Power In">Reactive Power In</option>
                    <option value="Reactive Power Out">Reactive Power Out</option>
                </select>
            </label>
            <button onClick={handleFilterChange}>Filter</button>
        </div>
    );
};

export default DataFilter;
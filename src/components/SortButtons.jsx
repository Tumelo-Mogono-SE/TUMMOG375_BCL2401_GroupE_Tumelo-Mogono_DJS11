import React from 'react';
import "../Styles/sortAndFilter.css"; 

function SortButtons({ shows, onSort, selectedSort, onSelectSort }) {
    const sortAZ = () => {
        const sortedShows = [...shows].sort((a, b) => a.title.localeCompare(b.title));
        onSort(sortedShows);
        onSelectSort("AZ");
    };

    const sortZA = () => {
        const sortedShows = [...shows].sort((a, b) => b.title.localeCompare(a.title));
        onSort(sortedShows);
        onSelectSort("ZA");
    };

    const sortMostRecentlyUpdated = () => {
        const sortedShows = [...shows].sort((a, b) => new Date(b.updated) - new Date(a.updated));
        onSort(sortedShows);
        onSelectSort("MostRecentlyUpdated");
    };

    const sortLeastRecentlyUpdated = () => {
        const sortedShows = [...shows].sort((a, b) => new Date(a.updated) - new Date(b.updated));
        onSort(sortedShows);
        onSelectSort("LeastRecentlyUpdated");
    };

    return (
        <div className="sort-buttons">
            <button
                onClick={sortAZ}
                className={selectedSort === "AZ" ? "selected" : ""}
            >
                Sort A-Z
            </button>
            <button
                onClick={sortZA}
                className={selectedSort === "ZA" ? "selected" : ""}
            >
                Sort Z-A
            </button>
            <button
                onClick={sortMostRecentlyUpdated}
                className={selectedSort === "MostRecentlyUpdated" ? "selected" : ""}
            >
                Most Recently Updated
            </button>
            <button
                onClick={sortLeastRecentlyUpdated}
                className={selectedSort === "LeastRecentlyUpdated" ? "selected" : ""}
            >
                Least Recently Updated
            </button>
        </div>
    );
}

export default SortButtons;
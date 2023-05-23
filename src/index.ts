import { DragAndDropHandler } from './utils/DragDropHandler.js';
import { displayLoadingScreen, removeLoadingScreen } from './utils/LoadingAnim.js';
import { Stats, calculateStats } from './utils/DataAnalysis.js';

// check if data exists in local storage
let dt = localStorage.getItem("stats");
if (dt !== null) {
    goToStatsPage();
}

// handle when user drags & drops file into drop zone
//? This function is only called when a json file is dropped
let handler = new DragAndDropHandler('drop-zone', (json) => {
    // calc & save stats, then push to stats page
    displayLoadingScreen()
    const stats: Stats = calculateStats(json);
    localStorage.setItem("stats", JSON.stringify(stats));
    goToStatsPage();
});

function goToStatsPage() {
    window.location.href = './stats.html';
}
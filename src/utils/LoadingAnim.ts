// revmoes landing page elements and displays loading
export function displayLoadingScreen() {
    document.getElementById("landing-container")!.style.display = "none";
    document.getElementById("loading-container")!.style.display = "flex";
}

// removes loading animation
export function removeLoadingScreen() {
    document.getElementById("loading-container")!.style.display = "none";
}

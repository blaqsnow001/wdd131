document.getElementById("last-modified").textContent = "Last Modified: " + document.lastModified;

document.getElementById("hamburger").addEventListener('click', () => {
    document.querySelector("nav").classList.add("open");
});

document.getElementById("close-btn").addEventListener('click', () => {
    document.querySelector("nav").classList.remove("open");
});
// FOOTER: Current year & last modified
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// WIND CHILL CALCULATION

// Static values matching displayed weather content (Metric)
const temperature = 10;   // °C
const windSpeed   = 5;    // km/h

/**
 * Calculates wind chill factor (Metric formula).
 * @param {number} temp - Temperature in °C
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Wind chill in °C (rounded to 1 decimal)
 */
function calculateWindChill(temp, speed) {
    return parseFloat((13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1));
}

// Only display wind chill if conditions are met (Metric):
// Temperature <= 10°C AND Wind speed > 4.8 km/h
const windChillEl = document.getElementById('wind-chill');

if (temperature <= 10 && windSpeed > 4.8) {
    windChillEl.textContent = calculateWindChill(temperature, windSpeed) + ' °C';
} else {
    windChillEl.textContent = 'N/A';
}
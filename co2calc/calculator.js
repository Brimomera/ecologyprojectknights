document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const electricity = parseFloat(document.getElementById('electricity').value);
    const gas = parseFloat(document.getElementById('gas').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const flights = parseFloat(document.getElementById('flights').value);

    // Constants for CO2 emissions
    const electricityCO2 = 0.92; // kg CO2 per kWh (average)
    const gasCO2 = 11.7; // kg CO2 per therm (average)
    const carCO2 = 0.411; // kg CO2 per mile (average)
    const flightCO2 = 400; // kg CO2 per round trip flight (average)

    // Calculate total carbon footprint
    let totalCO2 = 0;
    if (!isNaN(electricity)) totalCO2 += electricity * electricityCO2;
    if (!isNaN(gas)) totalCO2 += gas * gasCO2;
    if (!isNaN(mileage)) totalCO2 += mileage * carCO2;
    if (!isNaN(flights)) totalCO2 += flights * flightCO2;

    // Display result
    document.getElementById('carbon-result').textContent = totalCO2.toFixed(2) + ' kg CO₂';
    document.getElementById('result').style.display = 'block';
});

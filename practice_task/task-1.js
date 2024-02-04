/* 
   Write a function to convert temperature from Celsius to Fahrenheit.
 */
function fahrenheitToCelsius(fahrenheitTemp) {
    const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
    return celsiusTemp;
}

const celsiusTemperature = fahrenheitToCelsius(98);
console.log(celsiusTemperature);


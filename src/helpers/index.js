export const convertKelvinToFahrenheit = (temp) => (
  Math.round((temp - 273.15) * 9/5 + 32)
)

export async function readCovidData() {
  return await fetch('http://gammatest.net/course/javascript/react2/owid-covid-data.json').then(res => res.json());
  }
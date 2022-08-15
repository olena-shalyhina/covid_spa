//Экспортируем асинхронную ф-цию которая возвращает нам состав owid-covid-data.json в json формате
//Функция fetch отправляет запрос на хост http: //localhost: 3000/owid-covid-data.json
//await обеспечивает выполнение функции и ожидает ее завершения и возвращает полный ответ, используется только в асинхронных функциях
export async function readCovidData() {
  return await fetch('owid-covid-data.json').then(res => res.json());
  }
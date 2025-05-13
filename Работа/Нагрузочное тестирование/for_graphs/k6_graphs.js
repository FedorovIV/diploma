async function main() {
  let arrayRpsNoCompress = await getRPSfromURL(
    "./data/no_compress_from_k6.json"
  );
  let arrayRpsGzip1 = await getRPSfromURL("./data/gzip1_from_k6.json");
  let arrayRpsGzip5 = await getRPSfromURL("./data/gzip5_from_k6.json");
  let arrayRpsGzip9 = await getRPSfromURL("./data/gzip9_from_k6.json");

  const cfg = {
    type: "line", // Тип графика - линия
    data: {
      labels: arrayRpsNoCompress.map((_, index) => index), // Метки по оси X
      datasets: [
        {
          label: "No compression", // Название второй линии
          data: smoothData(arrayRpsNoCompress).map((value) =>
            Math.round(value)
          ), // Данные для второй линии
          borderColor: "rgb(66, 235, 54)", // Цвет линии
          backgroundColor: "rgba(66, 235, 54, 0.2)", // Цвет заливки (если fill включен)
          fill: false, // Отключаем заливку под линией
        },
        {
          label: "Gzip 1", // Название второй линии
          data: smoothData(arrayRpsGzip1).map((value) => Math.round(value)), // Данные для второй линии
          borderColor: "rgba(54, 162, 235, 1)", // Цвет линии
          backgroundColor: "rgba(54, 163, 235, 0.2)", // Цвет заливки (если fill включен)
          fill: false, // Отключаем заливку под линией
        },
        {
          label: "Gzip 5", // Название второй линии
          data: smoothData(arrayRpsGzip5).map((value) => Math.round(value)), // Данные для второй линии
          borderColor: "rgb(235, 54, 54)", // Цвет линии
          backgroundColor: "rgba(235, 54, 54, 0.2)", // Цвет заливки (если fill включен)
          fill: false, // Отключаем заливку под линией
        },
        {
          label: "Gzip 9", // Название второй линии
          data: smoothData(arrayRpsGzip9).map((value) => Math.round(value)), // Данные для второй линии
          borderColor: "rgb(0, 0, 0)", // Цвет линии
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Цвет заливки (если fill включен)
          fill: false, // Отключаем заливку под линией
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true, // Отобразить заголовок
          text: "Requests per second (RPS) from time", // Текст заголовка
          font: {
            // Настройки шрифта
            size: 18, // Размер шрифта
            weight: "bold", // Толщина шрифта
          },
          color: "#333", // Цвет текста заголовка
          padding: {
            top: 10, // Отступ сверху
            bottom: 20, // Отступ снизу
          },
        },
        legend: {
          display: true, // Включить легенду
          position: "top", // Позиция легенды
        },
      },
      scales: {
        x: {
          title: {
            display: true, // Включение заголовка для оси X
            text: "Time(s)", // Подпись оси X
            color: "#333", // Цвет текста
            font: {
              size: 14, // Размер текста
              weight: "bold", // Толщина текста
            },
          },
        },
        y: {
          title: {
            display: true, // Включение заголовка для оси Y
            text: "RPS", // Подпись оси Y
            color: "#333",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
      },
    },
  };

  const ctx = document.getElementById("myChart");

  new Chart(ctx, cfg);
}

main();

function getJsonArrayFromData(data) {
  let array = new Int8Array(data);
  let newArray = [];

  array.forEach((value) => {
    newArray.push(String.fromCodePoint(value));
  });

  let string = newArray.join("");
  let arrayString = string.split("\n");
  let JsonArray = arrayString.map((value, index) => {
    if (index < arrayString.length - 1) return JSON.parse(value);
  });

  return JsonArray;
}

async function getRPSfromURL(url) {
  let response = await fetch(url);
  let data = await response.arrayBuffer();
  let JsonArray = getJsonArrayFromData(data);

  let checksArray = JsonArray.filter((value) => {
    if (value?.metric === "checks") return true;
  });

  let from = new Date(checksArray[1].data.time).getTime();

  let rps = {};

  checksArray.forEach((value) => {
    let time = value?.data?.time;
    if (time) {
      time = new Date(time).getTime();
      let index = Math.floor((time - from) / 1000);
      if (rps[index] === undefined) {
        rps[index] = 0;
      } else {
        rps[index]++;
      }
    }
  });

  let arrayRps = [];

  for (let [_, value] of Object.entries(rps)) {
    arrayRps.push(value);
  }

  return arrayRps;
}

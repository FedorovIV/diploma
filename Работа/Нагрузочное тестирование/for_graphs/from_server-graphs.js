async function main(startDate) {
  let arrayInfoNoCompress = await getArrayInfoFromURL(
    "./data/no_compress_from_server.csv"
  );
  let arrayInfoGzip1 = await getArrayInfoFromURL(
    "./data/gzip1_from_server.csv"
  );
  let arrayInfoGzip5 = await getArrayInfoFromURL(
    "./data/gzip5_from_server.csv"
  );
  let arrayInfoGzip9 = await getArrayInfoFromURL(
    "./data/gzip9_from_server.csv"
  );

  const cfg = {
    type: "line", // Тип графика - линия
    data: {
      labels: arrayInfoGzip1.map((_, index) => index), // Метки по оси X
      datasets: [
        // {
        //   label: "No compress", // Название второй линии
        //   data: smoothData(arrayInfoNoCompress.map((value) => +value.transmitSpeedMbs)), // Данные для второй линии
        //   borderColor: "rgb(66, 235, 54)", // Цвет линии
        //   backgroundColor: "rgba(66, 235, 54, 0.2)", // Цвет заливки (если fill включен)
        //   fill: false, // Отключаем заливку под линией
        // },
        {
          label: "Gzip1", // Название второй линии
          data: smoothData(arrayInfoGzip1.map((value) => +value.transmitSpeedMbs)), // Данные для второй линии
          borderColor: "rgba(54, 162, 235, 1)", // Цвет линии
          backgroundColor: "rgba(54, 163, 235, 0.2)", // Цвет заливки (если fill включен)
          fill: false, // Отключаем заливку под линией
        },
        {
          label: "Gzip5", // Название второй линии
          data: smoothData(arrayInfoGzip5.map((value) => +value.transmitSpeedMbs)), // Данные для второй линии
          borderColor: "rgb(235, 54, 54)", // Цвет линии
          backgroundColor: "rgba(235, 54, 54, 0.2)", // Цвет заливки (если fill включен)
          fill: false, // Отключаем заливку под линией
        },
        {
          label: "Gzip9", // Название второй линии
          data: smoothData(arrayInfoGzip9.map((value) => +value.transmitSpeedMbs)), // Данные для второй линии
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
          text: "Transmission speed from time", // Текст заголовка
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
            text: "Transmission speed (in Mb/s)", // Подпись оси Y
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

main(new Date("2025-05-04T22:23:46"));

function getArrayOfInfoFromData(data) {
  let array = new Int8Array(data);
  let newArray = [];

  array.forEach((value) => {
    newArray.push(String.fromCodePoint(value));
  });

  let string = newArray.join("");
  let arrayString = string.split("\n").slice(1, -1);
  let result = arrayString.map((value, index) => {
    let arrayInfo = value.split(",");
    return {
      time: new Date(arrayInfo[0]),
      cpuUsage: arrayInfo[1],
      transmitSpeedMbs: (arrayInfo[3] * 8) / 1024,
    };
  });

  return result;
}

async function getArrayInfoFromURL(url) {
  let response = await fetch(url);
  let data = await response.arrayBuffer();
  let arrayInfo = getArrayOfInfoFromData(data);

  return arrayInfo;
}

import http from "k6/http";
import { sleep, check } from "k6";
import { Trend } from "k6/metrics";

// Пользовательские метрики
const waitingTime = new Trend("waiting_time");       // ожидание ответа (TTFB)
const receivingTime = new Trend("receiving_time");   // время получения данных
const totalDuration = new Trend("total_duration");   // общее время

export let options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "20s", target: 10 },
    { duration: "20s", target: 15 },
    { duration: "20s", target: 20 },
    { duration: "20s", target: 25 },
    { duration: "20s", target: 30 },
    { duration: "10s", target: 5 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.01"],
    waiting_time: ["p(95)<1000"],
    receiving_time: ["p(95)<500"],
  },
};

export default function () {
  let res = http.get("http://88.119.171.107:3002/video/getAll", {
    headers: {
      "Accept-Encoding": "gzip",
    },
  });

  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  // Логируем тайминги
  waitingTime.add(res.timings.waiting);
  receivingTime.add(res.timings.receiving);
  totalDuration.add(res.timings.duration);

  sleep(1);
}

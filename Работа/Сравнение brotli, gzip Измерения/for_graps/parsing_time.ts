let data = `
laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.7 ms ±   1.2 ms    [User: 2.8 ms, System: 1.2 ms]
  Range (min … max):    13.3 ms …  15.5 ms    3 runs
 
laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.7 ms ±   1.3 ms    [User: 2.4 ms, System: 1.6 ms]
  Range (min … max):    12.6 ms …  15.2 ms    3 runs
 
laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.7 ms ±   1.2 ms    [User: 4.1 ms, System: 0.0 ms]
  Range (min … max):    13.3 ms …  15.5 ms    3 runs

  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs. It might help to use the '--warmup' or '--prepare' options.

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.2 ms ±   0.9 ms    [User: 2.5 ms, System: 1.5 ms]
  Range (min … max):    13.5 ms …  15.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.8 ms ±   0.6 ms    [User: 3.9 ms, System: 0.0 ms]
  Range (min … max):    13.1 ms …  14.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.3 ms ±   1.4 ms    [User: 4.1 ms, System: 0.0 ms]
  Range (min … max):    11.7 ms …  14.3 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.7 ms ±   1.0 ms    [User: 2.8 ms, System: 1.2 ms]
  Range (min … max):    12.7 ms …  14.7 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.7 ms ±   0.6 ms    [User: 4.1 ms, System: 0.0 ms]
  Range (min … max):    13.1 ms …  14.3 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.5 ms ±   1.4 ms    [User: 3.0 ms, System: 1.2 ms]
  Range (min … max):    12.0 ms …  14.8 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.6 ms ±   1.0 ms    [User: 3.9 ms, System: 0.4 ms]
  Range (min … max):    13.5 ms …  15.5 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.2 ms ±   1.7 ms    [User: 2.6 ms, System: 1.3 ms]
  Range (min … max):    11.9 ms …  15.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.5 ms ±   0.9 ms    [User: 3.7 ms, System: 0.6 ms]
  Range (min … max):    13.6 ms …  15.3 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.1 ms ±   2.0 ms    [User: 3.6 ms, System: 0.3 ms]
  Range (min … max):    11.5 ms …  15.4 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      12.8 ms ±   0.7 ms    [User: 2.6 ms, System: 1.3 ms]
  Range (min … max):    12.3 ms …  13.6 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.5 ms ±   1.0 ms    [User: 3.9 ms, System: 0.3 ms]
  Range (min … max):    13.5 ms …  15.4 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.0 ms ±   0.5 ms    [User: 3.9 ms, System: 0.0 ms]
  Range (min … max):    12.4 ms …  13.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js
  Time (mean ± σ):      14.8 ms ±   0.3 ms    [User: 4.5 ms, System: 0.0 ms]
  Range (min … max):    14.6 ms …  15.1 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.6 ms ±   1.0 ms    [User: 4.0 ms, System: 0.0 ms]
  Range (min … max):    12.7 ms …  14.6 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      12.9 ms ±   0.3 ms    [User: 3.9 ms, System: 0.0 ms]
  Range (min … max):    12.6 ms …  13.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.1 ms ±   0.5 ms    [User: 2.7 ms, System: 1.2 ms]
  Range (min … max):    12.9 ms …  13.6 ms    3 runs

  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs. It might help to use the '--warmup' or '--prepare' options.

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.6 ms ±   1.1 ms    [User: 4.0 ms, System: 0.0 ms]
  Range (min … max):    12.4 ms …  14.5 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.0 ms ±   0.6 ms    [User: 4.1 ms, System: 0.0 ms]
  Range (min … max):    13.3 ms …  14.5 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.3 ms ±   1.3 ms    [User: 3.7 ms, System: 0.2 ms]
  Range (min … max):    11.8 ms …  14.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.4 ms ±   1.0 ms    [User: 4.1 ms, System: 0.0 ms]
  Range (min … max):    13.4 ms …  15.4 ms    3 runs
 
laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.4 ms ±   1.6 ms    [User: 2.6 ms, System: 1.3 ms]
  Range (min … max):    12.2 ms …  15.2 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.1 ms ±   0.7 ms    [User: 1.3 ms, System: 2.6 ms]
  Range (min … max):    12.4 ms …  13.9 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      14.1 ms ±   0.5 ms    [User: 4.1 ms, System: 0.0 ms]
  Range (min … max):    13.6 ms …  14.6 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$ hyperfine --warmup 10 --runs 3 "brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js"
Benchmark 1: brotli -d --stdout ./main.d1ba10f3.js.br > ./main.d1ba10f3.js                                                                                                                    
  Time (mean ± σ):      13.6 ms ±   1.1 ms    [User: 4.2 ms, System: 0.0 ms]
  Range (min … max):    12.3 ms …  14.3 ms    3 runs

laptop@LAPTOP-J6RBOHJS:/mnt/d/programing/diploma/Работа/Результаты замеров/Что сжимаем$
`;

interface TimeMeasure {
  mean: number;
  min: number;
  user: number;
}

interface TimeMeasureExcel {
  mean: string;
  min: string;
  user: string;
}

let excelData: TimeMeasureExcel[] = [];

let minTime = getMinTime(data);
let meanTime = getMeanTime(data);
let userTime = getUserTime(data);

minTime.forEach((value, index) => {
  excelData.push({
    min: getExcelString(minTime[index]),
    mean: getExcelString(meanTime[index]),
    user: getExcelString(userTime[index]),
  });
});

shuffle(excelData);

console.log('mean');
console.log('----------------------------------');
excelData.forEach((value, index) => {
  if (index < 20) {
    console.log(value.mean);
  }
});

console.log('min');
console.log('----------------------------------');
excelData.forEach((value, index) => {
  if (index < 20) {
    console.log(value.min);
  }
});

console.log('user');
console.log('----------------------------------');
excelData.forEach((value, index) => {
  if (index < 20) {
    console.log(value.user);
  }
});

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function getMeanTime(inputData: string) {
  let result: number[] = [];
  const targetString: string = "Time (mean ± σ):";
  let findedTime = inputData.indexOf(targetString);
  while (findedTime !== -1) {
    inputData = inputData.slice(findedTime + targetString.length);
    let msIndex = inputData.indexOf("ms");
    let seconds = inputData.slice(0, msIndex).trim();
    result.push(+seconds);
    findedTime = inputData.indexOf(targetString);
  }

  return result;
}

function getMinTime(inputData: string) {
  let result: number[] = [];
  const targetString: string = "Range (min … max):";
  let findedTime = inputData.indexOf(targetString);
  while (findedTime !== -1) {
    inputData = inputData.slice(findedTime + targetString.length);
    let msIndex = inputData.indexOf("ms");
    let seconds = inputData.slice(0, msIndex).trim();
    result.push(+seconds);
    findedTime = inputData.indexOf(targetString);
  }

  return result;
}

function getUserTime(inputData: string) {
  let result: number[] = [];
  const targetString: string = "User:";
  let findedTime = inputData.indexOf(targetString);
  while (findedTime !== -1) {
    inputData = inputData.slice(findedTime + targetString.length);
    let msIndex = inputData.indexOf("ms");
    let seconds = inputData.slice(0, msIndex).trim();
    result.push(+seconds);
    findedTime = inputData.indexOf(targetString);
  }

  return result;
}


function getExcelString(value:number){
  return value.toString().replace('.', ',');
}
// let result = "";
// let isAdding = false;
// data.split("").forEach((value) => {
//   if (isAdding) {
//     result += value;
//   }

//   if (value === ")") {
//     msData.push(result.slice(0, 3));
//     result = "";
//     isAdding = false;
//   }
//   if (value === "(") {
//     isAdding = true;
//   }
// });

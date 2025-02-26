import { join } from "path";
import { open } from "node:fs/promises";
import { assert } from "node:console";
import OnesyLz77 from "@onesy/lz77";

/**
 * Открыть
 * @param {string} filePath - Путь до файла, который необходимо сжать.
 * @param {string} resultPath - Путь по которому будет сохранён результат.
 * @param {number} W - размер словаря.
 * @param {number} n = размер упреждающего буфера.
 */

interface findMatchReturnValue {
  matchPos: number;
  matchLen: number;
  matchString: string;
  unmatchedSym: string | undefined;
}

function findMatch(A: string, B: string): findMatchReturnValue {
  let concatStr = A + B;

  let maxLength = 0;
  let longestSubstring = "";
  let matchPos = 0;

  // Для каждой позиции в строке A
  for (let i = 0; i < A.length; i++) {
    let j = 0;

    // Сравниваем символы A и B
    while (
      i + j < concatStr.length &&
      j < B.length &&
      concatStr[i + j] === B[j]
    ) {
      j++;
    }

    if (j > maxLength) {
      maxLength = j;
      longestSubstring = A.slice(i, i + j);
      matchPos = i;
    }
  }

  return {
    matchPos: matchPos,
    matchLen: maxLength,
    unmatchedSym: B[maxLength],
    matchString: longestSubstring,
  };
}

function UnitTestForFindMatch() {
  let result = findMatch("abcdacb", "acbaf");
  assert(
    result.matchPos === 4 &&
      result.matchLen === 4 &&
      result.unmatchedSym === "f" &&
      result.matchString === "acba",
    "UnitTestForFindMatch. Test num 1"
  );

  result = findMatch("abcdacb", "acb");
  assert(
    result.matchPos === 4 &&
      result.matchLen === 4 &&
      result.unmatchedSym === undefined &&
      result.matchString === "acb",
    "UnitTestForFindMatch. Test num 2"
  );
}

async function compressFile(
  filePath: string,
  resultPath: string,
  W: number = 1000,
  n: number = 50
) {
  const targetFile = await open(filePath);
  const resultFile = await open(resultPath, "a+");

  let position = 0,
    // Make n + 1 it for unmatchad_sym
    buffer = Buffer.alloc(n + 1),
    dict = new Array(W);

  let readResult = await targetFile.read({
    buffer: buffer,
    length: n,
    position: null,
  });

  while (readResult.bytesRead > 0) {
    console.log(buffer.toString("utf8"));

    readResult = await targetFile.read({
      buffer: buffer,
      length: n,
      position: null,
    });

    // let { matchPos, matchLen, matchString, unmatchedSym,  } = findMatch(
    //   dict.join(),
    //   buffer.toString('utf8')
    // );

    // if (unmatchedSym === undefined) {unmatchedSym = buffer[n]}

    // resultFile.write(matchPos.toString());
    // resultFile.write(matchLen.toString());
    // resultFile.write(unmatchedSym);
  }
}

export { compressFile };

// // UnitTestForFindMatch();
const fileName: string = "index-videohosting.js";
const filePath = join(__dirname, `../data/${fileName}`);

// compressFile(filePath, `./results/${"result-" + fileName}`).then(() => {
//   console.log("Compression is finished");
// });

async function onesyLz77Algorithm() {
  let fd = await open(filePath)
  let result = new OnesyLz77((await fd.readFile()).slice(0, 200000)).encoded;
  console.log(result.compression_ratio);
}

onesyLz77Algorithm();
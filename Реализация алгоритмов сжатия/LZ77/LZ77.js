"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressFile = void 0;
const path_1 = require("path");
const promises_1 = require("node:fs/promises");
const node_console_1 = require("node:console");
const lz77_1 = __importDefault(require("@onesy/lz77"));
function findMatch(A, B) {
    let concatStr = A + B;
    let maxLength = 0;
    let longestSubstring = "";
    let matchPos = 0;
    // Для каждой позиции в строке A
    for (let i = 0; i < A.length; i++) {
        let j = 0;
        // Сравниваем символы A и B
        while (i + j < concatStr.length &&
            j < B.length &&
            concatStr[i + j] === B[j]) {
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
    (0, node_console_1.assert)(result.matchPos === 4 &&
        result.matchLen === 4 &&
        result.unmatchedSym === "f" &&
        result.matchString === "acba", "UnitTestForFindMatch. Test num 1");
    result = findMatch("abcdacb", "acb");
    (0, node_console_1.assert)(result.matchPos === 4 &&
        result.matchLen === 4 &&
        result.unmatchedSym === undefined &&
        result.matchString === "acb", "UnitTestForFindMatch. Test num 2");
}
function compressFile(filePath_1, resultPath_1) {
    return __awaiter(this, arguments, void 0, function* (filePath, resultPath, W = 1000, n = 50) {
        const targetFile = yield (0, promises_1.open)(filePath);
        const resultFile = yield (0, promises_1.open)(resultPath, "a+");
        let position = 0, 
        // Make n + 1 it for unmatchad_sym
        buffer = Buffer.alloc(n + 1), dict = new Array(W);
        let readResult = yield targetFile.read({
            buffer: buffer,
            length: n,
            position: null,
        });
        while (readResult.bytesRead > 0) {
            console.log(buffer.toString("utf8"));
            readResult = yield targetFile.read({
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
    });
}
exports.compressFile = compressFile;
// // UnitTestForFindMatch();
const fileName = "index-videohosting.js";
const filePath = (0, path_1.join)(__dirname, `../data/${fileName}`);
// compressFile(filePath, `./results/${"result-" + fileName}`).then(() => {
//   console.log("Compression is finished");
// });
function onesyLz77Algorithm() {
    return __awaiter(this, void 0, void 0, function* () {
        let fd = yield (0, promises_1.open)(filePath);
        let result = new lz77_1.default((yield fd.readFile()).slice(0, 200000)).encoded;
        console.log(result.compression_ratio);
    });
}
onesyLz77Algorithm();

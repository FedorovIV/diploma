import express from "express";
import dotenv from "dotenv";
import { cpuUsage } from "os-utils";

dotenv.config();
const PORT: number = +(process.env.PORT ?? 3002);
const NGINX_URL = process.env.NGINX_URL ?? 'http://localhost:3002';

const app = express();

let gzipLevel = 0;

app.get("/", (req, res) => {
    res.redirect(NGINX_URL+`/gzip/${gzipLevel}/`);
});

app.listen(PORT, () => console.log(`Switcher запущен на порту: ${PORT}`));

setInterval(()=>{
    cpuUsage((percentage)=>{
        if (percentage > 95 && gzipLevel > 0) {
            gzipLevel--;
        } else if (gzipLevel < 9) {
            gzipLevel++;
        }
    })
}, 1000)
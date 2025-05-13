import express from "express";
import { cpuUsage } from "os-utils";
import { execSync, exec } from "child_process";
import fs from "fs";
import path from "path";

const app = express();
const PORT = parseInt(process.env.PORT || "3004");
const NGINX_CONF_DIR = "/etc/nginx/conf.d";
const TEMPLATE_DIR = "/etc/nginx/configs";

let gzipLevel = 5;
let previosLevel = gzipLevel;

const applyConfig = (level: number) => {
  const src = path.join(TEMPLATE_DIR, `gzip-${level}.conf`);
  const dest = path.join(NGINX_CONF_DIR, `active.conf`);
  fs.copyFileSync(src, dest);
  execSync("nginx -s reload");
  console.log(`Switched to gzip-${level}`);
};

app.listen(PORT, () => {
  console.log(`Switcher listening on port ${PORT}`);
  applyConfig(gzipLevel);
});

setInterval(() => {
  cpuUsage((load) => {
    if (load > 0.95 && gzipLevel > 0) gzipLevel--;
    else if (load < 0.5 && gzipLevel < 9) gzipLevel++;
    applyConfig(gzipLevel);
  });
}, 2000);

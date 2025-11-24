const fs=require("fs");
fs.readdirSync(".").forEach(f=>f.endsWith(".js")&&fs.renameSync(f,f.replace(".js",".ts")));

const fs = require("fs");
const db = "./db.txt";
const readline = require("readline");
module.exports = async function newEmail(email) {
  const readStream = fs.createReadStream(db, "utf8");

  let existsEmail = false;
  const lines = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  for await (const line of lines) {
    if (line === email) {
      return false;
    }
  }

  readStream.close();
  if (existsEmail === false) {
    const writeStream = fs.createWriteStream(db, { flags: "a" });
    const stats = await fs.promises.stat(db);

    if (stats.size === 0) {
      writeStream.write(email);
    } else {
      writeStream.write("\n" + email);
    }

    writeStream.end();
    return true;
  }
};

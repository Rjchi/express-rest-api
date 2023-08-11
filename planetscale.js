// Este modulo es para podernos conectar con mysql
// la base de datos esta en planetscale
const mysql = require("mysql2/promise");

const getCon = async () => {
  const connection = await mysql.createConnection({
    database: "expressbd",
    user: "26zoduihuc4jxqr07ec7",
    host: "aws.connect.psdb.cloud",
    password: "pscale_pw_oTazzy6fWnj0BCJItZYHAtkC2D8xts80SPj5mUCYmYn",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  // Ejemplo de consulta a la base de datos
  const result = await connection.query("SELECT 1 + 1 AS Result");
  console.log(result);
};

module.exports = getCon;

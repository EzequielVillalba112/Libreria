import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});

export class BookModel {
  static getAll(res) {
    const query = "SELECT * FROM libros";

    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }

  static searchBook(name, res) {
    const query = `SELECT * FROM libros WHERE titulo LIKE '%${name}%' LIMIT 10`;

    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }

  static popularBook(res) {
    const rate = [5, 4];
    const query = `SELECT * FROM libros WHERE rate = ${rate[0]} OR rate = ${rate[1]}`;

    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
}

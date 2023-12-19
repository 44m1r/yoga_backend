import sql from "mysql"

const connection = sql.createConnection({
    host: 'mysql-5abcd1d-codingonly41-2cf1.a.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_vVm81iIwC5wWV97y27i',
    database: 'defaultdb',
  });
  
  // Connect to MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
  });

  export default connection;

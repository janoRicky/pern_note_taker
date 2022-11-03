

const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "plus_ultra",
	host: "localhost",
	port: 5432,
	database: "perntodo",
    idleTimeoutMillis: 10000
});


try {
	pool.connect((err, client, release) => {});
} catch(err) {
	console.error(err.message);
}

module.exports = pool;

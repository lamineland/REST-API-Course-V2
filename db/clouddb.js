/**
 * Setup the Database URL
 */

 // mongodb+srv://lamine:<db_password>@cluster0.iot2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const DB_USER = "lamine"
const DB_PASSWORD = "nLrxD@ly#2025_"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0.iot2o.mongodb.net"

// Setup the DB URI
// exports.DB_URI= "mongodb+srv://lamine:<db_password>@cluster0.iot2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// exports.DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`
exports.DB_URI = `mongodb+srv://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`

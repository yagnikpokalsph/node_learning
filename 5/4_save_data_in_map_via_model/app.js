const express = require('express')
const app = express()
app.use(express.json())
const nameRouter = require('./router/namerouter')

app.use(nameRouter)
app.listen(8080)
/* To set the data
curl --location 'localhost:8080' \
--header 'Content-Type: application/json' \
--data '{
    "name":"yp",
    "age":30
}'
 */

/* To get the data
curl --location --request GET 'localhost:8080' \
--header 'Content-Type: application/json' \
--data '{
    "name":"yp"
}'
 */
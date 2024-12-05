const express = require("express")
const getName = require("./router/getName");
const app = express()
app.use('/admin',getName)
// Handle unmatched routes
app.use((req, res) => {
    res.status(404).json({
        message: "Page not found",
    });
});
app.listen(8080)

/* will work since added admin in path
curl --location 'localhost:8080/admin/name' \
--header 'Content-Type: application/json' \
--data '{
    "name":"yp"
}'
 */

/* will not work due to admin in path filter
curl --location 'localhost:8080/admin' \
--header 'Content-Type: application/json' \
--data '{
    "name":"yp"
}'
 */

/* will not work due to admin is not in path filter
curl --location 'localhost:8080' \
--header 'Content-Type: application/json' \
--data '{
    "name":"yp"
}'
 */

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const id = req.query.id;

    if (!id) {
        return res.status(400).send("Error: 'id' parameter is required.");
    }

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Kluster Playground</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://api.kluster-ai.online/api/me/embed/${id}/kluster.js" defer></script>
            
        </head>
        <body>
        <h1 style="text-align: center; font-size: 1.5rem; font-family: 'Arial'">
            <center>
                Your Website goes here...
            </center>
        </h1>
            
        </body>
        </html>
    `;

    res.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});

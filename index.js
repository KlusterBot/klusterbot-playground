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
            <script src="https://api.kluster-ai.online/api/me/embed/${id}/kluster.js"></script>
            
        </head>
        <body>
            
        </body>
        </html>
    `;

    res.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});

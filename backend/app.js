let express = require("express");
let app = express();
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");
let axios = require('axios');
const cors = require('cors');

app.use(express.static(path.join(__dirname,'./public')));
app.use(cors());
app.get("/generate-statement-report", async (req, res) => {
    try {
        const {statement, token, apiUrl} = req.query;
        const response = await axios.get(`${apiUrl}/reports/statement/${statement}`, {
            headers: {
                AccessToken: token
        }
        });

        const result=response.data;
        const data = await ejs.renderFile(path.join(__dirname, './views/', "statement-report-template.ejs"), {
            result
        });
        let options = {
            "height": "12.25in",
            "width": "8in",
            "header": {
                "height": "10mm",
            },
            "footer": {
                "height": "10mm",
            },
            base: `${req.protocol}://${req.get('host')}`
        };
        pdf.create(data, options).toFile(result.Filename, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.sendFile(path.join(__dirname, './'+result.Filename));
            }
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: `Error occurred : ${error}`
        });
    }
})

app.listen(3000);

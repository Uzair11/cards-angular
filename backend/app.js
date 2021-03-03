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
        // const response = await axios.get(`${apiUrl}/reports/statement/${statement}`, {
        //     headers: {
        //         AccessToken: token
        // }
        // });

        const result={
            Filename: 'CB_Stmt_TGoodwin_16Jun21.pdf',
            Name: 'Tracey Goodwin',
            DateRange: '16 Jun 2021 – 13 Jul 2021',
            StatementDetail: [
            {
            Date: '16-Jun-2021',
            Description: 'Credit Card Payment R’cvd',
            Points: '-',
            PointsBal: '-',
            TransAmount: '$79.00',
            CashBal: '$79.00'
            },
            {
            Date: '16-Jun-2021',
            Description: 'Weekly Membership',
            Points: '-',
            PointsBal: '-',
            TransAmount: '-$19.75',
            CashBal: '$59.25'
            },
            {
            Date: '22-Jun-2021',
            Description: 'Loyalty Reward Cash Bonus',
            Points: '-',
            PointsBal: '-',
            TransAmount: '$11.85',
            CashBal: '$71.10'
            }
            ],
            CircleCount1: '5',
            CircleCount2_12: '128',
            CoFDetail: [
            { Name: 'Tracey Parkins', Joined: '16 Jun 21', Circle: '01' },
            { Name: 'Rissi Taylor', Joined: '18 Jun 21', Circle: '03' }
            ]
            };
        const data = await ejs.renderFile(path.join(__dirname, './views/', "statement-report-template.ejs"), {
            result
        });
        let options = {
            "height": "12.25in",
            "width": "8in",
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

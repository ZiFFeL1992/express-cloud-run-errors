const express = require('express');
const app = express();

// const { ErrorReporting } = require('@google-cloud/error-reporting');
// const errors = new ErrorReporting({ reportMode: 'always' });

app.get('/console-error', (req, res) => {
    // errors.report('Sample error');
    res.send().status(200);
});

app.get('/unhandled-promise-rejection', (req, res) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('unhandled-promise-rejection');
        }, 500);
    });
    res.send().status(200);
});

app.get('/simple-error', (req, res) => {
    a = +a;
});

app.get('/exception', () => {
    JSON.parse('{"malformedJson": true');
});

// app.use(errors.express);

app.listen(8080, () => {
    console.log('App listening on 8080s');
});

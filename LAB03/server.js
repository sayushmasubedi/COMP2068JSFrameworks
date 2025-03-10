const connect = require('connect');
const url = require('url');

function calculate(req, res) {
    const query = url.parse(req.url, true).query;

    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    if (isNaN(x) || isNaN(y)) {
        res.end('Error: x and y must be numbers.');
        return;
    }

    let result;
    switch (method) {
        case 'add':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case 'subtract':
            result = `${x} - ${y} = ${x - y}`;
            break;
        case 'multiply':
            result = `${x} * ${y} = ${x * y}`;
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error: Cannot divide by zero.');
                return;
            }
            result = `${x} / ${y} = ${x / y}`;
            break;
        default:
            res.end('Invalid method. Please use add, subtract, multiply, or divide.');
            return;
    }

    res.end(result);
}

const app = connect();
app.use('/lab3', calculate);

const PORT = 3000;
require('http').createServer(app).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/lab3`);
});

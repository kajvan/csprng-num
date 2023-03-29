const { randomBytes } = require('crypto');
const { promisify } = require('util');

let bytes = 4;

function Random(low = 0, high = 0) {
    if (low == 0 && high == 0) {
        let buf = randomBytes(bytes);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return num;
    }
    else {
        let buf = randomBytes(bytes);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return Math.floor(num * (high - low + 1) + low);
    }
}

async function RandomAsync(low = 0, high = 0) {
    if (low == 0 && high == 0) {
        let buf = await promisify(randomBytes)(bytes);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return num;
    }
    else {
        let buf = await promisify(randomBytes)(bytes);
        let num = buf.readUInt32BE(0) / (Math.pow(2, 32) - 1);
        return Math.floor(num * (high - low + 1) + low);
    }
}

function setBytes(num) {
    if (num < 1) {
        throw new Error('Number of bytes must be greater than 0');
    }
    else {
        bytes = num;
    }
}

//test random.async
Random.async().then((num) => {
    console.log(num);
});

module.exports = {
    Random,
    RandomAsync,
    setBytes
};
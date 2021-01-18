var keythereum = require("keythereum");

const _datadir = "./";
const _address = "cc2908878e268d17a693fed2b988f6afdab5e773";
const _password ="";
var buf = Buffer.from(_password, 'utf8');
var keyObject = keythereum.importFromFile(_address, _datadir);
var privateKey = keythereum.recover(buf, keyObject);
console.log(privateKey.toString('hex'));
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth place evil hover fork tail trend'; 
let testAccounts = [
"0x2b25bce431c0c8fbd3bd2b898735e06f30b6bbc03c3fec110621ede9221e8ef7",
"0xed448ed063159921163093379fe92fb851209adcaf44755533e199906ae6fbe7",
"0x2c41847629aa2660d634a3b40ee4eaea9de96fdd51d49de8d82114d299d3e003",
"0xc3d459436376a3bb8be982d0f92344dbcad167b1cf59ca875d838e1a9c67ef26",
"0xd996cdf2dd0f40304d05850078c70e4a794032c68eba61f06a024ca3bed6b468",
"0x2e6a821229801113b040c84e9097798253480027a6ed29a55897441dba37b06a",
"0x6dafe2bdb514edc622e19ece19b85d93aa184dbddea7e2c747bfedcbf0f5cd01",
"0xce7116455d7992cf88f09a72f7cb99b5d057a2ea94a55773722ed3c63f511769",
"0x9e91961e69990dff9b0ff24ffc12f4481b360536b37e8b4b58e8a8e1e962e9c8",
"0x592d7c586c6132b90763ffffbc4c9ddb3b75cbd1e6f6d1dd41e025db808ee2a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


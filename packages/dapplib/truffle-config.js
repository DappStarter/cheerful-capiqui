require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain history idea entire front squirrel'; 
let testAccounts = [
"0x7b85d48363ee2918d9e2253dbd7c270bb97c8c52300d4e475db553901a422d51",
"0xef6edc55c6039ccb977fe517ee077ce599e9c02c4682f15c1ad0576a13905153",
"0x58ca3b8f66872307fe99f6e689d3ef16b7f7862a01dd1dcf1190f9197a7c3420",
"0x364f32bdbde579b85cc0aa93fc45221a3b14ae83ce7db57919ff4bd2a90aed84",
"0x74e2804ceb02ebe8390f2518e9f986dd6839a9c00f7d9b00f611ae58c806450a",
"0x224c0e3a966a754d6a92c5a3c85a0ef20a3a72057dd247e12865754dcce72652",
"0x9c629d5ff8e4ec303ae467d415aaa3f436c052ccc47586d203306d1a7f7578cf",
"0x85d01c454d0614da7d361b06cd3252b41756299221d4103480eb0393f0886192",
"0x7f62f6c703f3f09f13fbe6999760002c2a6c919cf0b39b1706c43899be2f505e",
"0xae219ea0f630e04c1583c41025567292d035c5a971e8e04e776064894850bdd7"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

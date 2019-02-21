const { generateMnemonic,getSeedFromMnemonic } = require('elastos-wallet-js/src/Mnemonic')
const { getMultiSignAddress, getAddressFromPrivateKey, getAddress, getDid, getMultiSign } = require('elastos-wallet-js/src/Address')
const Transaction = require('elastos-wallet-js/src/Transaction')
const {
    getMasterPublicKey,
    getSinglePrivateKey,
    getSinglePublicKey,
    generateSubPrivateKey,
    generateSubPublicKey,
    getIdChainMasterPublicKey,
    generateIdChainSubPrivateKey,
    generateIdChainSubPublicKey,
    getPublicKeyFromPrivateKey,
    sign,
    verify,
} = require('elastos-wallet-js/src/Api')

const COIN_TYPE_ELA = 0
const COIN_TYPE_IDCHAIN = 1

//1.generateMnemonic
console.log("--------------------1.generateMnemonic--------------------:")
var wordlist = generateMnemonic()
console.log(wordlist)
// console.log("\n")

//2.getSeedFromMnemonic
console.log("--------------------2.getSeedFromMnemonic--------------------")
var seed = getSeedFromMnemonic(wordlist).toString('hex')
console.log(seed)
console.log("\n")

//3.getMasterPublicKey
console.log("--------------------3.getMasterPublicKey--------------------")
var masterPublicKey = getMasterPublicKey(seed)
console.log(masterPublicKey)
console.log("\n")

//4.generateSubPrivateKey
console.log("--------------------4.generateSubPrivateKey--------------------")
var subPrivateKey = generateSubPrivateKey(seed, coinType = COIN_TYPE_ELA, 0, 0).toString('hex')
console.log(subPrivateKey)
console.log("\n")

//5.generateSubPublicKey
console.log("--------------------5.generateSubPublicKey--------------------")
var subPublicKey = generateSubPublicKey(masterPublicKey, coinType = COIN_TYPE_ELA, 0).toString('hex')
console.log(subPublicKey)
console.log("\n")

//6.getDid
console.log("--------------------6.getDid--------------------")
var did = getDid(subPublicKey).toString()
console.log(did)
console.log("\n")

//7.sign
console.log("--------------------7.sign--------------------")
var message = "myTest jsSDK"
var strSign = sign(message, subPrivateKey)
console.log(strSign)
console.log("\n")

//8.verify
console.log("--------------------8.verify--------------------")
var bVerify = verify(message, strSign, subPublicKey)
console.log(bVerify)

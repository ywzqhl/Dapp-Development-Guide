## web3Admin

Extend web3 with aditional capabilities

### Install
```
npm install web3admin
```
### Usage
```
const Web3 = require('web3')
const web3Admin = require('web3admin')

var web3 = new Web3()
setTimeout(function(){
    web3Admin.extend(web3)
 }, 1000)
```

### Demo
```
node index.js
```

|module|type|name
|---|---|---|
admin|method|`addPeer()`
admin|method|`exportChain()`
admin|method|`importChain()`
admin|method|`verbosity()`
admin|method|`setSolc()`
admin|method|`startRPC()`
admin|method|`stopRPC()`
admin|property|`nodeInfo`
admin|property|`peers`
admin|property|`datadir`
admin|property|`chainSyncStatus`
debug|method|`printBlock()`
debug|method|`getBlockRlp()`
debug|method|`setHead()`
debug|method|`processBlock()`
debug|method|`seedHash()`
debug|method|`dumpBlock()`
miner|method|`start()`
miner|method|`stop()`
miner|method|`setExtra()`
miner|method|`setGasPrice()`
miner|method|`startAutoDAGv()`
miner|method|`stopAutoDAG()`
miner|method|`makeDAG()`
miner|property|`hashrate`
network|method|`addPeer()`
network|method|`getPeerCount()`
network|property|`listening`
network|property|`peerCount`
network|property|`peers`
network|property|`version`
txpool|property|`status`

Extracted from [Mist Wallet](https://github.com/ethereum/mist)
Modularized by [Shannon Code](http://twitter.com/shannonNullCode)
c/o [Loyyal](http://loyyal.com)
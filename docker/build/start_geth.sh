#!/bin/bash

echo "Starting geth..."

PORT=30309
GETH=/usr/bin/geth

#not sure if needed, but better make sure it's here
mkdir -p ${DATADIR}
mkdir -p ${DATADIR}\keystore

# Init geth with genesis block(new in 1.4.10, I think...)
$GETH init /opt/genesis.json

#Add any other ethereum options in the ETH_OPT docker variable
$GETH --datadir ${DATADIR} \
  --port $PORT  \
  --verbosity 4  \
  --networkid 536354 \
  --nodiscover --autodag \
  --rpcapi admin,db,debug,eth,miner,net,personal,shh,txpool,web3  \
  --rpc --rpcport $RPCPORT --rpcaddr 0.0.0.0  --rpccorsdomain '*' \
  --etherbase 0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826 --mine --autodag --minerthreads 2 ${ETH_OPT}


echo 'Geth done?'

import React from "react";
import { Balance, Address, TransactionListItem, Owners } from "../components";
import { List, Row, Col } from "antd";

export default function Home({
  contractAddress,
  localProvider,
  price,
  mainnetProvider,
  blockExplorer,
  executeTransactionEvents,
  contractName,
  readContracts,
  ownerEvents,
  signaturesRequired,
}) {
  return (
    <>
      <div style={{ padding: 32, maxWidth: 850, margin: "auto" }}>
        <div style={{ paddingBottom: 32 }}>
        <Row>
          <Col span={12}>

          <div>
            <Balance
              address={contractAddress ? contractAddress : ""}
              provider={localProvider}
              dollarMultiplier={price}
              size={64}
            />
          </div>
          </Col>

          <Col span={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Address
              address={contractAddress ? contractAddress : ""}
              ensProvider={mainnetProvider}
              blockExplorer={blockExplorer}
              fontSize={32}
            />
          </div>
          </Col>
          </Row>
         
         
        </div>

        <Row>
          <Col span={10}>
          <div style={{padding:32}}>
        <Owners ownerEvents={ownerEvents} signaturesRequired={signaturesRequired} mainnetProvider={mainnetProvider} blockExplorer={blockExplorer} />
        </div>
          </Col>

          <Col span={12}>
          <List
              bordered
              dataSource={executeTransactionEvents}
              renderItem={item => {
                return (
                  <TransactionListItem
                    item={Object.create(item)}
                    mainnetProvider={mainnetProvider}
                    blockExplorer={blockExplorer}
                    price={price}
                    readContracts={readContracts}
                    contractName={contractName}
                  />
                );
              }}
            />
          </Col>

        </Row>
        
      </div>


    </>
  );
}

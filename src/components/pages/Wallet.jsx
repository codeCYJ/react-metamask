import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

function Wallet() {
  const { account, library, active, activate, deactivate } = useWeb3React();
  const [balance, setBalance] = useState("");
  const injected = new InjectedConnector();

  useEffect(() => {
    if (account) {
      library?.getBalance(account).then((result) => setBalance(result._hex));
    }
  }, [account, library]);
  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        // 크롬 익스텐션 없을 경우 오류 핸들링
        if ("/No Ethereum provider was found on window.ethereum/")
          throw new Error("Metamask 익스텐션을 설치해주세요");
        console.log("Asdasd");
      });
    } catch (err) {
      alert(err);
      window.open("https://metamask.io/download.html");
    }
  };
  console.log(account, library, active, activate, deactivate, balance);
  return (
    <div>
      <h1>
        {balance && Number(balance).toFixed(4)}
        ETH
      </h1>
      {active ? (
        <>
          <div>
            <h2>My Wallets</h2>
            <span>
              {account?.substr(0, 8)}...{account?.substr(0, 8)}
            </span>
          </div>
        </>
      ) : (
        <button onClick={connectWallet}>asd</button>
      )}
    </div>
  );
}

export default Wallet;

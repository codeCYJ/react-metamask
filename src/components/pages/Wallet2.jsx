import Web3 from "web3";
import { useState } from "react";
import styled from "styled-components";
import ConnectWalletButton from "../templates/ConnectWalletButton";

const Wallet2 = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const onPressConnect = async () => {
    setLoading(true);

    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const onPressLogout = () => setAddress("");

  return (
    <Container>
      <ConnectWalletButton
        onPressConnect={onPressConnect}
        onPressLogout={onPressLogout}
        loading={loading}
        address={address}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export default Wallet2;

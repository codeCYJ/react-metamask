import styled from "styled-components";

const ConnectWalletButton = ({
  onPressLogout,
  onPressConnect,
  loading,
  address,
}) => {
  return (
    <Container>
      {address && !loading ? (
        <ConnectBtn onClick={onPressLogout}>Disconnect</ConnectBtn>
      ) : loading ? (
        <ConnectBtn disabled>
          <div>Loading...</div>
        </ConnectBtn>
      ) : (
        <ConnectBtn onClick={onPressConnect}>Connect Wallet</ConnectBtn>
      )}
    </Container>
  );
};

const Container = styled.div``;
const ConnectBtn = styled.button`
  background-color: #1578f1;
  color: white;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 0.8rem 1rem;
  cursor: pointer;
`;
export default ConnectWalletButton;

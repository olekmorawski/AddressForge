const WalletAddressInput = ({
  walletAddress,
  setWalletAddress,
}: {
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <input
    type="text"
    value={walletAddress}
    onChange={(e) => {
      const inputValue = e.target.value;
      if (inputValue.length <= 42) {
        setWalletAddress(inputValue);
      }
    }}
    placeholder="Enter contract deployer address"
  />
);

export default WalletAddressInput;

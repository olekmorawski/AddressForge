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
    onChange={(e) => setWalletAddress(e.target.value)}
    placeholder="Enter contract deployer address"
  />
);

export default WalletAddressInput;

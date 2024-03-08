const WalletAddressInput = ({
  walletAddress,
  setWalletAddress,
}: {
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div>
    <label htmlFor="deployerAddress" className="input-label">
      Deployer address
    </label>
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
  </div>
);

export default WalletAddressInput;

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import AddressCreationPurposeRadio from "../components/AddressCreationPurposeRadio";
import EditableAddressForm from "../components/EditableAddressForm";
import GasReductionForm from "../components/GasReductionForm";
import WalletAddressInput from "../components/WalletAddressInput";
import AddressInfo from "../components/AddressInfo";
import CreateSaltInfo from "../components/CreateSaltInfo";
import Infobox from "../components/Infobox";

function Dapp() {
  const account = useAccount();
  const [addressCreationPurpose, setAddressCreationPurpose] =
    useState("editableAddress");
  const [walletAddress, setWalletAddress] = useState("");
  const [gasReductionLevel, setGasReductionLevel] = useState(1);

  useEffect(() => {
    if (account.status === "connected" && account.address) {
      setWalletAddress(account.address);
    } else {
      setWalletAddress("");
    }
  }, [account.status, account.address]);

  const handleGasReductionChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setGasReductionLevel((prev) => (prev < 20 ? prev + 1 : prev));
    } else {
      setGasReductionLevel((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div className="bg_dapp">
      <Nav />
      <div className="main">
        <div className="form-container">
          <div className="form-box">
            <h2>Choose address creation purpose</h2>
            <AddressCreationPurposeRadio
              addressCreationPurpose={addressCreationPurpose}
              setAddressCreationPurpose={setAddressCreationPurpose}
            />
            {addressCreationPurpose !== "gasReduction" && (
              <EditableAddressForm />
            )}
            {addressCreationPurpose === "gasReduction" && (
              <GasReductionForm
                gasReductionLevel={gasReductionLevel}
                handleGasReductionChange={handleGasReductionChange}
              />
            )}
            <WalletAddressInput
              walletAddress={walletAddress}
              setWalletAddress={setWalletAddress}
            />
            <AddressInfo />
            <button>Forge your address</button>
            <CreateSaltInfo />
          </div>
          <Infobox />
        </div>
      </div>
    </div>
  );
}

export default Dapp;

const AddressCreationPurposeRadio = ({
  addressCreationPurpose,
  setAddressCreationPurpose,
}: {
  addressCreationPurpose: string;
  setAddressCreationPurpose: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <>
    <div className="radio-group">
      <input
        type="radio"
        id="editableAddress"
        name="addressType"
        value="editableAddress"
        onChange={(e) => setAddressCreationPurpose(e.target.value)}
        checked={addressCreationPurpose === "editableAddress"}
      />
      <label htmlFor="editableAddress">Editable address</label>
    </div>
    <div className="radio-group">
      <input
        type="radio"
        id="gasReduction"
        name="addressType"
        value="gasReduction"
        onChange={(e) => setAddressCreationPurpose(e.target.value)}
        checked={addressCreationPurpose === "gasReduction"}
      />
      <label htmlFor="gasReduction">Gas reduction</label>
    </div>
  </>
);

export default AddressCreationPurposeRadio;

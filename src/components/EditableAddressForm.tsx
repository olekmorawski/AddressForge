const EditableAddressForm = () => (
  <>
      <label htmlFor="forgedAddress" className="input-label">
      Forged address
    </label>
    <input type="text" maxLength={42} placeholder="0x... Enter your desired address" />
    <div className="radio-group">
      <input type="radio" id="prefix" name="editablePart" defaultChecked />
      <label htmlFor="prefix">Prefix</label>
    </div>
    <div className="radio-group">
      <input type="radio" id="suffix" name="editablePart" />
      <label htmlFor="suffix">Suffix</label>
    </div>
  </>
);

export default EditableAddressForm;

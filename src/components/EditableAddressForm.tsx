const EditableAddressForm = () => (
  <>
    <input type="text" placeholder="0x... Enter your desired address" />
    <div className="radio-group">
      <input type="radio" id="prefix" name="editablePart" defaultChecked />
      <label htmlFor="prefix">prefix</label>
    </div>
    <div className="radio-group">
      <input type="radio" id="suffix" name="editablePart" />
      <label htmlFor="suffix">suffix</label>
    </div>
  </>
);

export default EditableAddressForm;

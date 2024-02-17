function Main() {
  return (
    <div className="app">
      <div className="form-container">
        <div className="form-box">
          <h2>Choose address creation purpose</h2>
          <div className="radio-group">
            <input type="radio" id="editableAddress" name="addressType" defaultChecked />
            <label htmlFor="editableAddress">Editable address</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="gasReduction" name="addressType" />
            <label htmlFor="gasReduction">Gas reduction</label>
          </div>
          <input type="text" placeholder="0x... Enter your desired address" />
          <div className="radio-group">
            <input type="radio" id="prefix" name="editablePart" defaultChecked />
            <label htmlFor="prefix">prefix</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="suffix" name="editablePart" />
            <label htmlFor="suffix">suffix</label>
          </div>
          <input type="text" placeholder="Enter contract deployer address" />
          <input type="text" value="0x0202e02" disabled />
          <input type="text" placeholder="000..." disabled />
          <button>Forge your address</button>
          <input type="text" value="0x0202e02" disabled />
        </div>
        <div className="info-box">
          <p>Please note that the string address always starts with 0x. The rest of address contains 40 characters (20 bytes). You can edit maximum 20 characters in address.</p>
          <p>String have to be written in hex: 0-9, A-F, a-f. Letters can be written in uppercase or lowercase.</p>
          <p>Gas reduction is the amount of the zeros in the prefix.</p>
          <p>The more changes in the address, the more computational power will be required, therefore increasing gas price.</p>
          <p>The gas will be charged from your connected wallet.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;

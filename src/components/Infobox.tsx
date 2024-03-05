function Infobox() {
    return (
  <div className="info-box">
  <p>Please note that the string address always starts with 0x. The rest of address contains 40 characters (20 bytes). You can edit maximum 20 characters in address.</p>
  <p>String have to be written in hex: 0-9, A-F, a-f. Letters can be written in uppercase or lowercase.</p>
  <p>Gas reduction is the amount of the zeros in the prefix.</p>
  <p>The more changes in the address, the more computational power will be required, therefore increasing gas price.</p>
  <p>The gas will be charged from your connected wallet.</p>
  </div>
    );
  }
  
  export default Infobox;
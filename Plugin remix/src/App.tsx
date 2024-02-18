import './styles/App.css';
import React, { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { forgeAddress } from './api/forgeService';
import { createClient } from '@remixproject/plugin-webview'

function App() {
  // @ts-ignore
  const client = createClient();
  const [errorMessage, setErrorMessage] = useState('');
  const [chainId, setChainId] = useState('');
  const [acc, setAcc] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [addressCreationPurpose, setAddressCreationPurpose] = useState('Editable address');
  const [editablePart, setEditablePart] = useState('prefix');
  const [gasReductionLevel, setGasReductionLevel] = useState(1);
  const [finishAddress, setFinishAddress] = useState('');

  const [yourAddress, setYourAddress] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const ethereumAddressRegex = /^0x[a-fA-F0-9]+$/;

  useEffect(() => {

    const generateRandomChar = () => {
      const chars = 'abcdefABCDEF0123456789';
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars[randomIndex];
    };

    let calculatedDifficulty = "0";
    let address = '0x';
    const targetLength = 40;

    if (addressCreationPurpose === 'Editable address') {
      if(editablePart === 'sufix') {
        // Dopełnienie adresu losowymi znakami przed inputValue
        while(address.length + inputValue.length < targetLength + 2) { // +2 dla "0x"
          address += generateRandomChar();
        }
        address += inputValue;
      } else {
        // Dopełnienie adresu losowymi znakami po inputValue
        address += inputValue;
        while(address.length < targetLength + 2) { // +2 dla "0x"
          address += generateRandomChar();
        }
      }
      setYourAddress(address);
      const addressLength = inputValue.length;
      calculatedDifficulty = addressLength > 0 ? Math.pow(16, addressLength).toLocaleString('fullwide', {useGrouping:false}) : "0";
    } else if (addressCreationPurpose === 'Gas reduction') {
      const zeros = '0'.repeat(gasReductionLevel);
      setYourAddress(`0x${zeros}`);
      calculatedDifficulty = Math.pow(16, gasReductionLevel).toLocaleString('fullwide', {useGrouping:false});
    }
  
    setDifficulty(calculatedDifficulty);
  }, [addressCreationPurpose, inputValue, gasReductionLevel]); // Obserwuj zmiany w tych stanach


  //Buttons
  const increment = () => {
    setGasReductionLevel((prev) => (prev < 20 ? prev + 1 : prev));
  };
  
  const decrement = () => {
    setGasReductionLevel((prev) => (prev > 0 ? prev - 1 : prev));
    
  };
  

  //Inputs
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const fullAddress = `0x${value}`;
    const isValid = ethereumAddressRegex.test(fullAddress);
    setIsValidAddress(isValid);
    if(value ===''){
      setIsValidAddress(true);
    }
    setInputValue(value);
  };
  
  //function

  async function getNetwork() {
    try {
      const network = await client.call('network', 'detectNetwork');
      setChainId(network.id);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Błąd:', error.message);
        setErrorMessage(error.message);
      } else {
        console.error('Wystąpił błąd', error);
        setErrorMessage('Wystąpił nieoczekiwany błąd');
      }
    }
  }

  async function getAccount() {
    try {
      const accounts = await client.udapp.getAccounts()
      setAcc(accounts[0])
    } catch (error) {
      if (error instanceof Error) {
        console.error('Błąd:', error.message);
        setErrorMessage(error.message);
      } else {
        console.error('Wystąpił błąd', error);
        setErrorMessage('Wystąpił nieoczekiwany błąd');
      }
    
    }
  }

  async function useForgeService () {
    getAccount();
    console.log('deployer address ' + acc);
    if(acc === ''){
      setErrorMessage('Error deployer address needed');
      return
    }else {
      setErrorMessage('')
    }

    getNetwork();
    console.log('chainID '+ chainId)
    handleForgeAddress();
  }

  const handleForgeAddress = async () => {
    const params = {
      addressInput: yourAddress,
      deployerAddres: acc,
      chainIAddres: chainId,
    };
    const response = await forgeAddress(params);
    console.log(response);
    setFinishAddress(response);
    // Tutaj możesz zaktualizować stan komponentu odpowiedzią z funkcji
  };

  //RETURN
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
        <div className="radio-group">
        <div>
          <label htmlFor="purpose" className="input-label" title="test">
          Choose address creation purpose
            <Tippy content="Please note that the string adress always starts with 0x. The rest of adress contains 40 characters (20 bytes). You can edit maximum 20 characters in adress. Gas reduction is the amount of the zeros in the prefix. String have to be written in hex: 0-9, A-F, a-f. Letters can be written in uppercase or lowercase. The more changes in the adress, the more computational power will be required, therefore increasing gas price.">
              <span className="tooltipInf">(?)</span>
            </Tippy>
            </label>
        </div>
        <label>
          <input
            type="radio"
            value="Editable address"
            name="addressCreationPurpose"
            checked={addressCreationPurpose === 'Editable address'}
            onChange={(e) => setAddressCreationPurpose(e.target.value)}
          />
        <div className="radio-value">Editable address</div>
        </label>
        <label>
          <input
            type="radio"
            value="Gas reduction"
            name="addressCreationPurpose"
            checked={addressCreationPurpose === 'Gas reduction'}
            onChange={(e) => setAddressCreationPurpose(e.target.value)}
          />
          <div className="radio-value">Gas reduction</div>
        </label>
      </div>
        {addressCreationPurpose === 'Editable address' ? <>
        <label htmlFor="forgedAddress" className="input-label">Forged Address</label>
        <div className="input-group">
        <span className="input-prefix">{editablePart === 'prefix' ? `0x` : '0x...'} </span>
        <input 
          type="text"
          placeholder="Enter your desired address"
          value={inputValue}
          onChange={handleInputChange}
          className="forged-input"
          maxLength={20} 
        />
        <span className="input-prefix">{editablePart === 'prefix' ? '...' : ''} </span>
      </div>
      {!isValidAddress && <div className="error-validate">Use only the appropriate characters.</div>}
      
      <div className="radio-group">
      <label htmlFor="editablePart" className="input-label">Choose the editable part of address:</label>
      <label>
        <input
          type="radio"
          value="prefix"
          name="editablePart"
          checked={editablePart === 'prefix'}
          onChange={(e) => setEditablePart(e.target.value)}
        />
        <span className="radio-value">Prefix</span>
      </label>
      <label>
        <input
          type="radio"
          value="suffix"
          name="editablePart"
          checked={editablePart === 'suffix'}
          onChange={(e) => setEditablePart(e.target.value)}
        />
        <span className="radio-value">Suffix</span>
      </label>
    </div>
      </> 
      :
      <>
      <label htmlFor="gasReduction" className="input-label">Choose level of gas reduction</label>
      <div className="gas-reduction">
        <button className="gas-reduction-btn" onClick={decrement}>-</button>
        <input
          type="text"
          value={gasReductionLevel}
          readOnly
          className="gas-reduction-input"
        />
        <button className="gas-reduction-btn" onClick={increment}>+</button>
      </div>
      </>
      }

    <div className="value-group">
      <label htmlFor="account" className="input-label-box">Deployer wallet:</label>
      <div className="label-value">
        {acc || <span onClick={getAccount} style={{cursor: 'pointer', color: 'black'}}>
          click refresh ↻</span>}
      </div> 

      <label htmlFor="addressGen" className="input-label-box">Your address:</label>
      <div className="label-value">{yourAddress}</div> 

      <label htmlFor="estimateGasSum" className="input-label-box">Difficulty:</label>
      <div className="label-value">{difficulty}</div> 
    </div>
      <button  className="button2" onClick={useForgeService}> 🛠️  Forge your adress  🛠️</button>
          {finishAddress=== '' ? '' : 
          <div className="value-group">
            <label htmlFor="account" className="input-label-box">CREATE3 recieved salt:</label>
            <div className="label-value">{finishAddress}</div> 
          </div>
        }
              {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </header>
    </div>
  );
}




export default App;

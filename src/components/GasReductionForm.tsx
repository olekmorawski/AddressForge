const GasReductionForm = ({
  gasReductionLevel,
  handleGasReductionChange,
}: {
  gasReductionLevel: number;
  handleGasReductionChange: (action: "increment" | "decrement") => void;
}) => (
  <>
    <label htmlFor="gasReduction" className="input-label-gas">
      Choose level of gas reduction
    </label>
    <div className="gas-reduction">
      <div className="gas_reduction_wrapper">
        <button
          className="gas-reduction-btn"
          onClick={() => handleGasReductionChange("decrement")}
        >
          -
        </button>
        <input
          type="text"
          value={gasReductionLevel}
          readOnly
          className="gas-reduction-input"
        />
        <button
          className="gas-reduction-btn"
          onClick={() => handleGasReductionChange("increment")}
        >
          +
        </button>
      </div>
    </div>
  </>
);

export default GasReductionForm;

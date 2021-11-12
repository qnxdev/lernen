import { countries } from "../lib/lists";

const CountrySelect = ({ value, onChange }) => {
  return (
    <>
    <h4 className="select-label">Country</h4>
    <select
      className="custom-scroll country-select"
      id="countries"
      value={value}
      onChange={onChange}
    >
      <option key="s" className="option1" value={undefined}>
        Select Country
      </option>
      <option key="k" value="+91">
        +91 - India
      </option>
      {JSON.parse(countries).map((i, k) => (
        <option key={k} value={i.c} defaultValue={i.n}>
          {i.c + " - " + i.n}
        </option>
      ))}
    </select>
    </>
  );
};
export default CountrySelect;
export default function Input({ label, placeholder, value, type }) {
  return (
    <label className="col flex">
      {label}
      <input className="light-border w100" type={type} placeholder={placeholder} value={value ? value : null} />
    </label>
  );
}

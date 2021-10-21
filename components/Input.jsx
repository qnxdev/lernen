export default function Input({ label, placeholder, value, type, onInput }) {
  return (
    <label className="col flex">
      {label}
      <input
        className="light-border w100"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInput}
      />
    </label>
  );
}

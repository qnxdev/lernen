export default function Input({
  label,
  placeholder,
  spellCheck = true,
  readOnly = false,
  value,
  type = "text",
  onInput,
}) {
  return (
    <label className="col flex input w100">
      <p className="margin0 w100">{label}</p>
      <input
        className="light-border w100"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInput}
        spellCheck={spellCheck}
        readOnly={readOnly}
      />
    </label>
  );
}

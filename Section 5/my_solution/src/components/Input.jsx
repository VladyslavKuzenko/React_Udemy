export default function InputGroup({ text, value, onChange }) {
  return (
    <div>
      <label>{text}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

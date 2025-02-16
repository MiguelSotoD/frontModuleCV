const InputField = ({ label, type = "text", id, className = "" }) => (
  <div className={`${className}`}>
    <label htmlFor={id} className="mb-1 font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="p-2 border border-gray rounded-md w-full focus:outline-none focus:ring-1 focus:ring-green"
    />
  </div>
);

export default InputField;

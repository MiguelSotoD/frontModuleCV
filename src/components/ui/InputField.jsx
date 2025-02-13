const InputField = ({ label, type = "text", id, className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="mb-1 font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="p-2 border border-gray-300 rounded-md w-full"
    />
  </div>
);

export default InputField;

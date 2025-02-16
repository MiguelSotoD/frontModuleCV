const InputFiledShort = ({ label, type = "text", id, className = "" }) => (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-1 font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="p-2 border border-gray rounded-md w-1/2 focus:outline-none focus:ring-1 focus:ring-green"
      />
    </div>
  );

  export default InputFiledShort;
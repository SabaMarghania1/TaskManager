export default function Input({
  id,
  type,
  placeholder,
  className = "",
  ...props
}) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`w-full p-4 border border-gray-300 rounded-xl mb-4 text-[14px] ${className}`}
        {...props}
      />
    </>
  );
}

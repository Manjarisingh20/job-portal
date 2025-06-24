export default function Input({ label, type = "text",  placeholder, className }) {
  return (
    <div >
      <input
        type={type}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`}
      />
    </div>
  );
}

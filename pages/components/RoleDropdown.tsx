import { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const roles = ["Founder", "Developer", "Designer", "Marketer", "Other"];

export default function RoleDropdown({
  value,
  onChange,
  error,
}: {
  value?: string;
  onChange: (role: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        className={`
          w-full text-left bg-transparent border-b py-3 pr-10 pl-0 text-white
          rounded-t-xl focus:outline-none transition-colors duration-200
          ${
            open 
              ? "border-[#a259ff] shadow-[0_2px_0_0_#a259ff]" 
              : error 
                ? "border-red-400" 
                : "border-[#b0b0b0]"
          }
        `}
        onClick={() => setOpen((v) => !v)}
        tabIndex={0}
      >
        <span
          className={`transition-colors duration-200 ${
            value ? "text-white" : "text-[#b0b0b0]"
          }`}
        >
          {value || "Role"}
        </span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          <MdKeyboardArrowDown 
            className={`h-6 w-6 transition-transform duration-200 ${
              open ? "rotate-180 text-[#a259ff]" : error ? "text-red-400" : "text-[#b0b0b0]"
            }`}
          />
        </span>
      </button>
      <div
        className={`
          absolute left-0 right-0 mt-1 bg-[#18171A] border border-[#272847] rounded-xl shadow-lg z-20 overflow-hidden
          transition-all duration-200
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        style={{ boxShadow: open ? "0 8px 32px 0 #0008" : "none" }}
      >
        {roles.map((role) => (
          <div
            key={role}
            onClick={() => {
              onChange(role);
              setOpen(false);
            }}
            className={`
              px-5 py-3 cursor-pointer text-base transition-all duration-150
              ${
                value === role
                  ? "bg-[#272847] text-[#a259ff] font-semibold"
                  : "text-white"
              }
              hover:bg-[#23223a] hover:text-[#a259ff]
            `}
          >
            {role}
          </div>
        ))}
      </div>
      {/* {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )} */}
    </div>
  );
}
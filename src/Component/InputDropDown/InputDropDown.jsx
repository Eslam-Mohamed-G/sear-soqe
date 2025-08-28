import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DropdownInput({ placeholder, options, dataName, dropdownHeight }) {
    const { t } = useTranslation("homePage"); // hook للترجمة
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef(null); // ref للعنصر

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    // قفل الدروب لما تضغط برة
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Input */}
            <input
                type="text"
                value={selected}
                placeholder={placeholder}
                onClick={() => setIsOpen(!isOpen)}
                onChange={(e) => setSelected(e.target.value)} // كتابة يدويًا
                className="w-full border border-gray-400 rounded-lg px-2 py-1 cursor-pointer focus:outline-none placeholder:text-sm"
            />
            <span className={`absolute end-2 top-1/2 -translate-y-1/2 ${isOpen ? "rotate-90 transition-all ease-in-out duration-300" : "rotate-270 transition-all ease-in-out duration-300"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </span>

            {/* Dropdown */}
            {isOpen && (
                <ul className={`absolute w-full bg-white border-gray-200 shadow rounded-lg z-10 overflow-y-auto ${dropdownHeight} custom-scroll`}>
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className="hover:bg-gray-100 p-2 cursor-pointer"
                        >
                            {t(`sealsCar.${dataName}.${option.key}`)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

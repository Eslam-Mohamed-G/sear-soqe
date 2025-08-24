import { useState, useRef, useEffect } from "react";

export default function DropdownInput({ choose }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef(null); // ref للعنصر

    const options = ["هيونداى", "كيا", "نيسان", "تويتا"];

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
                placeholder={choose}
                onClick={() => setIsOpen(!isOpen)}
                onChange={(e) => setSelected(e.target.value)} // كتابة يدويًا
                className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-violetLight"
            />

            {/* Dropdown */}
            {isOpen && (
                <ul className="absolute w-full bg-white border-gray-200 shadow rounded-lg z-10 overflow-hidden">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

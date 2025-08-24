import { useState } from "react";

export default function DropdownInput() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const options = ["Option 1", "Option 2", "Option 3"];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-64">
            {/* Input */}
            <input
                type="text"
                value={selected}
                placeholder="اختر قيمة"
                readOnly
                onClick={() => setIsOpen(!isOpen)}
                className="w-full border rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Dropdown */}
            {isOpen && (
                <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className="p-2 hover:bg-blue-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

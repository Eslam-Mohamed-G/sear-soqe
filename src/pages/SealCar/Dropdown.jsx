import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Dropdown() {
    const { t } = useTranslation("sealCarPage");
    const brands = t("brands"); // Array جاي من JSON

    const [brand, setBrand] = useState("");
    const [selectedBrand, setSelectedBrand] = useState([]);

    const [model, setModel] = useState("");
    const [selectedModel, setSelectedModel] = useState([]);

    const [version, setVersion] = useState("");

    return (
        <div className="flex flex-col gap-4 w-72">
            {/* Brand Dropdown */}
            <DropdownSelect
                label={t("chooseBrand")}
                options={brands.map((b) => b.brand)}
                value={brand}
                onChange={(val, isOption) => {
                    setBrand(val);
                    setModel("");
                    setVersion("");
                    setSelectedBrand(isOption ? brands.find(b => b.brand === val) : null);
                }}
            />

            {/* Model Dropdown */}
            <DropdownSelect
                label={t("chooseModel")}
                options={selectedBrand?.models?.map((m) => m.name) || []}
                value={model}
                onChange={(val, isOption) => {
                    setModel(val);
                    setVersion("");
                    setSelectedModel(
                        isOption && selectedBrand
                            ? selectedBrand.models.find((m) => m.name === val)
                            : null
                    );
                }}
                alwaysVisible
            />

            {/* Version Dropdown */}
            <DropdownSelect
                label={t("chooseVersion")}
                options={selectedModel?.versions || []}
                value={version}
                onChange={(val) => setVersion(val)}
                alwaysVisible
            />

        </div>
    );
}

/* 🔽 Component مُعاد استخدامه */
function DropdownSelect({ label, options, value, onChange, alwaysVisible }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (opt) => {
        onChange(opt, true); // اختار من الليستة
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <input
                type="text"
                value={value}
                placeholder={label}
                onClick={() => options.length > 0 && setIsOpen(!isOpen)}
                onChange={(e) => onChange(e.target.value, false)} // كتب manual
                className="w-full border border-gray-400 rounded-lg px-2 py-1 focus:outline-none placeholder:text-sm"
            />
            <span
                className={`absolute end-2 top-1/2 -translate-y-1/2 transition-all ${isOpen ? "-rotate-180 ltr:rotate-180" : ""} ${options.length === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>

            </span>


            {/* هنا 👇 options مش هتظهر إلا لو فيه data */}
            {isOpen && options.length > 0 && (
                <ul className="absolute w-full bg-white border-gray-200 shadow rounded-lg z-10 overflow-y-auto h-48">
                    {options.map((opt, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(opt)}
                            className="hover:bg-gray-100 p-2 cursor-pointer"
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


export default function Dropdown({ formik }) {
    const { t } = useTranslation("sealCarPage");
    const brands = t("brands");

    const handleChange = (field, val) => {
        formik.setFieldValue(field, val); // سواء كتابة أو اختيار
    };

        // // ✅ Validation Schema
        // const validationSchema = Yup.object({
        //     brand: Yup.string().required("اختيار الماركة مطلوب"),
        //     model: Yup.string().required("اختيار الموديل مطلوب"),
        //     version: Yup.string().required("اختيار الفئة مطلوب"),
        //     year: Yup.number().required("السنة مطلوبة").min(1990).max(2025),
        //     color: Yup.string().required("اللون مطلوب"),
        // });
    
        // // ✅ Formik
        // const formik = useFormik({
        //     initialValues: {
        //         brand: "",
        //         model: "",
        //         version: "",
        //         year: "",
        //         color: "",
        //     },
        //     validationSchema,
        //     onSubmit: (values) => {
        //         console.log("بيانات السيارة:", values);
        //         alert("تم تسجيل السيارة بنجاح ✅");
        //     },
        // });

    return (
        <div className="space-y-4">
            {/* Brand */}
            <DropdownSelect
                label={t("brand")}
                options={brands.map((b) => b.brand)}
                value={formik.values.brand}
                onChange={(val) => handleChange("brand", val)}
            />
            {formik.errors.brand && formik.touched.brand && (
                <p className="text-red-500 text-sm">{formik.errors.brand}</p>
            )}

            {/* Model */}
            <DropdownSelect
                label={t("model")}
                options={
                    formik.values.brand
                        ? brands.find((b) => b.brand === formik.values.brand)?.models.map((m) => m.name) || []
                        : []
                }
                value={formik.values.model}
                onChange={(val) => handleChange("model", val)}
            />
            {formik.errors.model && formik.touched.model && (
                <p className="text-red-500 text-sm">{formik.errors.model}</p>
            )}

            {/* Version */}
            <DropdownSelect
                label={t("version")}
                options={
                    formik.values.model
                        ? brands
                            .find((b) => b.brand === formik.values.brand)
                            ?.models.find((m) => m.name === formik.values.model)?.versions || []
                        : []
                }
                value={formik.values.version}
                onChange={(val) => handleChange("version", val)}
            />
            {formik.errors.version && formik.touched.version && (
                <p className="text-red-500 text-sm">{formik.errors.version}</p>
            )}
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
                className={`absolute end-2 top-1/2 -translate-y-1/2 transition-all ${isOpen ? "-rotate-180 ltr:rotate-180" : ""} ${options.length === 0 ? "opacity-0 cursor-not-allowed" : ""}`}
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

import React from "react";
import { useTranslation } from "react-i18next";

// مصفوفة فيها بيانات أشكال العربيات (الاسم + الصورة)
const carShapes = [
    { key: "sedan", img: "./car shape/sedan.png", alt: "sedan car" },
    { key: "hatchback", img: "./car shape/hatchback.png", alt: "hatchback car" },
    { key: "convertible", img: "./car shape/convertible.png", alt: "convertible car" },
    { key: "suv", img: "./car shape/suv.png", alt: "suv car" },
    { key: "coupe", img: "./car shape/coupe.png", alt: "coupe car" },
    { key: "pickup", img: "./car shape/pickup.png", alt: "pickup car" },
];

export default function CarShape() {
    const { t } = useTranslation("homePage"); // hook للترجمة

    return (
        // شبكة من عمودين لعرض كل شكل عربية
        <div className="grid grid-cols-2 gap-2 mt-4">
            {carShapes.map((car, index) => (
                // كل عنصر من عناصر المصفوفة بيتحول لـ card
                <div
                    key={index} // لازم مفتاح فريد لكل عنصر في map
                    className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500"
                >
                    <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                        {/* الترجمة حسب اللغة المختارة */}
                        <span className="text-[11px] md:text-sm font-bold w-full">
                            {t(`carShape.${car.key}`)}
                        </span>

                        {/* صورة شكل العربية */}
                        <img src={car.img} alt={car.alt} />
                    </div>
                </div>
            ))}
        </div>
    );
}


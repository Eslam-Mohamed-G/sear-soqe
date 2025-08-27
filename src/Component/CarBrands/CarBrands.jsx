import React from 'react'
import { useTranslation } from 'react-i18next';

const brands = [
    { key: "hyundai", image: "./car brands/hyundai.png" },
    { key: "toyota", image: "./car brands/tyota.png" },
    { key: "chevrolet", image: "./car brands/chevorlet.png" },
    { key: "kia", image: "./car brands/kia.png" },
    { key: "nissan", image: "./car brands/nissan.png" },
    { key: "fiat", image: "./car brands/fiat.png" },
    { key: "daewoo", image: "./car brands/daewoo.png" },
    { key: "skoda", image: "./car brands/skoda.png" },
    { key: "peugeot", image: "./car brands/peugeot.png" },
    { key: "mg", image: "./car brands/mg.png" },
    { key: "suzuki", image: "./car brands/suzuki.png" },
    { key: "bmw", image: "./car brands/bmw.png" },
];

export default function CarBrands() {
    const { t } = useTranslation("homePage");
    return (
        <div className="grid grid-cols-4 gap-2 mt-4">
            {brands.map((brand, idx) => (
                <div key={idx} className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                    <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                        <span className='text-[11px] md:text-sm font-bold w-full'>{t(`brands.${brand.key}`)}</span>
                        <div className="max-w-16 max-h-16">
                            <img src={brand.image} alt={`${t(`brands.${brand.key}`)} car`} className='object-contain' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


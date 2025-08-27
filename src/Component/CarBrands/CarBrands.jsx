import React from 'react'

const brands = [
    { name: "هيونداي", image: "./car brands/hyundai.png" },
    { name: "تويوتا", image: "./car brands/tyota.png" },
    { name: "شفرولية", image: "./car brands/chevorlet.png" },
    { name: "كيا", image: "./car brands/kia.png" },
    { name: "نيسان", image: "./car brands/nissan.png" },
    { name: "فيات", image: "./car brands/fiat.png" },
    { name: "دايو", image: "./car brands/daewoo.png" },
    { name: "سكودا", image: "./car brands/skoda.png" },
    { name: "بيجو", image: "./car brands/peugeot.png" },
    { name: "ام جي", image: "./car brands/mg.png" },
    { name: "سوزوكى", image: "./car brands/suzuki.png" },
    { name: "بي ام دبليو", image: "./car brands/bmw.png" },
];

export default function CarBrands() {
    return (
        <div className="grid grid-cols-4 gap-2 mt-4">
            {brands.map((brand, idx) => (
                <div key={idx} className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                    <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                        <span className='text-[11px] md:text-sm font-bold w-full'>{brand.name}</span>
                        <div className="max-w-16 max-h-16">
                            <img src={brand.image} alt={`${brand.name} car`} className='object-contain' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


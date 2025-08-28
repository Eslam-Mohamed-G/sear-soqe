import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ContentOfTabsOfHomePage({ colNumber, dataName, data, responsiveImg }) {
    const { t } = useTranslation("homePage"); // hook للترجمة

    return (
        <div className={`grid grid-cols-${colNumber} gap-2 mt-4`}>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500"
                >
                    <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                        {/* الترجمة حسب اللغة المختارة */}
                        <span className="text-[11px] md:text-sm font-bold w-full">
                            {t(`${dataName}.${item.key}`)}
                        </span>
                        {/* صورة */}
                        {responsiveImg ?
                            <div className="max-w-16 max-h-16">
                                <img src={item.image} alt={item.alt} className='w-full object-contain' />
                            </div>
                            :
                            <img src={item.image} alt={item.alt} />
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

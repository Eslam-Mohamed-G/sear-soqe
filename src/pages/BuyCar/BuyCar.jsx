import React from 'react'
import bgImg from '../../assets/image.png';
import DropdownInput from '../../Component/InputDropDown/InputDropDown';

export default function BuyCar() {
    return (
        <div className='pt-20 px-8 3xl:px-10 2xl:px-24'>
            {/* top section */}
            <div className="w-full h-96 bg-cover bg-center"style={{ backgroundImage: `url(${bgImg})` }}>
                <p className='text-white'>ابحث عن السيارات المستعملة عبر فئات منتقاه بعناية</p>

                <div className="rounded-xl border border-gray-200 bg-white">
                    <p>سيارات للبيع</p>
                    <form action="">
                        {/* car model */}
                        <div className="">
                            <DropdownInput/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

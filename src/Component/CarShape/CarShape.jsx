import React from 'react'

export default function CarShape() {
    return (
        <div className="grid grid-cols-2 gap-2 mt-4">
            {/* div1 */}
            <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                    <span className='text-[11px] md:text-sm font-bold w-full'>سيدان</span>
                    <img src="./car shape/sedan.png" alt="sedan car" />
                </div>
            </div>
            {/* div2 */}
            <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                    <span className='text-[11px] md:text-sm font-bold w-full'>هاتشباك</span>
                    <img src="./car shape/hatchback.png" alt="hatchback car" />
                </div>
            </div>
            {/* div3 */}
            <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                    <span className='text-[11px] md:text-sm font-bold w-full'>مكشوفة</span>
                    <img src="./car shape/convertible.png" alt="convertible car" />
                </div>
            </div>
            {/* div4 */}
            <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                    <span className='text-[11px] md:text-sm font-bold w-full'>دفع رباعي</span>
                    <img src="./car shape/suv.png" alt="suv car" />
                </div>
            </div>
            {/* div5 */}
            <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                    <span className='text-[11px] md:text-sm font-bold w-full'>كوبيه</span>
                    <img src="./car shape/coupe.png" alt="coupe car" />
                </div>
            </div>
            {/* div6 */}
            <div className="overflow-hidden cursor-pointer customShadow_12 rounded-xl transition-all ease-in-out duration-500">
                <div className="w-full flex flex-col items-end justify-between text-start px-2 py-2 md:px-4">
                    <span className='text-[11px] md:text-sm font-bold w-full'>بيك أب</span>
                    <img src="./car shape/pickup.png" alt="pickup car" />
                </div>
            </div>
        </div>
    )
}

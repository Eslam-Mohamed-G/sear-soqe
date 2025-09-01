import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import Dropdown from "./Dropdown";

export default function SealCar() {
    const { t } = useTranslation("sealCarPage");


    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: "",
        color: "",
        transmission: "",
        mileage: "",
        engineCondition: "",
        bodyCondition: "",
        tireCondition: "",
        lastMaintenance: "",
        maintenanceDetails: "",
        license: "",
        inspection: "",
        cylinders: "",
        engineCapacity: "",
        ac: "",
        passengers: "",
        features: "",
        defects: "",
        price: "",
        negotiable: "",
        phone: "",
        contactTimes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚗 بيانات السيارة:", formData);
        alert("تم حفظ بيانات السيارة بنجاح! سنقوم بالتواصل معك قريبًا.");
    };

    return (
        <div className="w-full mx-auto bg-white p-6 md:p-8 rounded-xl customShadow mt-3 md:mt-5">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
                نموذج تسجيل بيانات السيارة للبيع
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* المعلومات الأساسية */}
                <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-blue-600">
                    <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                        المعلومات الأساسية <span className="text-red-500">*</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="font-semibold block mb-1">
                                الماركة <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                الموديل <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                سنة الصنع <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="year"
                                min="1990"
                                max="2025"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                اللون <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                نوع ناقل الحركة <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="transmission"
                                value={formData.transmission}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر نوع القير</option>
                                <option value="automatic">اوتوماتيك</option>
                                <option value="manual">عادي</option>
                                <option value="CVT">CVT</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                عدد الكيلومترات <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="mileage"
                                value={formData.mileage}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>
                    </div>
                    {/* اختيار البراند */}
                    {/* <Dropdown/> */}
                </div>

                {/* الحالة الفنية */}
                <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-blue-600">
                    <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                        الحالة الفنية <span className="text-red-500">*</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* حالة السيارة */}
                        <div>
                            <label className="font-semibold block mb-1">
                                حالة السيارة <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="engineCondition"
                                value={formData.engineCondition}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر حالة السيارة</option>
                                <option value="excellent">جديدة</option>
                                <option value="good">مستعملة</option>
                                <option value="fair">معتمدة</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold block mb-1">
                                حالة الماكينة <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="engineCondition"
                                value={formData.engineCondition}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر حالة الماكينة</option>
                                <option value="excellent">ممتازة</option>
                                <option value="good">جيدة</option>
                                <option value="fair">متوسطة</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                حالة البودي والدهان <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="bodyCondition"
                                value={formData.bodyCondition}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر حالة البودي</option>
                                <option value="original">أصلي</option>
                                <option value="painted">مصبوغ</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">آخر صيانة</label>
                            <input
                                type="date"
                                name="lastMaintenance"
                                value={formData.lastMaintenance}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold block mb-1">
                            تفاصيل الصيانة الأخيرة
                        </label>
                        <textarea
                            name="maintenanceDetails"
                            value={formData.maintenanceDetails}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="طبيعة الأعمال التي تمت في آخر صيانة"
                        />
                    </div>
                </div>

                {/* العيوب والسعر */}
                <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-blue-600">
                    <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                        العيوب والسعر
                    </h2>

                    <div>
                        <label className="font-semibold block mb-1">العيوب</label>
                        <textarea
                            name="defects"
                            value={formData.defects}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="اذكر أي عيوب ميكانيكية أو في الجسم"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="font-semibold block mb-1">
                                السعر المطلوب (جنيه) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-1">
                                قابل للتفاوض <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="negotiable"
                                value={formData.negotiable}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر</option>
                                <option value="yes">نعم</option>
                                <option value="no">لا</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* معلومات الاتصال */}
                <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-blue-600">
                    <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                        معلومات الاتصال <span className="text-red-500">*</span>
                    </h2>

                    <div>
                        <label className="font-semibold block mb-1">
                            رقم الهاتف <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg p-2"
                            placeholder="01XXXXXXXX"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="font-semibold block mb-1">
                            أوقات الاتصال المناسبة
                        </label>
                        <input
                            type="text"
                            name="contactTimes"
                            value={formData.contactTimes}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                            placeholder="مثال: من 10 صباحاً إلى 10 مساءً"
                        />
                    </div>
                </div>

                {/* زر الحفظ */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                >
                    تسجيل بيانات السيارة
                </button>
            </form>
        </div>
    );
}


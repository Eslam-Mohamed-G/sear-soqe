import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useFormik } from "formik";
import * as Yup from "yup";
import Dropdown from "./Dropdown";


export default function SealCar() {
    const { t } = useTranslation("sealCarPage");
    // ✅ Validation Schema
    const validationSchema = Yup.object({
        brand: Yup.string().required("اختيار الماركة مطلوب"),
        model: Yup.string().required("اختيار الموديل مطلوب"),
        version: Yup.string().required("اختيار الفئة مطلوب"),
        year: Yup.number().required("السنة مطلوبة").min(1990).max(2025),
        color: Yup.string().required("اللون مطلوب"),
    });

    // ✅ Formik
    const formik = useFormik({
        initialValues: {
            brand: "",
            model: "",
            version: "",
            year: "",
            color: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("بيانات السيارة:", values);
            alert("تم تسجيل السيارة بنجاح ✅");
        },
    });


    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: "",
        color: "",
        transmission: "",
        mileage: "",
        carCondition: "",
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
        city: "",
        carShape: "",
        fuelType: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("بيانات السيارة:", formData);
        alert("تم حفظ بيانات السيارة بنجاح! سنقوم بالتواصل معك قريبًا.");
    };

    return (
        <div className="w-full mx-auto bg-white p-6 md:p-8 rounded-xl customShadow mt-3 md:mt-5">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
                نموذج تسجيل بيانات السيارة للبيع
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-8">
                <Dropdown formik={formik} />
                {/* السنة */}
                <div>
                    <label className="block mb-1 font-semibold">سنة الصنع</label>
                    <input
                        type="number"
                        name="year"
                        value={formik.values.year}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full border rounded-lg p-2"
                    />
                    {formik.touched.year && formik.errors.year && (
                        <p className="text-red-500 text-sm">{formik.errors.year}</p>
                    )}
                </div>

                {/* اللون */}
                <div>
                    <label className="block mb-1 font-semibold">اللون</label>
                    <input
                        type="text"
                        name="color"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full border rounded-lg p-2"
                    />
                    {formik.touched.color && formik.errors.color && (
                        <p className="text-red-500 text-sm">{formik.errors.color}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
                >
                    تسجيل بيانات السيارة
                </button>
            </form>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* المعلومات الأساسية */}
                <div className="bg-gray-50 p-4 rounded-lg border-s-4 border-blue-600">
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

                        {/* السنة */}
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

                        {/* اللون */}
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

                        {/* عدد الكيلومترات */}
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

                        {/* حالة السيارة */}
                        <div>
                            <label className="font-semibold block mb-1">
                                حالة السيارة <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="carCondition"
                                value={formData.carCondition}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر حالة السيارة</option>
                                <option value="new">جديدة</option>
                                <option value="used">مستعملة</option>
                                <option value="certified">معتمدة</option>
                            </select>
                        </div>

                        {/* المدينة */}
                        <div>
                            <label className="font-semibold block mb-1">
                                المدينة<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر المدينة</option>
                                <option value="cairo">القاهرة</option>
                                <option value="alexcandria">الاسكندرية</option>
                                <option value="giza">الجيزة</option>
                            </select>
                        </div>

                        {/* السعر */}
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

                        {/* <div>
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
                        </div> */}
                    </div>
                    {/* اختيار البراند */}

                </div>

                {/* الحالة الفنية */}
                <div className="bg-gray-50 p-4 rounded-lg border-s-4 border-blue-600">
                    <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                        الحالة الفنية <span className="text-red-500">*</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* شكل السيارة */}
                        <div>
                            <label className="font-semibold block mb-1">
                                شكل السيارة<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="carShape"
                                value={formData.carShape}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر شكل</option>
                                <option value="sedan">سيدان</option>
                                <option value="hatchback">هاتشباك</option>
                                <option value="coupe">كوبيه</option>
                                <option value="convertible">مكشوفة</option>
                                <option value="van">فان</option>
                                <option value="pickup">بيك أب</option>
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

                        {/* سعة المحرك */}
                        <div>
                            <label className="font-semibold block mb-1">
                                سعة المحرك <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="engineCapacity"
                                value={formData.engineCapacity}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            />
                        </div>
                        {/* عدد السليندر */}
                        <div>
                            <label className="font-semibold block mb-1">
                                عدد السليندر
                            </label>
                            <select
                                name="cylinders"
                                value={formData.cylinders}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                                <option value="16">16</option>
                            </select>
                        </div>

                        {/* نوع ناقل الحركة */}
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

                        {/* شكل السيارة */}
                        <div>
                            <label className="font-semibold block mb-1">
                                نوع الوقود<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="fuelType"
                                value={formData.fuelType}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-2"
                            >
                                <option value="">اختر الوقود</option>
                                <option value="petrol">بنزين</option>
                                <option value="diesel">ديزل</option>
                                <option value="hybrid">هجينة</option>
                                <option value="electric">كهربائية</option>
                            </select>
                        </div>

                        {/* الصيانة */}
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

                {/* معلومات الاتصال */}
                <div className="bg-gray-50 p-4 rounded-lg border-s-4 border-blue-600">
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


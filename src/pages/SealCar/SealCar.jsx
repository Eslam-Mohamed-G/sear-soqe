import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";


export default function SealCar() {
    const { t } = useTranslation("sealCarPage");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const loginDataString = Cookies.get("loginData");
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const token = loginData?.token;

    // ✅ Schema بتاع التحقق باستخدام Yup
    const validationSchema = Yup.object({
        make: Yup.string().required("الماركة مطلوبة"),
        name: Yup.string().required("الاسم مطلوب"),
        status: Yup.string().required("الحالة مطلوبة"),
        category: Yup.string().required("الفئة مطلوبة"),
        color: Yup.string().required("اللون مطلوب"),
        model: Yup.string().required("الموديل مطلوب"),
        year: Yup.number()
            .typeError("السنة لازم تكون رقم")
            .required("السنة مطلوبة")
            .min(1900, "السنة غير صحيحة")
            .max(new Date().getFullYear(), "السنة غير صحيحة"),
        plate_number: Yup.string().required("رقم اللوحة مطلوب"),
        price: Yup.number()
            .typeError("السعر لازم يكون رقم")
            .required("السعر مطلوب"),
        images: Yup.array()
            .min(3, "لازم ترفع 3 صور على الأقل")
            .required("الصور مطلوبة"),
        description: Yup.object({
            engineCapacity: Yup.string().required("سعة المحرك مطلوبة"),
            cylinders: Yup.string(),
            transmission: Yup.string().required("نوع ناقل الحركة مطلوب"),
            fuelType: Yup.string().required("نوع الوقود مطلوب"),
            mileage: Yup.number()
                .typeError("الكيلومتر لازم يكون رقم")
                .required("الكيلومتر مطلوب"),
            // lastMaintenance: Yup.string(),
            // maintenanceDetails: Yup.string(),
        }),
    });

    // ✅ Formik
    const formik = useFormik({
        initialValues: {
            make: "",
            name: "",
            status: "",
            category: "",
            model: "",
            color:"",
            year: "",
            plate_number: "",
            price: "",
            images: [],
            description: {
                engineCapacity: "",
                cylinders: "",
                transmission: "",
                fuelType: "",
                mileage: "",
                // lastMaintenance: "",
                // maintenanceDetails: "",
            },
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            try {
                const formData = new FormData();

                // الحقول العادية
                Object.keys(values).forEach((key) => {
                    if (key !== "images" && key !== "description") {
                        formData.append(key, values[key] ?? "");
                    }
                });

                // description كـ JSON string
                if (values.description) {
                    formData.append("description", JSON.stringify(values.description));
                }

                // الصور
                if (values.images && values.images.length > 0) {
                    values.images.forEach((img) => {
                        formData.append("images[]", img);
                    });
                }

                // التوكن من الكوكيز
                const loginData = Cookies.get("loginData");
                const token = loginData ? JSON.parse(loginData).token : null;
                if (!token) throw new Error("User not authenticated");

                // الريكوست
                const response = await axios.post(
                    "https://adminsand.alrmoz.com/api/user/listings",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                console.log("تم إنشاء الإعلان:", response.data);
                setIsLoading(false);
                resetForm();

            } catch (err) {
                setIsLoading(false);
                setErrorMessage(err?.response?.data?.message || "حدث خطأ غير متوقع");
            }
        }
    });

    // const [formData, setFormData] = useState({
    //     brand: "",
    //     model: "",
    //     Version: "",
    //     year: "",
    //     color: "",
    //     transmission: "",
    //     mileage: "",
    //     carCondition: "",
    //     engineCondition: "",
    //     bodyCondition: "",
    //     tireCondition: "",
    //     lastMaintenance: "",
    //     maintenanceDetails: "",
    //     license: "",
    //     inspection: "",
    //     cylinders: "",
    //     engineCapacity: "",
    //     ac: "",
    //     passengers: "",
    //     features: "",
    //     defects: "",
    //     price: "",
    //     negotiable: "",
    //     phone: "",
    //     contactTimes: "",
    //     city: "",
    //     carShape: "",
    //     fuelType: "",
    // });

    useEffect(() => {
        return () => {
            formik.values.images.forEach(file => URL.revokeObjectURL(file));
        };
    }, [formik.values.images]);

    return (
        <div className="w-full mx-auto bg-white p-6 md:p-8 rounded-xl customShadow mt-3 md:mt-5">
            {token ?
                <div className="">
                    <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
                        نموذج تسجيل بيانات السيارة للبيع
                    </h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-8">
                        {/* <Dropdown formik={formik} /> */}
                        {/* المعلومات الأساسية */}
                        <div className="bg-gray-50 p-4 rounded-lg border-s-4 border-blue-600">
                            <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                                المعلومات الأساسية <span className="text-red-500">*</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* name الماركة */}
                                <div>
                                    <label className="block mb-1 font-semibold">الماركة</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="text-red-500 text-sm">{formik.errors.name}</p>
                                    )}
                                </div>

                                {/* model الموديل */}
                                <div>
                                    <label className="block mb-1 font-semibold">الموديل</label>
                                    <input
                                        type="text"
                                        name="model"
                                        value={formik.values.model}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.model && formik.errors.model && (
                                        <p className="text-red-500 text-sm">{formik.errors.model}</p>
                                    )}
                                </div>

                                {/* حالة السيارة  status*/}
                                <div>
                                    <label className="font-semibold block mb-1">
                                        حالة السيارة <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        <option value="">اختر حالة السيارة</option>
                                        <option value="new">جديدة</option>
                                        <option value="used">مستعملة</option>
                                        <option value="certified">معتمدة</option>
                                    </select>
                                    {formik.touched.status && formik.errors.status && (
                                        <p className="text-red-500 text-sm">{formik.errors.status}</p>
                                    )}
                                </div>

                                {/* السنة year*/}
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

                                {/* category شكل السيارة */}
                                <div>
                                    <label className="block mb-1 font-semibold">شكل السسيارة</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.category && formik.errors.category && (
                                        <p className="text-red-500 text-sm">{formik.errors.category}</p>
                                    )}
                                </div>

                                {/* price السعر */}
                                <div>
                                    <label className="block mb-1 font-semibold">السعر</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.price && formik.errors.price && (
                                        <p className="text-red-500 text-sm">{formik.errors.price}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* الحالة الفنية */}
                        <div className="bg-gray-50 p-4 rounded-lg border-s-4 border-blue-600">
                            <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                                الحالة الفنية <span className="text-red-500">*</span>
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* بلد الصنع make*/}
                                <div>
                                    <label className="block mb-1 font-semibold">بلد الصنع</label>
                                    <input
                                        type="text"
                                        name="make"
                                        value={formik.values.make}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.make && formik.errors.make && (
                                        <p className="text-red-500 text-sm">{formik.errors.make}</p>
                                    )}
                                </div>
                                {/* اللون color*/}
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

                                {/* plate_number رقم اللوحة */}
                                <div>
                                    <label className="block mb-1 font-semibold">رقم اللوحة</label>
                                    <input
                                        type="text"
                                        name="plate_number"
                                        value={formik.values.plate_number}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.plate_number && formik.errors.plate_number && (
                                        <p className="text-red-500 text-sm">{formik.errors.plate_number}</p>
                                    )}
                                </div>

                                {/* mileage عدد الكيلومترات */}
                                <div>
                                    <label className="block mb-1 font-semibold">عدد الكيلومترات</label>
                                    <input
                                        type="number"
                                        name="description.mileage"
                                        value={formik.values.description.mileage}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.description?.mileage &&
                                        formik.errors.description?.mileage && (
                                            <div className="text-red-500 text-sm">
                                                {formik.errors.description.mileage}
                                            </div>
                                        )}
                                </div>

                                {/* سعة المحرك */}
                                <div>
                                    <label className="font-semibold block mb-1">سعة المحرك</label>
                                    <input
                                        type="text"
                                        name="description.engineCapacity"
                                        value={formik.values.description.engineCapacity}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    />
                                    {formik.touched.description?.engineCapacity &&
                                        formik.errors.description?.engineCapacity && (
                                            <div className="text-red-500 text-sm">
                                                {formik.errors.description.engineCapacity}
                                            </div>
                                        )}
                                </div>

                                {/* عدد السليندر */}
                                <div>
                                    <label className="font-semibold block mb-1">عدد السليندر</label>
                                    <select
                                        name="description.cylinders"
                                        value={formik.values.description.cylinders}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        <option value="">اختر</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="6">6</option>
                                        <option value="8">8</option>
                                    </select>
                                    {formik.touched.description?.cylinders &&
                                        formik.errors.description?.cylinders && (
                                            <div className="text-red-500 text-sm">
                                                {formik.errors.description.cylinders}
                                            </div>
                                        )}
                                </div>

                                {/* ناقل الحركة */}
                                <div>
                                    <label className="font-semibold block mb-1">نوع ناقل الحركة</label>
                                    <select
                                        name="description.transmission"
                                        value={formik.values.description.transmission}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        <option value="">اختر</option>
                                        <option value="automatic">اوتوماتيك</option>
                                        <option value="manual">عادي</option>
                                        <option value="CVT">CVT</option>
                                    </select>
                                    {formik.touched.description?.transmission &&
                                        formik.errors.description?.transmission && (
                                            <div className="text-red-500 text-sm">
                                                {formik.errors.description.transmission}
                                            </div>
                                        )}
                                </div>

                                {/* نوع الوقود */}
                                <div>
                                    <label className="font-semibold block mb-1">نوع الوقود</label>
                                    <select
                                        name="description.fuelType"
                                        value={formik.values.description.fuelType}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        <option value="">اختر</option>
                                        <option value="petrol">بنزين</option>
                                        <option value="diesel">ديزل</option>
                                        <option value="hybrid">هجينة</option>
                                        <option value="electric">كهربائية</option>
                                    </select>
                                    {formik.touched.description?.fuelType &&
                                        formik.errors.description?.fuelType && (
                                            <div className="text-red-500 text-sm">
                                                {formik.errors.description.fuelType}
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>

                        {/* images الصور */}
                        <div className="bg-gray-50 p-4 rounded-lg border-s-4 border-blue-600">
                            <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
                                الصور<span className="text-red-500">*</span>
                            </h2>

                            {/* images الصور */}
                            <div>
                                <label className="font-semibold block mb-1">
                                    صور السيارة <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="file"
                                    name="images"
                                    accept="image/*"
                                    multiple
                                    onChange={(event) => {
                                        const files = Array.from(event.currentTarget.files);
                                        formik.setFieldValue("images", files);
                                    }}
                                    className="w-full border rounded-lg p-2"
                                />

                                {formik.errors.images && formik.touched.images && (
                                    <div className="text-red-500 text-sm">{formik.errors.images}</div>
                                )}

                                {/* ✅ عرض صور المعاينة قبل الرفع */}
                                {formik.values.images.length > 0 && (
                                    <div className="flex gap-2 flex-wrap mt-3">
                                        {formik.values.images.map((file, index) => (
                                            <img
                                                key={index}
                                                src={URL.createObjectURL(file)}
                                                alt={`preview-${index}`}
                                                className="w-24 h-24 object-cover rounded border"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* زر الحفظ */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition relative cursor-pointer"
                        >
                            تسجيل بيانات السيارة
                            {isLoading &&
                                <div className="absolute top-1/2 -translate-y-1/2 end-5 block bg-transparent dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                </div>
                            }
                        </button>
                        {errorMessage && (
                            <p className="text-red-600 text-center mb-4">{errorMessage}</p>
                        )}
                    </form>
                </div>
                :
                <div className="text-center capitalize">
                    you must login
                </div>
            }
        </div>
    );
}


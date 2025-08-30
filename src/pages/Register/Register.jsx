import { useFormik } from 'formik';
import * as Yup from 'yup'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Register() {
    const { t } = useTranslation("authentication");
    // حالة (state) للتحكم في إظهار أو إخفاء كلمة المرور
    const [showPassword, setShowPassword] = useState(false);
    // دالة لتغيير حالة إظهار كلمة المرور عند الضغط على الأيقونة
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // هنا بنستخدم Yup Validation Schema لتعريف قواعد التحقق من بيانات الفورم 
    const validator = Yup.object().shape({
        name: Yup.string().required(t("validator.requiredName")).min(3, t("validator.minName")),
        email: Yup.string().email(t("validator.invalidEmail")).required(t("validator.requiredEmail")),
        password: Yup.string().required(t("validator.requiredPassword")).min(6, t("validator.minPassword")),
        phone: Yup.string().matches(/^01[0-9]{9}$/, t("validator.invalidPhone")).required(t("validator.requiredPhone")),
        terms: Yup.bool().oneOf([true], t("validator.acceptTerms"))
    });
    // إعداد formik لإدارة حالة النموذج (القيم والإرسال)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            terms: false,
        },
        validationSchema: validator,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    })

    const inputGray = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    const inputError = "block py-2.5 px-0 w-full text-sm text-red-500 bg-transparent border-0 border-b-2 border-red-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    return (
        <div className="pt-28 px-4 sm:px-8 3xl:px-10 2xl:px-24">
            <form className="max-w-md mx-auto rounded-lg p-4 customShadow" onSubmit={formik.handleSubmit}>
                <h1 className='text-center font-bold text-lg'>{t("registerForm.formName")}</h1>
                {/* name */}
                <div className="relative z-0 w-full mb-5">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.name && formik.touched.name ? inputError : inputGray}
                        placeholder=""
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("registerForm.name")}</label>
                    {formik.errors.name && formik.touched.name && <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.name}</p>}
                </div>

                {/* email */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.email && formik.touched.email ? inputError : inputGray}
                        placeholder=" "
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("registerForm.email")}</label>
                    {formik.errors.email && formik.touched.email && <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.email}</p>}
                </div>

                {/* password */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type={showPassword ? 'text' : "password"}
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.password && formik.touched.password ? inputError : inputGray}
                        placeholder=" "
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("registerForm.password")}</label>
                    <div className='absolute top-2 end-0 cursor-pointer' onClick={togglePasswordVisibility}>
                        {showPassword ?
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5 text-gray-500">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-5 text-gray-500"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                        }
                    </div>
                    {formik.errors.password && formik.touched.password && <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.password}</p>}
                </div>
                {/* number */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        pattern="[0-9]{11}"
                        name="phone"
                        id="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.phone && formik.touched.phone ? inputError : inputGray}
                        placeholder=" " />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> {t("registerForm.phone")}</label>
                    {formik.errors.phone && formik.touched.phone && (<p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.phone}</p>)}
                </div>
                {/* terms */}
                <div className="flex items-start mb-5 relative">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            name="terms"
                            checked={formik.values.terms}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-4 h-4 border border-red-300 ${formik.errors.terms && formik.touched.terms ? "border-red-600" : ""} rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800`}
                        />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("registerForm.termsText")}<a href="#" className="text-blue-600 hover:underline dark:text-blue-500"> {t("registerForm.termsLink")}</a></label>
                    {formik.errors.terms && formik.touched.terms && (
                        <p className="absolute top-full start-0 text-red-600 text-[12px]">
                            {formik.errors.terms}
                        </p>
                    )}
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("registerForm.submit")}</button>
            </form>
        </div>
    )
};

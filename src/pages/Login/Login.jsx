import { useFormik } from 'formik';
import * as Yup from 'yup'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { contextData } from '../../Context/Context';

export default function Login() {
    const navigate = useNavigate();
    const { t } = useTranslation("authentication");
    const { isUserLogedin } = useContext(contextData);
    // حالة (state) للتحكم في إظهار أو إخفاء كلمة المرور
    const [showPassword, setShowPassword] = useState(false);
    // دالة لتغيير حالة إظهار كلمة المرور عند الضغط على الأيقونة
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    // هنا بنستخدم Yup Validation Schema لتعريف قواعد التحقق من بيانات الفورم 
    const validator = Yup.object().shape({
        // name: Yup.string().required(t("validator.requiredName")).min(3, t("validator.minName")),
        email: Yup.string().email(t("validator.invalidEmail")).required(t("validator.requiredEmail")),
        password: Yup.string().required(t("validator.requiredPassword")).min(6, t("validator.minPassword")),
    });

    // إعداد formik لإدارة حالة النموذج (القيم والإرسال)
    const formik = useFormik({
        initialValues: {
            // name: '',
            email: '',
            password: '',
        },
        validationSchema: validator,
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            try {
                const response = await axios.post("https://adminsand.alrmoz.com/api/user/login", values);

                // لو السيرفر مرجعلك token
                if (response.data.token) {
                    // تخزين الكوكي (لو السيرفر مش بيعمل Set-Cookie)
                    Cookies.set("loginData", JSON.stringify(response.data), {
                        expires: 7, // عدد الأيام
                        secure: true,
                        sameSite: "strict",
                    });
                    navigate("/");
                    setIsLoading(false);
                    isUserLogedin();
                }
                resetForm();
            } catch (err) {
                // console.log(err.response.data);
                setIsLoading(false);
                setErrorMessage(err?.response?.data?.message)
            }
        }

    })

    const inputGray = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    const inputError = "block py-2.5 px-0 w-full text-sm text-red-500 bg-transparent border-0 border-b-2 border-red-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    return (
        <div className="relative pt-24">
            <form className="max-w-md mx-auto rounded-lg p-4 flex flex-col gap-10 customShadow" onSubmit={formik.handleSubmit}>
                <h1 className='text-center font-bold text-lg'>{t("loginForm.formName")}</h1>
                {/* name */}
                {/* <div className="relative z-0 w-full">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.name && formik.touched.name ? inputError : inputGray}
                        placeholder=""
                        aria-label={t("loginForm.name")}
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("loginForm.name")}</label>
                    {formik.errors.name && formik.touched.name && <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.name}</p>}
                </div> */}

                {/* email */}
                <div className="relative z-0 w-full group">
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
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("loginForm.email")}</label>
                    {formik.errors.email && formik.touched.email && <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.email}</p>}
                </div>

                {/* password */}
                <div className="relative z-0 w-full group">
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
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("loginForm.password")}</label>
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

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative cursor-pointer">
                    {t("loginForm.submit")}
                    {isLoading &&
                        <div className="absolute top-1/2 -translate-y-1/2 end-5 block bg-transparent dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                        </div>
                    }
                </button>
                {errorMessage && (
                    <p className="text-red-600 text-center text-sm">{errorMessage}</p>
                )}

            </form>
        </div>
    )
};

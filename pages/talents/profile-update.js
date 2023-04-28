import { useState,useEffect,useContext } from "react";
import { AppContext } from "@/settings/context/appContext";
import Head from "next/head";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useRouter } from "next/router";

//create a validation schema (validation rules)
const fieldsSchema = yup.object().shape({
    firstName:yup.string().required('Hey,fill this field').min(2,'Please enter two or chars'),
    lastName:yup.string().required('Hey,fill this field').min(2,'Please enter two or chars'),
    phoneNumber:yup.string().required().min(10).max(17),
    address:yup.string().required('Hey,fill this field').min(18),
    gender:yup.string().notOneOf(['Not specified']),
});



export default function ProfileUpdate () {
    const [screenHeight,setScreenHeight] = useState(0);
    const { uid,email } = useContext(AppContext);

    useEffect(() => {
        setScreenHeight(window.innerHeight - 60);
    },[]);

    const { values,handleBlur,handleChange,errors,handleSubmit,touched } = useFormik({
        validationSchema:fieldsSchema,
        initialValues:{
            firstName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            dob:'',
            gender:''
        },
        onSubmit:(values) => {
            //get field values here and perform any operation
            console.log(values.firstName);
        } 
    });

    const router = useRouter();

    return (
        <>
        <Head>
            <title>Talent Profile Update | Real Fast</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container} style={{minHeight:`${screenHeight}px`}}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Update your profile {email == undefined ? null : email}</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.inputBlockRow}>
                        <div className={styles.inputBlock}>
                            <label className={styles.label}>first name</label>
                            <input 
                            id="firstName"
                            type="text" 
                            placeholder="first and middle name"
                            className={styles.inputField}
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {
                                errors.firstName && touched.firstName 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.firstName}</p>
                                : null
                            }
                        </div>
                        <div className={styles.inputBlock}>
                            <label className={styles.label}>last name</label>
                            <input 
                            id="lastName"
                            type="text" 
                            placeholder="surname"
                            className={styles.inputField}
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {
                                errors.lastName && touched.lastName 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.lastName}</p>
                                : null
                            }
                        </div>
                    </div>

                    <div className={styles.inputBlockMain}>
                        <label className={styles.label}>Phone number</label>
                        <input 
                        id="phoneNumber"
                        type="tel" 
                        placeholder="phone number"
                        className={styles.inputField}
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {
                            errors.phoneNumber && touched.phoneNumber 
                            ? <p className={styles.formError} style={{color:'red'}}>{errors.phoneNumber}</p>
                            : null
                        }
                    </div>

                    <div className={styles.inputBlockMain}>
                        <label className={styles.label}>Address</label>
                        <input 
                        id="address"
                        type="text" 
                        placeholder="contact address"
                        className={styles.inputField}
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {
                            errors.address && touched.address 
                            ? <p className={styles.formError} style={{color:'red'}}>{errors.address}</p>
                            : null
                        }
                    </div>

                    <div className={styles.inputBlockRow}>
                        <div className={styles.inputBlock}>
                            <label className={styles.label}>Date of birth</label>
                            <input 
                            id="dob"
                            type="date" 
                            className={styles.inputField}
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        <div className={styles.inputBlock}>
                            <label className={styles.label}>Gender</label>
                            <select
                            id="gender"
                            className={styles.inputField}
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}>
                                <option value='Not specified'>not specified</option>
                                <option value='Female'>female</option>
                                <option value='Male'>male</option>
                            </select>
                            {
                                errors.gender && touched.gender 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.gender}</p>
                                : null
                            }
                        </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>Update Profile</button>
                </form>
            </div>
        </main>
        </>
    )
    router.asPath.includes('/talents/profile-update') ? router.push('/talents/profile-update') : router.push('/')
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16',
    wrapper:'w-full md:w-[720px] py-8',
    title:'text-xl text-center mb-4',
    inputBlockRow:'w-full flex flex-col md:flex-row md:gap-3 md:mb-4',
    inputBlock:'w-full mb-4',
    inputBlockMain:'w-full mb-4',
    label:'text-gray-500 mb-2',
    inputField:'w-full block border border-gray-200 py-5 px-4 rounded-full',
    submitBtn:'w-full bg-indigo-800 py-5 px-4 rounded-full text-lg text-white',
    formError:'text-xs'
}
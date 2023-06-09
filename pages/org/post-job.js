import { useState} from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as yup from 'yup';
import { db } from "@/settings/firebase/firebase.setup";
// import { addDoc, collection,doc, setDoc } from "firebase/firestore";
import { collection,doc, addDoc,setDoc } from "firebase/firestore";

const fieldsSchema = yup.object().shape({
    jobTitle:yup.string().min(2).required('Required'),
    description:yup.string().min(10).required('Required'),
    requirements:yup.string().min(6).required('Required'),
    wages:yup.number().min(1).required('Required'),
});


export default function PostJob () {
    const [screenHeight, setScreenHeight] = useState(0);

    const handleFireStoreWriteDocuments = async () => {
        await setDoc(doc(db, 'jobs', 'info@earlycode.net'),{
            title:values.jobTitle,
            desc:values.description,
            requirements:values.requirements,
            wages:values.wages,
            timestamp:new Date().getTime(),
            status:'active'
        })
        .then(() => {
            console.log('posted successfully');
        })
        .catch(error => console.log(error))
    }
                 
  const { values,handleBlur,handleChange,errors,handleSubmit,touched } = useFormik({
    validationSchema:fieldsSchema,
    initialValues:{jobTitle:'',description:'',requirements:'',wages:''},
    onSubmit:(values) => {
        // addDoc(collection(db,'jobs'),{
        //     title:values.jobTitle,
        //     desc:values.description,
        //     requirements:values.requirements,
        //     wages:values.wages,
        //     timestamp:new Date().getTime(),
        //     status:'active'
        // })
        // .then(() => {
        //     console.log('posted successfully');
        // })
        // .catch(error => console.log(error))
         handleFireStoreWriteDocuments();
        console.log('omo');
    } 
});

    return (
        <>
         <Head>
        <title>Post a Job | Real Fast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/realfast_logo.PNG"/>
      </Head>
      <main  className={styles.container}>
      <div className={styles.wrapper}>
            <h1 className={styles.title}>Post a Job Vacancy</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className={styles.inputBlockMain}>
                            <label className={styles.label}>Job Title/Position</label>
                            <input 
                            id="jobTitle"
                            type="text" 
                            placeholder="job title"
                            className={styles.inputField}
                            value={values.jobTitle}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {
                                errors.jobTitle && touched.jobTitle 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.jobTitle}</p>
                                : null
                            }
                        </div>
                        <div className={styles.inputBlockMain}>
                            <label className={styles.label}>Job description</label>
                            <textarea
                            id="description"
                            className={styles.inputField}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={10}
                            style={{borderRadius:10}}>{values.description}</textarea>
                            {
                                errors.description && touched.description 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.description}</p>
                                : null
                            }
                        </div>
                        <div className={styles.inputBlockMain}>
                            <label className={styles.label}>Wages/Salary</label>
                            <input 
                            id="wages"
                            type="number" 
                            placeholder="how much will the worker earn?"
                            className={styles.inputField}
                            value={values.wages}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                            {
                                errors.wages && touched.wages 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.wages}</p>
                                : null
                            }
                        </div>
                        <div className={styles.inputBlockMain}>
                            <label className={styles.label}>What are the requirements?</label>
                            <textarea
                            id="requirements"
                            className={styles.inputField}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={5}
                            style={{borderRadius:10}}>{values.requirements}</textarea>
                            {
                                errors.requirements && touched.requirements 
                                ? <p className={styles.formError} style={{color:'red'}}>{errors.requirements}</p>
                                : null
                            }
                        </div>


                        <button type="submit" className={styles.submitBtn}>Sign in</button>
                    </form>
        </div>        
      </main>
        </>
    )
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16',
    wrapper:'w-full md:w-[720px] flex flex-col gap-16 py-8',
    title:'text-3xl text-center',
    inputBlockMain:'w-full mb-4',
    label:'text-gray-500 mb-2',
    inputField:'w-full block border border-gray-200 py-5 px-4 rounded-full',
    submitBtn:'w-full bg-indigo-800 py-5 px-4 rounded-full text-lg text-white',
    formError:'text-xs',
  }
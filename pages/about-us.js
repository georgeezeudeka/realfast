import JobCard from "@/components/JobCard";
import {jobsData} from "@/data/job-data";
import { useEffect } from "react";


export default function AboutUs() {
    //run something after page has been rendered
    useEffect(() => {
        const rNums = [];

        for(let count = 0; count < 100; count++){
            rNums.push(Math.round(Math.random * 100000));
        }

        console.log(rNums);
    },[]);
    
    return (
        <>
        {jobsData.map((job) => {
            return <JobCard key={job.id} title={job.title} description={job.description}>
                        <h1>Info block</h1>
                        <p>Some information</p>
                   </JobCard>
        })} 
         {/* <JobCard title='remote react nextJs developer' description='remote java developer'/>
        <JobCard title='remote react developer' description='remote frontend developer'/> */}
        </>
    )
}

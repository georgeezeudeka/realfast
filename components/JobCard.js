import { useState } from "react";

export default function JobCard({title, description, children}){
    const [appCounter, setAppCounter] = useState(0);

    console.log(appCounter);
    return (
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={() => setAppCounter(appCounter + 1)}>Apply now</button>
        {children}
        </>
    )
}
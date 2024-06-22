import { useEffect, useState } from "react";
import Job from "../Job";


const FeaturedJobs = () => {
    const [jobs, setJobs]=useState();

    useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setJobs(data));
    },[])


    return (
        <div>
           <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           {
            jobs.map(job => <Job key={Job.id} job={job}> </Job> )
           }
        </div>
    );
};

export default FeaturedJobs;
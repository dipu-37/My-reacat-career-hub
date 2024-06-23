import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intid = parseInt(id);
    const job = jobs.find(job => job.id === intid)
    console.log(job);
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
               
            </div>
           
        </div>
    );
};

export default JobDetails;
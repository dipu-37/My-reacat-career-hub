import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                <br />
                {error && (
                    <div className="flex flex-col justify-center items-center">
                        <p className='text-red-500'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                        <p>Go back where you from</p>
                        <Link to="/"><button>Home</button></Link>
                    </div>
                )}
            </div>


        </div>
    );
};

export default ErrorPage;



            {/* <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    
                </div>
            } */}
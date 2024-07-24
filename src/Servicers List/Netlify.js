const Netlify = () => {

    const netlify_data = [{
        COMPUTE : [
            {
            id: 1,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Web Hosting",
            service_description: " Netlify offers hosting services for static websites and serverless applications. It can host HTML, CSS, JavaScript, and other static assets. You can deploy your site by connecting it to a Git repository (e.g., GitHub, GitLab, Bitbucket) or by using the Netlify CLI.",
        },
        {
            id: 2,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Continuous Integration (CI) and Continuous Deployment (CD)",
            service_description: "Netlify integrates with your version control system to provide automatic CI/CD pipelines. Whenever you push changes to your repository, Netlify can automatically build and deploy your site.",
        },
        {
            id: 3,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Serverless Functions",
            service_description: "Netlify Functions allow you to create and deploy serverless functions to run on the Netlify platform. These functions are often used for handling server-side logic in your web applications. ",
        },
        {
            id: 4,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Forms Handling",
            service_description: "Netlify provides a simple and secure way to handle form submissions on your site. It includes spam protection and email notifications. ",
        },
        {
            id: 5,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "CDN (Content Delivery Network)",
            service_description: "Netlify uses a global CDN to ensure fast content delivery to users around the world.",
        },
        {
            id: 6,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Asset Optimization",
            service_description: "It automatically optimizes images, minifies code, and provides features like lazy loading to improve site performance.",
        },
        {
            id: 7,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Custom Domains",
            service_description: "You can use your custom domain with Netlify-hosted sites.",
        },
        {
            id: 8,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "HTTPS",
            service_description: " Netlify provides free SSL certificates for all sites hosted on their platform, ensuring secure connections.",
        },
        {
            id: 9,
            service: "Netlify",
            service_type: "COMPUTE",
            service_name: "Branch Deploys",
            service_description: " Netlify allows you to create and preview branch deploys of your site, which can be handy for staging and testing."
        },
    ],
    STORAGE: [
        {
            id: 1,
            service: "Netlify",
            service_type: "STORAGE",
            service_name: "storage v",
            service_description: " ss allows you to create and preview branch deploys of your site, which can be handy for staging and testing."
        },
    ]
    }
    ]

    return (
        <>
    <div className="">
            {netlify_data.map((curEle, index) => {
                return <div key={index} >
                    {Object.keys(curEle).map((key, index) => {
                        return <div key={index} className="grid-display">
                            {curEle[key].map((comput, comid) => {
                                return <div key={comid} className="p-2">
                                    {/* /* <h5>{comput.service}</h5>
                                    <h5>{comput.service_type}</h5>
                                    <h2>{comput.service_name}</h2>
                                    <p>{comput.service_description}</p>  */}
                                    <div class="card ">
                                        <div class="card-header">
                                            {comput.service}
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">{comput.service_type}</h5>
                                            <p class="card-text">{comput.service_name}</p>
                                            <p class="card-text">{comput.service_description}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                </div>
            })}
        </div>
        </>
    )
}
export default Netlify;
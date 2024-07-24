const Azure = () => {

    const Azure_data = [
        {
        COMPUTE : [
            {
                id: 1,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Virtual Machines (VMs)",
                service_description: " Provides on-demand scalable virtualized computing resources, similar to Amazon EC2 in AWS."
            },
            {
                id: 2,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure App Service",
                service_description: "A fully managed platform for building, deploying, and scaling web apps. It supports .NET, Java, Node.js, Python, and more."
            },
            {
                id: 3,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Functions",
                service_description: "Serverless compute service that lets you run event-triggered code without managing infrastructure."
            },
            {
                id: 4,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Kubernetes Service (AKS)",
                service_description: "Managed Kubernetes container orchestration service for deploying, managing, and scaling containerized applications using Kubernetes"
            },
            {
                id: 5,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Batch",
                service_description: "A cloud-based job scheduling service that allows parallel and distributed computing. "
            },
            {
                id: 6,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Service Fabric",
                service_description: "A microservices platform for building and managing scalable and reliable applications. "
            },
            {
                id: 7,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Logic Apps",
                service_description: "A serverless workflow automation platform for integrating services and applications."
            },
            {
                id: 8,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Container Instances (ACI)",
                service_description: "Run containers on Azure without managing the underlying infrastructure.   "
            },
            {
                id: 9,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Virtual Machine Scale Sets",
                service_description: "Automatically deploy and manage a set of identical VMs."
            },
            {
                id: 10,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Sphere",
                service_description: "A solution for building highly-secured, connected microcontroller devices."
            },
            {
                id: 11,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure IoT Edge",
                service_description: " Extend cloud intelligence to edge devices and run AI and machine learning on IoT devices."
            },
            {
                id: 12,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Reserved Virtual Machine Instances",
                service_description: "Reserve VMs at a discounted rate for a one- or three-year term. "
            },
            {
                id: 13,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Spring Cloud",
                service_description: "A fully managed service for Spring Boot applications."
            },
            {
                id: 14,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure Quantum",
                service_description: "Access quantum computing capabilities in the cloud."
            },
            {
                id: 15,
                service: "Azure cloud ",
                service_type: "COMPUTE",
                service_name: "Azure RemoteApp",
                service_description: " Deprecated (but was used for remote application delivery)."
            },
        ],
        STORAGE : [
            {
                id: 1,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure Blobs",
                service_description: " A massively scalable object store for text and binary data. Also includes support for big data analytics through Data Lake Storage Gen2."
            },
            {
                id: 2,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure Files",
                service_description: "Managed file shares for cloud or on-premises deployments."
            },
            {
                id: 3,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure Elastic SAN",
                service_description: "A fully integrated solution that simplifies deploying, scaling, managing, and configuring a SAN in Azure."
            },
            {
                id: 4,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure Queues",
                service_description: "A messaging store for reliable messaging between application components. "
            },
            {
                id: 5,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure Tables",
                service_description: "A NoSQL store for schemaless storage of structured data."
            },
            {
                id: 6,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure managed Disks",
                service_description: "Block-level storage volumes for Azure VMs."
            },
            {
                id: 7,
                service: "Azure cloud",
                service_type: "STORAGE",
                service_name: "Azure NetApp Files",
                service_description: "Enterprise files storage, powered by NetApp: makes it easy for enterprise line-of-business (LOB) and storage professionals to migrate and run complex, file-based applications with no code change. "
            },
        ]

        }
    ]

    return (
        <>
        <div className="">
            {Azure_data.map((curEle, index) => {
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
export default Azure;
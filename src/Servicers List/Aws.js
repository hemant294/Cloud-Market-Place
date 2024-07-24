import "../Head-component/Service.css";

const Aws = () => {
    const aws_data = [{
        COMPUTE: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon Elastic Compute Cloud (EC2)",
                service_description: "This is one of the core services in AWS, allowing users to create and manage virtual machines in the cloud. EC2 instances come in various types and sizes to cater to different use cases."
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Lambda",
                service_description: "A serverless compute service that allows you to run code in response to events without managing servers. It's great for microservices and event-driven architectures.",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon Elastic Container Service (ECS)",
                service_description: " A service for deploying and managing containers using Docker. ECS is commonly used for container orchestration.",
            },
            {
                id: 4,
                service: "Amazon Elastic Kubernetes Service (EKS)",
                service_type: "COMPUTE",
                service_name: "AWS Batch",
                service_description: " A service for running batch computing workloads, which automatically provisions the required resources based on job requirements",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Fargate",
                service_description: " A serverless compute engine for containers that allows you to run containers without managing the underlying infrastructure.",
            },
            {
                id: 6,  
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS App Runner",
                service_description: "A fully managed service for building, deploying, and scaling containerized and serverless applications. ",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon Lightsail",
                service_description: "A simplified compute service designed for developers who need a low-cost, easy-to-use virtual private server (VPS) with a simplified management interface.",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Outposts",
                service_description: "This service enables you to run AWS infrastructure on-premises, extending the AWS cloud to your own data center.",
            },
            {
                id: 9,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon EC2 Auto Scaling",
                service_description: "A service that automatically adjusts the number of EC2 instances in a group based on load or other metrics.",
            },
            {
                id: 10,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon EC2 Spot Instances",
                service_description: "These are spare EC2 instances available at a discount, which are suitable for fault-tolerant and flexible workloads.",
            },
            {
                id: 11,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon EC2 Dedicated Hosts",
                service_description: "Provides physical servers for your use, which can be especially important for compliance and licensing requirements.",
            },
            {
                id: 12,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon SageMaker",
                service_description: "A service for building, training, and deploying machine learning models. While primarily for machine learning, it involves significant compute capabilities. ",
            },
            {
                id: 13,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Step Functions",
                service_description: "A serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows.",
            },
            {
                id: 14,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Glue",
                service_description: "A fully managed ETL (Extract, Transform, Load) service for data integration. ",
            },
            {
                id: 15,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Elastic Beanstalk",
                service_description: "A Platform-as-a-Service (PaaS) offering that makes it easy to deploy, manage, and scale web applications. ",
            },
            {
                id: 16,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS ParallelCluster",
                service_description: " An open-source cluster management tool that makes it easy for you to deploy and manage high-performance computing (HPC) clusters on AWS.",
            },
            {
                id: 17,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "Amazon GameLift ",
                service_description: "A service for deploying, operating, and scaling multiplayer game servers.",
            },
            {
                id: 18,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Greengrass",
                service_description: "Extends AWS to edge devices, allowing for local compute and device management in IoT applications. ",
            },
            {
                id: 19,
                service: "Amazon web Service",
                service_type: "COMPUTE",
                service_name: "AWS Snow Family",
                service_description: "These are services for transferring data into and out of the AWS cloud using secure, ruggedized devices, including Snowball and Snowmobile.",
            }],
        STORAGE: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon S3 (Simple Storage Service)",
                service_description: " A highly scalable and durable object storage service for storing and retrieving data. It's commonly used for static website hosting, data backup, and data archiving.",
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon EBS (Elastic Block Store)",
                service_description: "Provides block-level storage volumes for use with Amazon EC2 instances. It's typically used for databases and other data-intensive applications.",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon EFS (Elastic File System)",
                service_description: "A fully managed network file storage service that can be mounted on multiple Amazon EC2 instances. It's suitable for shared file storage needs. ",
            },
            {
                id: 4,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon Glacier)",
                service_description: "A low-cost storage service for archiving data, which is designed for long-term data retention and backup.",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon FSx",
                service_description: " Managed file storage services, including Amazon FSx for Windows File Server and Amazon FSx for Lustre, which provide file storage for Windows and high-performance computing workloads, respectively",
            },
            {
                id: 6,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon RDS (Relational Database Service) Storage",
                service_description: "AWS RDS provides managed database services like MySQL, PostgreSQL, and more, and each has its associated storage for database data.",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon DynamoDB",
                service_description: " A managed NoSQL database service, and it manages the storage and scaling of data automatically.                ",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon Storage Gateway",
                service_description: " A hybrid cloud storage service that connects on-premises environments to AWS storage services.",
            },
            {
                id: 9,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon CloudFront",
                service_description: "A content delivery network (CDN) service that can be used to distribute and accelerate the delivery of content, including video and web pages.",
            },
            {
                id: 10,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "AWS Storage Classes:",
                service_description: " Amazon S3 offers different storage classes to optimize cost and performance, including S3 Standard, S3 Intelligent-Tiering, S3 Glacier, S3 One Zone-IA, etc.  ",
            }, {
                id: 11,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon EBS Snapshots",
                service_description: "EBS volumes can be backed up using snapshots, which are stored in Amazon S3.",
            }, {
                id: 12,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "AWS Backup",
                service_description: "A centralized backup service that makes it easy to manage backups of your data, including EC2 instances, EBS volumes, and more.",
            },
            {
                id: 13,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon Aurora",
                service_description: "A managed relational database service that offers high-performance, high-availability, and automated backups and scaling",
            },
            {
                id: 14,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon Elasticache",
                service_description: " A managed in-memory cache service that helps improve the performance of web applications.",
            },
            {
                id: 15,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "Amazon DocumentDB",
                service_description: " A managed NoSQL database service compatible with MongoDB, including storage for database data. ",
            },
            {
                id: 16,
                service: "Amazon web Service",
                service_type: "STORAGE",
                service_name: "AWS Snow Family",
                service_description: " These are physical devices for offline data transfer, including Snowball and Snowmobile, for moving large volumes of data into and out of AWS.",
            }
        ],
        DATABASE: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon RDS",
                service_description: "Managed Relational Database Service for MySQL, PostgreSQL, MariaDB, or SQL Server.",
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon DynamoDB",
                service_description: "Fast and flexible NoSQL database with seamless scalability.",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon Redshift",
                service_description: "Fast, simple, cost-effective data warehousing.",
            },
            {
                id: 4,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon ElastiCache",
                service_description: "Web service that makes it easy to deploy, operate, and scale an in-memory cache in the Cloud.",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "AWS Database Migration Service",
                service_description: "Migrate databases with minimal downtime.",
            },
            {
                id: 6,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon Timestream",
                service_description: "Amazon Timestream is a purpose-built time-series database that offers fast, scalable, and secure analysis of time-series data at a cost-effective rate.",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon MemoryDB for Redis",
                service_description: "Redis-compatible, durable, in-memory database service for ultra-fast performance.",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon DocumentDB (with MongoDB compatibility)",
                service_description: "Amazon DocumentDB is a scalable, highly durable, and fully managed database service for operating mission-critical MongoDB workloads.",
            },
            {
                id: 9,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon Neptune",
                service_description: "A fast, reliable, and fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets.",
            },
            {
                id: 10,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon Keyspaces (for Apache Cassandra)",
                service_description: "A scalable, highly available, and managed Apache Cassandra–compatible database service.",
            },
            {
                id: 11,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon Cloud Directory",
                service_description: "Fully managed, hierarchical data store in AWS cloud",
            },
            {
                id: 12,
                service: "Amazon web Service",
                service_type: "DATABASE",
                service_name: "Amazon SimpleDB",
                service_description: "Amazon SimpleDB is a highly available NoSQL data store that offloads the work of database administration.",
            },
        ],
        CONTAINERS: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "CONTAINERS",
                service_name: "Amazon EC2",
                service_description: "Resizable compute capacity in the Cloud.",
            },
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "CONTAINERS",
                service_name: "Amazon Lightsail",
                service_description: "Virtual Private Servers made easy! Everything you need to jumpstart your project on AWS with compute, storage, and networking.",
            },
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "CONTAINERS",
                service_name: "Amazon Elastic Container Registry",
                service_description: "Store and retrieve Docker images",
            },
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "CONTAINERS",
                service_name: "Amazon EC2",
                service_description: "Resizable compute capacity in the Cloud.",
            },
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "CONTAINERS",
                service_name: "Amazon ECS Anywhere",
                service_description: "Easily run and manage containers on any customer-managed infrastructure",
            },
        ],
        SECURITY: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "Amazon Cognito",
                service_description: "Simple and Secure User Sign-Up, Sign-In, and Access Control.",
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "Amazon Inspector",
                service_description: "Automatically discover and scan workloads for vulnerabilities.",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "Amazon Macie",
                service_description: "Automated sensitive data discovery and evaluation of your Amazon S3 security posture.",
            },
            {
                id: 4,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "Amazon GuardDuty",
                service_description: "Intelligent threat detection and continuous monitoring to protect your AWS accounts and workloads.",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "AWS Key Management Service",
                service_description: "AWS Key Management Service is a managed service that provides easy encryption with administrative controls.",
            },
            {
                id: 6,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "AWS Security Hub",
                service_description: "Automate AWS security checks and centralize security alerts.",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "Amazon Detective",
                service_description: "Analyze and visualize security data to rapidly get to the root cause of potential security issues",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "SECURITY, IDENTITY, & COMPLIANCE",
                service_name: "AWS Audit Manager",
                service_description: "Continuously audit your AWS usage to simplify how you assess risk and compliance",
            },
        ],
        WEB_MOBILE: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "Amazon SNS",
                service_description: "Fast, flexible, fully managed push messaging service.",
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "Amazon API Gateway",
                service_description: "Publish, maintain, monitor, and secure APIs at any scale.",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "Amazon Cognito",
                service_description: "Simple and Secure User Sign-Up, Sign-In, and Access Control.",
            },
            {
                id: 4,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "Amazon Pinpoint",
                service_description: "Targeted Push Notifications for Mobile Apps.",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "AWS Amplify Hosting",
                service_description: "Fully managed CI/CD and hosting service for fast, secure, and reliable static websites and server-side rendered web apps.",
            },
            {
                id: 6,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "AWS Device Farm",
                service_description: "Test your iOS, Android and FireOS apps on real devices in the AWS cloud.",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "AWS AppSync",
                service_description: "Develop, secure and run GraphQL APIs at any scale.",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "FRONT-END WEB & MOBILE",
                service_name: "Amazon Location Service",
                service_description: "Securely and easily add location data to applications",
            },
        ],
        SERVERLESS: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon EC2",
                service_description: "Resizable compute capacity in the Cloud.",
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon S3",
                service_description: "Secure, durable, and scalable object storage infrastructure.",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon RDS",
                service_description: "Managed Relational Database Service for MySQL, PostgreSQL, MariaDB, or SQL Server.",
            },
            {
                id: 4,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon DynamoDB",
                service_description: "Fast and flexible NoSQL database with seamless scalability.",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon SageMaker",
                service_description: "Machine learning for every data scientist and developer.",
            },
            {
                id: 6,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "AWS Lambda",
                service_description: "Compute service that runs your code in response to events and automatically manages the compute resources.",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon Redshift",
                service_description: "Fast, simple, cost-effective data warehousing.",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon OpenSearch Service",
                service_description: "Managed service that makes it easy to perform interactive log analytics, real-time application monitoring, website search, and more.",
            },
            {
                id: 9,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon SNS",
                service_description: "Fast, flexible, fully managed push messaging service.",
            },
            {
                id: 10,
                service: "Amazon web Service",
                service_type: "SERVERLESS",
                service_name: "Amazon CloudWatch",
                service_description: "Monitoring for AWS cloud resources and applications.",
            },
        ],
        MACHINE_LEARNING: [
            {
                id: 1,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon SageMaker",
                service_description: "Machine learning for every data scientist and developer.",
            },
            {
                id: 2,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Comprehend",
                service_description: "Continuously trained and fully managed natural language processing (NLP). ",
            },
            {
                id: 3,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Comprehend Medical",
                service_description: "A natural language processing service that makes it easy to use machine learning to extract relevant medical information from unstructured text .",
            },
            {
                id: 4,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Lex",
                service_description: "Build Voice and Chat Text Chatbots.",
            },
            {
                id: 5,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Polly",
                service_description: "Turn text into lifelike speech.",
            },
            {
                id: 6,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Rekognition",
                service_description: "Deep learning-based image recognition service.",
            },
            {
                id: 7,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon SageMaker Ground Truth",
                service_description: "Build highly-accurate training datasets quickly, while reducing data labeling costs by up to 70% .",
            },
            {
                id: 8,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Transcribe",
                service_description: "Add speech-to-text capability to your applications with automatic speech recognition.",
            },
            {
                id: 9,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Translate",
                service_description: "Fast, high-quality, and affordable neural machine translation.",
            },
            {
                id: 10,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Augmented AI",
                service_description: "Amazon Augmented AI (Amazon A2I) makes it easy to build the workflows required for human review of ML predictions.",
            },
            {
                id: 11,
                service: "Amazon web Service",
                service_type: "MACHINE LEARNING",
                service_name: "Amazon Textract",
                service_description: "Textract automatically extracts text and data from scanned documents, forms, and tables.",
            },
        ]

    }
    ]

    return (<>
        <div className="">
            {aws_data.map((curEle, index) => {
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

export default Aws;
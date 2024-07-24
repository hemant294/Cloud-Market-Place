const ServiceApi = [
    {
        requirementName: "I want to host a website",
        servicetype: [
            {
                id: 1,
                users: 1000,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 2,
                users: 10000,
                // time: 8,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 3,
                users: 100000,
                // time: 12,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 4,
                users: 1000,
                // time: 12,
                security: 'MEDIUM',
                service: "Asure",
            },
            {
                id: 5,
                users: 10000,
                // time: 12,
                security: 'MEDIUM',
                service: "Asure",
            },
            {
                id: 6,
                users: 100000,
                // time: 12,
                security: 'MEDIUM',
                service: "Asure",
            },
            {
                id: 7,
                users: 100,
                security: 'LOW',
                service: "Google cloud platform"
            },
            {
                id: 8,
                users: 1000,
                security: 'LOW',
                service: "Google cloud platform"
            },
            {
                id: 9,
                users: 10000,
                security: 'LOW',
                service: "Google cloud platform"
            },
        ]
    },
    {
        requirementName: "I want a remote SQL database.",
        servicetype: [
            {
                id: 1,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 2,
                users: 100,
                // time: ,
                security: "HIGH",
                service: "Azure",
            },
        ]
    },
    {
        requirementName: "I want a dadecated hardware.",
        servicetype: [
            {
                id: 1,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 2,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 3,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 4,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 5,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
        ]
    },
    {
        requirementName: "I want a Remote NoSQL database.",
        servicetype: [
            {
                id: 1,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 2,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 3,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
            {
                id: 4,
                users: 50,
                // time: ,
                security: "HIGH",
                service: "AWS",
            },
        ]
    }
]

export default ServiceApi;

// AWS - 500000, High
// Asure - 500000, Medium
// GCP
export const courseData = [
  {
    id: 1,
    title: "Parallel & Distributed Computing Basics",
    emoji: "⚡",
    color: "from-indigo-500 to-purple-600",
    bgGlow: "rgba(99,102,241,0.15)",
    topics: [
      {
        id: "1-1",
        title: "Parallel Computing",
        icon: "🔄",
        content: {
          definition: "Involves multiple processors or computing units working simultaneously on a shared memory space.",
          keyPoints: [
            "Multiple processors/computing units work simultaneously",
            "Processors communicate through shared memory",
            "Coordination happens through shared memory space",
            "Processors can access and update data in a common memory location",
          ],
          analogy: { label: "Analogy", text: "One chef using many hands — same kitchen, same ingredients, working at once." },
          memoryTip: "PARALLEL = SHARED MEMORY = ONE chef with MANY HANDS"
        }
      },
      {
        id: "1-2",
        title: "Distributed Computing",
        icon: "🌐",
        content: {
          definition: "Involves multiple processors or computing nodes connected by a communication network, each with its own local memory.",
          keyPoints: [
            "Multiple processors/computing nodes",
            "Connected by a communication network (internet, intranet)",
            "Each processor has its own local memory",
            "Communication involves passing messages between nodes",
          ],
          analogy: { label: "Analogy", text: "Many chefs in different kitchens — they call each other on the phone to coordinate." },
          memoryTip: "DISTRIBUTED = SEPARATE MEMORY = MANY chefs in DIFFERENT KITCHENS"
        }
      },
      {
        id: "1-3",
        title: "Parallel vs Distributed Comparison",
        icon: "⚖️",
        content: {
          definition: "Key differences between parallel and distributed computing architectures.",
          table: {
            headers: ["Aspect", "Parallel", "Distributed"],
            rows: [
              ["Network", "No", "Yes"],
              ["Machines", "One", "Many"],
              ["Failure Impact", "High", "Low"],
              ["Speed", "Very High", "Moderate"],
              ["Scalability", "Limited", "Massive"],
            ]
          },
          memoryTip: "PARALLEL = 1 machine, fast, no network. DISTRIBUTED = many machines, scalable, networked."
        }
      }
    ]
  },
  {
    id: 2,
    title: "History & Definition of Cloud Computing",
    emoji: "☁️",
    color: "from-sky-500 to-blue-600",
    bgGlow: "rgba(14,165,233,0.15)",
    topics: [
      {
        id: "2-1",
        title: "Brief History of Cloud Computing",
        icon: "📅",
        content: {
          definition: "Cloud computing traces its roots back over 60 years to the 1950s mainframe era.",
          timeline: [
            { year: "1950s", event: "Organizations used large, expensive mainframe computers. Small companies couldn't afford them." },
            { year: "1955", event: "John McCarthy (who coined 'artificial intelligence') proposed time-sharing — sharing computing time among multiple users to maximize expensive resources." },
            { year: "1969", event: "J.C.R. Licklider's idea led to ARPANET — the predecessor of the Internet. First network allowing digital resources to be shared between non-collocated computers." },
            { year: "1961", event: "McCarthy suggested at MIT that computing can be sold like a utility — like water or electricity." },
            { year: "1999", event: "Salesforce.com delivered CRM applications to enterprises over the Internet — computing-as-utility became real." },
            { year: "2002", event: "Amazon started Amazon Web Services (storage, computation). EC2 launched in 2006 as truly commercial service." },
            { year: "2009", event: "Google Apps and Microsoft Azure launched. All major players joined the cloud." },
            { year: "2025", event: "Public cloud spending exceeds $720 billion, led by AI infrastructure and enterprise digital transformation." },
          ],
          memoryTip: "1950s → 1955 McCarthy time-sharing → 1969 ARPANET → 1999 Salesforce → 2002 AWS → 2009 Google/Azure"
        }
      },
      {
        id: "2-2",
        title: "What is Cloud Computing?",
        icon: "💡",
        content: {
          definition: "The delivery of computing services — servers, storage, databases, networking, software, analytics, and intelligence — over the Internet on a pay-as-you-go basis.",
          keyPoints: [
            "Delivery of computing services over the Internet ('the cloud')",
            "Includes servers, storage, databases, networking, software, analytics, intelligence",
            "Pay-as-you-go pricing model",
            "Companies avoid upfront costs and complexity of owning IT infrastructure",
          ],
          memoryTip: "Cloud = IT services over Internet + Pay-per-use"
        }
      },
      {
        id: "2-3",
        title: "Cloud vs Traditional Client-Server",
        icon: "🖥️",
        content: {
          definition: "The cloud still uses client-server communication but adds critical enhancements.",
          keyPoints: [
            "Traditional: Clients make requests, servers respond — organization-owned servers on-premises",
            "Cloud STILL uses client-server but ADDS: hidden physical servers, virtualization, elastic scaling, service models (IaaS/PaaS/SaaS)",
          ],
          comparisons: [
            { aspect: "Resource Location", traditional: "Organization-owned on-premises servers", cloud: "Hosted by third-party vendors; users don't own physical infrastructure" },
            { aspect: "Scalability", traditional: "Requires new hardware investment, time-consuming", cloud: "On-demand scalability, adjust resources instantly" },
            { aspect: "Accessibility", traditional: "Limited to local networks or VPNs", cloud: "Accessible over internet from anywhere, any device" },
            { aspect: "Cost Model", traditional: "Upfront capital for hardware, software, data centers, IT staff", cloud: "Pay-as-you-go / subscription, no large upfront costs" },
            { aspect: "Maintenance", traditional: "Organization manages maintenance, updates, security", cloud: "Provider handles infrastructure, maintenance, updates, security" },
          ],
          memoryTip: "Cloud = Traditional client-server + virtualization + elastic scaling + service models"
        }
      }
    ]
  },
  {
    id: 3,
    title: "NIST Cloud Model & Enabling Technologies",
    emoji: "🏗️",
    color: "from-emerald-500 to-teal-600",
    bgGlow: "rgba(16,185,129,0.15)",
    topics: [
      {
        id: "3-1",
        title: "NIST Definition of Cloud Computing",
        icon: "📋",
        content: {
          definition: "According to NIST: Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction.",
          keyPoints: [
            "Ubiquitous = accessible everywhere",
            "Convenient = easy to use",
            "On-demand = available when needed",
            "Shared pool = resources pooled together",
            "Configurable = customizable resources",
            "Rapidly provisioned and released",
            "Minimal management effort",
          ],
          memoryTip: "NIST = National Institute of Standards and Technologies"
        }
      },
      {
        id: "3-2",
        title: "5 Essential Characteristics (NIST)",
        icon: "⭐",
        content: {
          definition: "The NIST cloud model is composed of five essential characteristics.",
          characteristics: [
            { name: "1. Broad Network Access", icon: "🌍", desc: "Cloud services accessible over the network using standard mechanisms from various devices (laptops, tablets, smartphones). Supports flexibility and mobility." },
            { name: "2. On-Demand Self-Service", icon: "🛒", desc: "Users can provision computing resources (server time, network storage) automatically without requiring human interaction with the service provider." },
            { name: "3. Resource Pooling", icon: "🏊", desc: "Service multiple customers from the same physical resources by securely separating on a logical level. Resources appear unlimited to consumers." },
            { name: "4. Rapid Elasticity", icon: "🎯", desc: "Resources are provisioned and released on-demand and/or automatically based on triggers. Your application always has exactly the capacity it needs." },
            { name: "5. Measured Service", icon: "📊", desc: "Resource usage is monitored, measured, and reported (billed) transparently based on utilization. Pay per use." },
          ],
          memoryTip: "BORSM: Broad-access, On-demand, Resource-pooling, Scalable-elasticity, Measured-service"
        }
      },
      {
        id: "3-3",
        title: "Cloud Enabling Technologies",
        icon: "🔧",
        content: {
          definition: "Five key technologies that make cloud computing possible.",
          technologies: [
            { name: "Broadband Networks & Internet Architecture", icon: "🌐", desc: "All cloud resources must be connected to a network. The internet enables remote provisioning of IT resources. ISPs connect consumers to cloud providers through tiered networks (Tier 1 international, Tier 2 regional, Tier 3 local)." },
            { name: "Virtualization", icon: "💻", desc: "Process of converting a physical IT resource into a virtual IT resource. Physical server → virtual server (VM), physical storage → virtual storage, physical network → virtual network." },
            { name: "SOA (Service-Oriented Architecture)", icon: "🧩", desc: "Software design approach where applications are built as collections of loosely coupled, reusable services. Each service performs a specific business function and communicates via standardized interfaces (SOAP, REST APIs)." },
            { name: "Web Services", icon: "🌍", desc: "Self-describing, self-contained software modules available via a network. They know what functions they can perform and what inputs they require. Primary technology for implementing SOA." },
            { name: "Multitenant Technology", icon: "🏢", desc: "A single instance of software serves multiple tenants (users/groups). Each tenant's data is isolated despite sharing the same physical infrastructure. Like an apartment building — private unit, shared building infrastructure." },
          ],
          memoryTip: "BVSWM: Broadband, Virtualization, SOA, Web Services, Multitenant"
        }
      },
      {
        id: "3-4",
        title: "SOA Key Features",
        icon: "🧩",
        content: {
          definition: "Service-Oriented Architecture (SOA) is a software design approach where applications are built as a collection of loosely coupled, reusable services.",
          keyPoints: [
            "Loose Coupling: Services are independent and can be changed without affecting others",
            "Reusability: Same service can be reused across multiple applications",
            "Interoperability: Services communicate regardless of programming language or platform",
            "Standard Interfaces: Services expose well-defined contracts (SOAP, REST APIs)",
          ],
          example: "Online Parking Ticket System: Maps (Google Maps) + Payments (existing gateway) + User Authentication (Facebook/Gmail) — each is an independent reusable service.",
          memoryTip: "SOA = LRIS: Loose-coupling, Reusability, Interoperability, Standard-interfaces"
        }
      },
      {
        id: "3-5",
        title: "Web 1.0, 2.0, and 3.0",
        icon: "🕸️",
        content: {
          definition: "The evolution of the web closely parallels cloud computing's growth.",
          versions: [
            { version: "Web 1.0", icon: "📄", desc: "Static Web — early web with primarily static HTML pages and little interactivity. Read-only web." },
            { version: "Web 2.0", icon: "👥", desc: "Dynamic, user-generated content and interactive experiences. Heavily reliant on cloud computing for scalability. YouTube, Facebook, Instagram rely on cloud infrastructure for millions of simultaneous users." },
            { version: "Web 3.0", icon: "🤖", desc: "Semantic Web — intelligent, decentralized, user-centric internet where machines understand information like humans. Integrates blockchain, AI, and decentralized applications (dApps)." },
          ],
          memoryTip: "1.0 = Static → 2.0 = Interactive/Social → 3.0 = Semantic/Decentralized/AI"
        }
      }
    ]
  },
  {
    id: 4,
    title: "Advantages & Disadvantages of Cloud",
    emoji: "⚖️",
    color: "from-amber-500 to-orange-600",
    bgGlow: "rgba(245,158,11,0.15)",
    topics: [
      {
        id: "4-1",
        title: "Advantages of Cloud Computing",
        icon: "✅",
        content: {
          definition: "Six major advantages that make cloud computing attractive to organizations.",
          advantages: [
            { name: "Cost", icon: "💰", desc: "Eliminates capital expense of buying hardware/software and running on-site datacenters. No racks of servers, electricity for cooling, or IT experts to manage infrastructure." },
            { name: "Speed", icon: "⚡", desc: "Services are self-service and on-demand. Vast computing resources can be provisioned in minutes with a few clicks. Reduces pressure on capacity planning." },
            { name: "Global Scale", icon: "🌍", desc: "Ability to scale elastically — deliver the right amount of IT resources (computing power, storage, bandwidth) when needed, from the right geographic location." },
            { name: "Productivity", icon: "📈", desc: "Removes 'racking and stacking' — hardware setup, software patching, time-consuming IT chores. IT teams can focus on important business goals." },
            { name: "Reliability", icon: "🛡️", desc: "Data backup, disaster recovery, and business continuity easier and cheaper. Data can be mirrored at multiple redundant sites on the cloud provider's network." },
            { name: "Security", icon: "🔒", desc: "Cloud providers offer broad sets of policies, technologies, and controls that strengthen security posture overall." },
          ],
          memoryTip: "CSGPRS: Cost, Speed, Global-scale, Productivity, Reliability, Security"
        }
      },
      {
        id: "4-2",
        title: "Disadvantages of Cloud Computing",
        icon: "⚠️",
        content: {
          definition: "Key limitations and risks of cloud computing that organizations must consider.",
          disadvantages: [
            { name: "Not Always Cheaper", icon: "💸", desc: "Cloud is not necessarily cheaper — just as renting is not always cheaper than buying. Predictable workloads may be more economical on-premises." },
            { name: "Internet Dependency", icon: "📡", desc: "You can only access your applications if you have an internet connection. No internet = no access to your cloud services." },
            { name: "Security Concerns", icon: "🔓", desc: "Even large, advanced companies can be hacked. Tesla's Amazon cloud account was hacked to mine Monero cryptocurrency." },
            { name: "Data Sovereignty", icon: "🗺️", desc: "Data is subject to laws of the country where it is located. European companies worry about US data centers — US law enforcement could access data stored there." },
            { name: "Vendor Lock-in", icon: "🔐", desc: "Companies may be reluctant to host sensitive data in a service also used by rivals. Switching providers can be complex and costly." },
            { name: "Latency", icon: "⏱️", desc: "If the application comes from a data center on the other side of the planet, it may feel sluggish compared to a local connection." },
          ],
          casestudies: [
            { title: "Tesla Crypto Mining Hack", desc: "An unidentified hacker broke into Tesla's Amazon cloud account and used it to mine Monero cryptocurrency." },
            { title: "Capital One Data Breach (2019)", desc: "Former AWS employee exploited a misconfigured firewall to access data of 100+ million customers. Estimated cost: ~$300 million." },
            { title: "Azure Cosmos DB 'ChaosDB' (2021)", desc: "Vulnerability allowed unauthorized access to other users' databases — risk from shared cloud architecture." },
            { title: "AWS S3 Outage (2017)", desc: "Widespread outage affected a large number of websites and services relying on AWS for storage." },
            { title: "Microsoft Azure Outage (2020)", desc: "Significant Azure outage caused disruptions for users worldwide, highlighting cloud service interruption impact." },
          ],
          memoryTip: "NISSVL: Not-cheaper, Internet-dependent, Security, Sovereignty, Vendor-lock, Latency"
        }
      },
      {
        id: "4-3",
        title: "Cloud Regions & Availability Zones",
        icon: "🗺️",
        content: {
          definition: "Cloud services are operated from giant datacenters divided into regions and availability zones (AZs).",
          keyPoints: [
            "Region = separate geographic area (e.g., EU London, US West Oregon)",
            "Each region subdivides into Availability Zones (AZs)",
            "AZ = one or more datacenters far enough apart that a single disaster won't take both offline",
            "AZs are close enough together for rapid failover for business continuity",
            "Each AZ has multiple internet connections and power connections to multiple grids",
          ],
          tiers: [
            { tier: "Tier 1", desc: "Large-scale international cloud providers with massive interconnected global networks" },
            { tier: "Tier 2", desc: "Large regional providers connected to Tier 1" },
            { tier: "Tier 3", desc: "Local ISPs connected to Tier 2" },
          ],
          memoryTip: "Region > Availability Zone > Datacenter. AZs = isolated but close = high availability"
        }
      }
    ]
  },
  {
    id: 5,
    title: "Cloud Deployment Models",
    emoji: "🏛️",
    color: "from-rose-500 to-pink-600",
    bgGlow: "rgba(244,63,94,0.15)",
    topics: [
      {
        id: "5-1",
        title: "4 Deployment Models Overview",
        icon: "🗂️",
        content: {
          definition: "There are four cloud deployment models, each defined by where the deployment infrastructure is located.",
          models: ["Public Cloud", "Private Cloud", "Community Cloud", "Hybrid Cloud"],
          memoryTip: "PPCH: Public, Private, Community, Hybrid"
        }
      },
      {
        id: "5-2",
        title: "Public Cloud",
        icon: "🌐",
        content: {
          definition: "Available to the general public. Data created and stored on third-party servers.",
          keyPoints: [
            "Available to the general public",
            "Data stored on third-party servers",
            "Server infrastructure belongs to service providers",
            "No need for user companies to buy/maintain hardware",
            "Resources offered free or pay-per-use via the Internet",
            "Users can scale resources as required",
          ],
          benefits: ["Minimal Investment — pay-per-use, no large upfront cost", "High scalability — easily extend capacity", "24/7 uptime — extensive server network"],
          limitations: ["Data Security and Privacy Concerns — accessible to all, vulnerable to attacks", "Reliability Issues — shared server can lead to outages"],
          example: "2016 Salesforce CRM disruption caused a storage collapse",
          memoryTip: "Public = Available to ALL, pay-per-use, scalable but security concerns"
        }
      },
      {
        id: "5-3",
        title: "Private Cloud",
        icon: "🔒",
        content: {
          definition: "Only one specific company owns the private cloud (also called internal or corporate model). Architecturally similar to public cloud.",
          keyPoints: [
            "Only one specific company owns it",
            "Also called internal or corporate cloud",
            "Server can be hosted externally or on-premises",
            "Maintained on a designated private network",
            "Software and hardware intended for use only by the owner company",
            "Clearly defined scope of people have access",
          ],
          benefits: ["High security, privacy and reliability — only authorized persons access resources", "Companies can customize infrastructures to their requirements"],
          limitations: ["High cost — considerable expense on hardware, software, staff training", "Not suitable for small companies"],
          example: "Providers like Amazon, IBM, Cisco, Dell, Red Hat also offer private cloud solutions",
          memoryTip: "Private = ONE company, secure, expensive, customizable"
        }
      },
      {
        id: "5-4",
        title: "Community Cloud",
        icon: "👥",
        content: {
          definition: "Several organizations with similar backgrounds share the infrastructure. Like private cloud but for a group of organizations.",
          keyPoints: [
            "Several organizations with similar backgrounds share infrastructure",
            "Organizations have uniform security, privacy, and performance requirements",
            "Multi-tenant data center architecture",
            "Costs are shared by all users",
            "Enhances efficiency for joint projects",
          ],
          benefits: ["Smaller Investment — cheaper than private cloud", "Ease of data sharing and collaboration"],
          limitations: ["Higher cost than public cloud", "Shared resources — fixed bandwidth/storage challenges", "Not very popular — recently introduced model"],
          memoryTip: "Community = SHARED among similar orgs, cost split, collaborative"
        }
      },
      {
        id: "5-5",
        title: "Hybrid Cloud",
        icon: "🔀",
        content: {
          definition: "A combination of two or more cloud architectures (public + private, or any combination).",
          keyPoints: [
            "Combination of two or more cloud architectures",
            "Mission-critical workloads on secure private cloud",
            "Less sensitive workloads on public cloud",
            "Safeguards strategically important assets",
            "Cost- and resource-effective approach",
          ],
          benefits: ["Best of both worlds — security of private + scale of public", "Cost-efficient for varying workloads", "High flexibility and scalability"],
          limitations: ["Requires IT proficiency to manage", "Complexity of managing two environments"],
          memoryTip: "Hybrid = MIX of public + private, best of both, most flexible"
        }
      },
      {
        id: "5-6",
        title: "Deployment Models Comparison",
        icon: "📊",
        content: {
          definition: "Side-by-side comparison of all four cloud deployment models.",
          table: {
            headers: ["Aspect", "Public", "Private", "Community", "Hybrid"],
            rows: [
              ["Ease of Setup", "Easy", "Requires IT", "Requires IT", "Requires IT"],
              ["Data Security", "Low", "High", "High", "High"],
              ["Data Control", "Little to none", "High", "High", "High"],
              ["Reliability", "Low", "High", "High", "High"],
              ["Scalability", "Very High", "High", "Fixed capacity", "High"],
              ["Cost", "Cheapest", "Most expensive", "Shared cost", "Cheaper than private"],
              ["In-house Hardware", "No", "Depends", "Depends", "Depends"],
            ]
          },
          memoryTip: "Public=Cheap&Easy, Private=Secure&Expensive, Community=Shared, Hybrid=Flexible"
        }
      }
    ]
  },
  {
    id: 6,
    title: "Cloud Service Models (IaaS, PaaS, SaaS, FaaS)",
    emoji: "🔧",
    color: "from-violet-500 to-purple-600",
    bgGlow: "rgba(139,92,246,0.15)",
    topics: [
      {
        id: "6-1",
        title: "Service Models Overview",
        icon: "🗂️",
        content: {
          definition: "IaaS, PaaS, SaaS, and FaaS are the major cloud service models. 'As-a-service' refers to how IT assets are consumed — rented rather than owned.",
          keyPoints: [
            "IaaS = Infrastructure as a Service",
            "PaaS = Platform as a Service",
            "SaaS = Software as a Service",
            "FaaS = Function as a Service (Serverless)",
            "These models are NOT mutually exclusive — many organizations use all three",
            "In traditional IT: organizations purchase, install, manage assets in on-premises data centers",
            "In cloud: provider owns and manages assets; customer pays per subscription/use",
          ],
          memoryTip: "IPSF: Infrastructure, Platform, Software, Function"
        }
      },
      {
        id: "6-2",
        title: "IaaS — Infrastructure as a Service",
        icon: "🖥️",
        content: {
          definition: "On-demand access to cloud-hosted computing infrastructure — servers, storage, networking — that customers can provision and configure like on-premises hardware.",
          keyPoints: [
            "On-demand access to servers, storage, networking resources",
            "Cloud provider hosts and manages hardware in its own data centers",
            "Customers use hardware via internet, pay subscription or pay-as-you-go",
            "Access via graphical dashboard or programmatic APIs",
            "Dynamically choose CPU, memory, storage configuration",
            "Users manage OS and everything above; provider manages hardware",
          ],
          examples: ["Amazon EC2 (Elastic Compute Cloud)", "Microsoft Azure Virtual Machines", "Google Compute Engine (GCE)"],
          usecase: "Best for: Organizations with IT expertise to configure/operate remote servers. Maximum flexibility for custom-built apps.",
          memoryTip: "IaaS = HARDWARE as a service. YOU manage OS and up. Provider manages hardware."
        }
      },
      {
        id: "6-3",
        title: "PaaS — Platform as a Service",
        icon: "🧱",
        content: {
          definition: "A cloud-based platform for developing, running, and managing applications. The cloud provider hosts, manages, and maintains all hardware and software in the platform.",
          keyPoints: [
            "Cloud-based platform for developing, running, managing applications",
            "Provider hosts, manages, maintains ALL hardware and software",
            "A programming platform for developers",
            "Users access via GUI where DevOps teams collaborate across entire app lifecycle",
            "Covers: coding, integration, testing, delivery, deployment, feedback",
            "Often built on top of IaaS to reduce system administration",
          ],
          examples: ["AWS Elastic Beanstalk", "Google App Engine", "Microsoft Windows Azure", "Red Hat OpenShift on IBM Cloud"],
          usecase: "Best for: Organizations with development teams wanting to focus on app development instead of infrastructure.",
          memoryTip: "PaaS = PLATFORM for developers. YOU manage app and data. Provider manages OS and below."
        }
      },
      {
        id: "6-4",
        title: "SaaS — Software as a Service",
        icon: "📱",
        content: {
          definition: "Cloud-hosted, ready-to-use application software. Users pay a monthly or annual fee to use a complete application via web browser, desktop client, or mobile app.",
          keyPoints: [
            "Cloud-hosted, ready-to-use application software",
            "Users pay monthly or annual fee",
            "Accessed via web browser, desktop client, or mobile app",
            "SaaS vendor hosts and manages application AND all infrastructure",
            "Today, almost everyone uses some form of SaaS daily",
          ],
          examples: ["Gmail / Google Workspace", "Microsoft 365", "Dropbox / OneDrive", "Salesforce CRM", "Netflix", "Social media platforms"],
          usecase: "Best for: Organizations without a development team that need ready out-of-the-box solutions.",
          memoryTip: "SaaS = COMPLETE SOFTWARE. YOU just use it. Provider manages EVERYTHING."
        }
      },
      {
        id: "6-5",
        title: "FaaS — Function as a Service (Serverless)",
        icon: "⚡",
        content: {
          definition: "A cloud computing service that allows developers to deploy individual functions that run in response to events or triggers. Abstracts away ALL server management.",
          keyPoints: [
            "Deploy individual functions, not entire applications",
            "Functions run in response to events or triggers",
            "Abstracts away ALL server management",
            "Developers focus solely on writing code for specific functions",
            "Highly efficient for event-driven, demand-scaled tasks",
            "Also known as Serverless Computing",
          ],
          examples: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
          scenario: "Example: User uploads image → Lambda function automatically generates thumbnail — no dedicated server needed.",
          memoryTip: "FaaS = FUNCTIONS triggered by events. No server management. AWS Lambda = most famous."
        }
      },
      {
        id: "6-6",
        title: "Service Models Comparison",
        icon: "📊",
        content: {
          definition: "Who manages what in each service model — from maximum control (IaaS) to minimum management (SaaS).",
          stack: [
            { layer: "Application", iaas: "Customer", paas: "Customer", saas: "Provider" },
            { layer: "Data", iaas: "Customer", paas: "Customer", saas: "Provider" },
            { layer: "Runtime", iaas: "Customer", paas: "Provider", saas: "Provider" },
            { layer: "Middleware", iaas: "Customer", paas: "Provider", saas: "Provider" },
            { layer: "OS", iaas: "Customer", paas: "Provider", saas: "Provider" },
            { layer: "Virtualization", iaas: "Provider", paas: "Provider", saas: "Provider" },
            { layer: "Servers", iaas: "Provider", paas: "Provider", saas: "Provider" },
            { layer: "Storage", iaas: "Provider", paas: "Provider", saas: "Provider" },
            { layer: "Networking", iaas: "Provider", paas: "Provider", saas: "Provider" },
          ],
          market2023: [
            { model: "SaaS", share: "55.8%", note: "Dominant model" },
            { model: "IaaS", share: "$150.3B", note: "31% YoY growth" },
            { model: "PaaS", share: "$139B", note: "24% YoY growth" },
          ],
          memoryTip: "IaaS=most control/effort, PaaS=middle ground, SaaS=least control/effort"
        }
      }
    ]
  },
  {
    id: 7,
    title: "SLIs, SLOs, and SLAs",
    emoji: "📏",
    color: "from-cyan-500 to-blue-600",
    bgGlow: "rgba(6,182,212,0.15)",
    topics: [
      {
        id: "7-1",
        title: "SLI, SLO, SLA Definitions",
        icon: "📖",
        content: {
          definition: "Three key metrics used to measure and guarantee reliability and performance in distributed systems.",
          definitions: [
            {
              acronym: "SLI",
              full: "Service Level Indicator",
              arrow: "What you are measuring",
              color: "from-cyan-500 to-teal-500",
              desc: "Parameters that indicate successful transactions/requests served by the service over predefined intervals. Allows measuring performance and availability.",
              examples: ["Availability/Uptime of the service", "Number of successful transactions/requests", "Consistency and durability of data"],
            },
            {
              acronym: "SLO",
              full: "Service Level Objective",
              arrow: "How good should it be?",
              color: "from-blue-500 to-indigo-500",
              desc: "Defines the acceptable downtime/performance target. Different components can have different SLOs. Start with low SLO and gradually increase.",
              examples: ["Disk durability should be 99.9%", "Service availability should be 99.95%", "Service should successfully serve 99.999% requests"],
            },
            {
              acronym: "SLA",
              full: "Service Level Agreement",
              arrow: "SLO + Consequences",
              color: "from-violet-500 to-purple-500",
              desc: "Defines the penalty the service provider pays in an event of service unavailability. Provider must clearly define failure factors (domain of responsibility).",
              examples: ["Partial refund of service subscription fee", "Additional subscription time added for free"],
            },
          ],
          memoryTip: "SLI = MEASURE it. SLO = TARGET for it. SLA = CONTRACT with CONSEQUENCES."
        }
      },
      {
        id: "7-2",
        title: "How Many Nines? (Uptime Table)",
        icon: "9️⃣",
        content: {
          definition: "The 'nines' system measures uptime percentage. Each additional nine exponentially reduces allowable downtime.",
          table: {
            headers: ["Nines", "Uptime %", "Downtime/Month"],
            rows: [
              ["1 nine", "90%", "~3 days"],
              ["2 nines", "99%", "~7 hours"],
              ["3 nines", "99.9%", "~43 minutes"],
              ["4 nines", "99.99%", "~4 minutes"],
              ["5 nines", "99.999%", "~25 seconds"],
            ]
          },
          keyPoints: [
            "Microsoft Azure, Amazon EC2, Google GCE promise 99.95% uptime (22 minutes downtime/month)",
            "GCE doesn't count outages shorter than 5 minutes",
            "1-minute sampling frequency is typical",
            "More nines = higher reliability = higher cost and complexity",
          ],
          memoryTip: "99% = 7hr/month. 99.9% = 43min. 99.99% = 4min. 99.999% = 25sec/month"
        }
      },
      {
        id: "7-3",
        title: "Reading an SLA",
        icon: "📜",
        content: {
          definition: "When reading an SLA (e.g., 'I promise 99% uptime'), three key questions must be answered.",
          questions: [
            { q: "Sampling Frequency", desc: "How often do you check if your system is up? If you check once per hour, you might miss short outages." },
            { q: "Domain of Responsibility", desc: "What does it mean to be 'up'? What components are covered? What exceptions apply?" },
            { q: "Measurement Interval", desc: "Over what time interval do you promise 99% uptime? Per day? Per month? Per year?" },
          ],
          implications: {
            forProvider: ["They rarely expect hardware or software to fail", "When it fails, they think they can fix it quickly"],
            forYou: ["Multiple VMs required", "VMs over multiple failure domains", "Monitoring setup", "Tolerance of planned outages", "Automatic machine provisioning"],
          },
          memoryTip: "SLA reading: Sampling-frequency + Domain-of-responsibility + Measurement-interval"
        }
      },
      {
        id: "7-4",
        title: "Availability Formula & Problems",
        icon: "🧮",
        content: {
          definition: "Availability = (1 − Total Down Time / Total Agreed Expected Uptime) × 100",
          formulaBreakdown: [
            "Agreed Service Time = expected operational time (e.g., 6 AM to midnight = 18 hrs/day = 1,080 min/day)",
            "Downtime = time during agreed service time when service is unavailable",
            "Result expressed as a percentage",
          ],
          exampleProblem: {
            title: "Sample Problem",
            problem: "Cloud guarantees 99% availability. Application runs 12 hours/day. At month end, there was 10.75 hours of outage. Did the provider violate the SLA?",
            solution: "Total agreed time = 12 hrs/day × 30 days = 360 hrs. Allowed downtime = 360 × 0.01 = 3.6 hrs. Actual downtime = 10.75 hrs. Since 10.75 > 3.6 hrs → YES, the provider VIOLATED the SLA.",
          },
          memoryTip: "Availability = (1 - downtime/agreed_time) × 100. Compare actual downtime to allowed downtime."
        }
      },
      {
        id: "7-5",
        title: "Setting Your SLO",
        icon: "🎯",
        content: {
          definition: "Best practices for setting Service Level Objectives for your own applications.",
          keyPoints: [
            "SLO ≠ SLA — your SLO is your internal target, not your commitment to customers",
            "Different applications have different requirements — know your application",
            "Be conservative at first, gain experience, then adjust",
            "SLO must be greater than your reaction time — do you have 24/7 support?",
            "Know the SLA of your dependencies (cloud provider, third-party services)",
            "Bound your responsibility — contrast to end-to-end principal",
          ],
          exceeding: [
            "You should try to exceed your SLO — gives operational headroom",
            "Don't stifle innovation — change can be good",
            "Don't set implicit SLA (undocumented promises)",
            "Exceeding your SLO? Schedule a planned outage — shows it's intentional",
          ],
          conclusion: ["Don't confuse SLI, SLO, and SLA", "If you measure it, you can improve it", "Under-promise, over-deliver", "Nothing beats experience"],
          memoryTip: "SLO: Start conservative, know your app, exceed it intentionally, under-promise over-deliver"
        }
      }
    ]
  },
  {
    id: 8,
    title: "SLA Types & Cloud SLA Details",
    emoji: "📄",
    color: "from-teal-500 to-green-600",
    bgGlow: "rgba(20,184,166,0.15)",
    topics: [
      {
        id: "8-1",
        title: "3 Types of SLA",
        icon: "📝",
        content: {
          definition: "There are three main types of Service Level Agreements, each serving different purposes.",
          types: [
            {
              name: "1. Service Level SLA",
              icon: "🔧",
              desc: "Centered around a particular service that is the same for all customers. Describes service level expectations uniformly.",
              example: "A cloud provider guarantees 99.9% uptime for its virtual machines — same for ALL customers.",
            },
            {
              name: "2. Customer Level SLA",
              icon: "👤",
              desc: "Tailored to a specific customer or group of customers. Outlines all services agreed upon by the provider and the customer. Often at a premium price.",
              example: "A managed IT service provider commits to resolving high-priority issues for a corporate client within 4 hours.",
            },
            {
              name: "3. Multilevel SLA",
              icon: "🏗️",
              desc: "A hierarchical SLA structure that applies at different levels within an organization (corporate, customer, and service levels). Addresses multiple aspects.",
              example: "Corporate SLA for all of org + Customer SLA for specific client + Service SLA for specific product.",
            },
          ],
          analogy: "Beverages provider: Customer A gets custom tea/coffee/juice schedule (Customer SLA, premium price) vs. public juice stand at fixed prices for all (Service SLA).",
          memoryTip: "3 SLA types: Service (same for all) → Customer (tailored, premium) → Multilevel (hierarchical)"
        }
      },
      {
        id: "8-2",
        title: "5 Things to Look for in a Cloud SLA",
        icon: "🔍",
        content: {
          definition: "When evaluating a cloud service-level agreement, five critical elements must be checked.",
          items: [
            { num: "1", name: "Availability", icon: "⏱️", desc: "Biggest QoS concept. Check the provider's promised availability. May vary by time frame (e.g., 99.99% during business hours). Should include plan for unexpected downtime, alerting users, and maintenance updates." },
            { num: "2", name: "Data Ownership", icon: "👑", desc: "Who owns your data in the cloud? SLA should explicitly state all ownership rights stay with the user. If the provider doesn't explicitly state data ownership policies, you can't guarantee safety of your information." },
            { num: "3", name: "Cloud Hardware & Software", icon: "💻", desc: "Provider should outline the hardware (servers, devices) and software the cloud services rely on. Knowing specs helps understand your cloud environment's construction." },
            { num: "4", name: "Disaster Recovery & Backup", icon: "🛡️", desc: "Provider should have a plan to prevent total data loss in a disaster. Should describe backup solutions in detail. You must know whether you need to set up backups yourself." },
            { num: "5", name: "Customer Responsibilities", icon: "📋", desc: "SLA is a contract outlining responsibilities for BOTH parties. Know what you are liable for. Understand what provider manages vs. what you manage as customer." },
          ],
          memoryTip: "ADHDC: Availability, Data-ownership, Hardware/software, Disaster-recovery, Customer-responsibilities"
        }
      },
      {
        id: "8-3",
        title: "SLA Revision & Real-World Examples",
        icon: "🔄",
        content: {
          definition: "SLAs should be regularly reviewed and revised as business needs change.",
          keyPoints: [
            "Most SLAs are negotiated for current needs, but businesses change dramatically over time",
            "Solid cloud SLA outlines intervals where the contract is reviewed and potentially adjusted",
            "Some vendors build in notification workflows that trigger when SLA is close to being breached",
            "Notifications allow new negotiations based on changing scale (uptime, usage exceeding criteria)",
          ],
          realWorldSLAs: [
            { provider: "AWS", desc: "EC2: 99.99%, S3: 99.9%, varies by service" },
            { provider: "Azure", desc: "Azure VMs: 99.95% (single instance with premium storage)" },
            { provider: "Google Cloud", desc: "GCE: 99.99% for multi-region, 99.5% for single zone" },
          ],
          contractNote: "SLA: contract or marketing? Few people read SLA in detail until failure happens. Credits likely won't cover actual business losses.",
          memoryTip: "Review SLAs regularly — businesses change. Know what BOTH parties are responsible for."
        }
      },
      {
        id: "8-4",
        title: "SLA Calculation — Advanced Problem",
        icon: "🧮",
        content: {
          definition: "Full SLA calculation with service credits.",
          problem: {
            setup: "Company X uses cloud service from provider P with the following terms:",
            params: [
              "Availability guarantee: 99.95% over the service period",
              "Service period: 30 days",
              "Maximum service hours per day: 12 hours",
              "Cost: $50/day",
            ],
            credits: [
              { level: "< 99.95%", credit: "10% credit" },
              { level: "< 99%", credit: "25% credit" },
            ],
            outages: "Five outages occurred: 5 hrs, 30 mins, 1 hr 30 mins, 15 mins, 2 hrs 25 mins",
            solution: [
              "Total agreed service time = 12 hrs/day × 30 days = 360 hrs",
              "Total downtime = 5 + 0.5 + 1.5 + 0.25 + 2.4167 = 9.667 hrs",
              "Actual availability = (360 − 9.667) / 360 × 100 = 97.32%",
              "97.32% < 99% → 25% service credit applies",
              "Total cost without credit = $50 × 30 = $1,500",
              "Credit = 25% × $1,500 = $375",
              "Effective cost payable = $1,500 − $375 = $1,125",
            ],
          },
          memoryTip: "Availability = (agreed_time − downtime) / agreed_time × 100. Then find credit tier."
        }
      }
    ]
  },
  {
    id: 9,
    title: "Practical: LAMP Stack & Linux RDP",
    emoji: "🖥️",
    color: "from-orange-500 to-red-600",
    bgGlow: "rgba(249,115,22,0.15)",
    topics: [
      {
        id: "9-1",
        title: "LAMP Stack on Azure VM",
        icon: "⚙️",
        content: {
          definition: "LAMP = Linux + Apache + MySQL + PHP. Deploy a dynamic web application on an Azure Linux VM.",
          steps: [
            { num: "1", title: "Provision Linux VM", cmd: null, desc: "Login to Azure Portal. Deploy Ubuntu 20.04 LTS VM. Select ≥2 vCPUs, 2GB RAM. Configure NSGs: Port 22 (SSH), Port 80 (HTTP), Port 443 (HTTPS optional)." },
            { num: "2", title: "SSH Connection", cmd: "ssh <username>@<public_ip>", desc: "Use SSH client to establish remote session with the VM." },
            { num: "3", title: "System Update", cmd: "sudo apt update && sudo apt upgrade -y", desc: "Ensure system is up-to-date before installing software." },
            { num: "4", title: "Install Apache", cmd: "sudo apt install apache2 -y\nsudo systemctl enable --now apache2\nsystemctl status apache2", desc: "Install Apache2 web server, enable and start the service, validate installation." },
            { num: "5", title: "Install MySQL", cmd: "sudo apt install mysql-server -y\nsudo mysql_secure_installation", desc: "Install MySQL Server and run the security hardening script to configure root credentials." },
            { num: "6", title: "Install PHP", cmd: "sudo apt install php libapache2-mod-php php-mysql -y\nsudo systemctl restart apache2", desc: "Install PHP with Apache and MySQL modules, restart Apache to apply changes." },
          ],
          memoryTip: "LAMP = Linux + Apache + MySQL + PHP. Steps: Provision → SSH → Update → Apache → MySQL → PHP"
        }
      },
      {
        id: "9-2",
        title: "Enabling RDP on Linux Server",
        icon: "🖥️",
        content: {
          definition: "Enable Remote Desktop Protocol (RDP) access to a Linux server using XFCE4 desktop environment and XRDP.",
          steps: [
            { num: "1", title: "Update System", cmd: "sudo apt-get update", desc: "Always update system packages first." },
            { num: "2", title: "Install XFCE4 Desktop", cmd: "sudo apt-get install xfce4", desc: "Install lightweight XFCE4 desktop environment." },
            { num: "3", title: "Install XRDP", cmd: "sudo apt-get install xrdp", desc: "Install XRDP — the Remote Desktop Protocol server for Linux." },
            { num: "4", title: "Register XFCE4 with XRDP", cmd: "echo xfce4-session > ~/.xsession", desc: "Configure XRDP to use the XFCE4 session manager." },
            { num: "5", title: "Restart XRDP", cmd: "sudo service xrdp restart", desc: "Restart XRDP service to apply changes." },
          ],
          alternative: {
            title: "Alternative: Full Ubuntu Desktop",
            commands: ["sudo apt install ubuntu-desktop -y", "sudo apt-get -y install xrdp", "sudo systemctl enable xrdp"],
          },
          memoryTip: "RDP on Linux: Update → XFCE4 → XRDP → Register session → Restart"
        }
      }
    ]
  }
];

export const quizData = [
  { q: "What is the key difference between parallel and distributed computing?", options: ["Speed of processors", "Shared memory (parallel) vs. message passing (distributed)", "Number of CPUs", "Operating system used"], answer: 1, explanation: "Parallel computing uses shared memory for communication, while distributed computing uses message passing over a network." },
  { q: "Who coined the concept of 'time-sharing' for computers in 1955?", options: ["J.C.R. Licklider", "Bob Taylor", "John McCarthy", "Larry Roberts"], answer: 2, explanation: "John McCarthy (who also coined 'artificial intelligence') proposed time-sharing in 1955 to maximize expensive computing resources." },
  { q: "What was ARPANET?", options: ["First cloud platform", "Predecessor of the Internet — first network to share digital resources between non-collocated computers", "First mainframe computer", "Amazon's first web service"], answer: 1, explanation: "ARPANET, developed in 1969, is widely known as the 'predecessor of the Internet' and was the first network allowing digital resources to be shared between non-collocated computers." },
  { q: "According to NIST, which is NOT one of the 5 essential characteristics of cloud computing?", options: ["Broad Network Access", "On-Demand Self-Service", "Rapid Elasticity", "Unlimited Storage"], answer: 3, explanation: "The 5 NIST characteristics are: Broad Network Access, On-Demand Self-Service, Resource Pooling, Rapid Elasticity, and Measured Service. Unlimited Storage is NOT one of them." },
  { q: "What does 'Measured Service' mean in the NIST cloud model?", options: ["Measuring internet speed", "Resource usage monitored, measured, and billed transparently (pay-per-use)", "Measuring server temperature", "Setting time limits on cloud usage"], answer: 1, explanation: "Measured Service means resource usage is monitored, measured, and reported (billed) transparently — essentially pay-per-use." },
  { q: "In which cloud deployment model do multiple organizations with similar backgrounds share the infrastructure?", options: ["Public Cloud", "Private Cloud", "Community Cloud", "Hybrid Cloud"], answer: 2, explanation: "Community Cloud is shared by several organizations with similar backgrounds, requirements, and security needs. Costs are shared among all participants." },
  { q: "What is IaaS?", options: ["Ready-to-use application software", "A cloud-based platform for developers", "On-demand access to cloud-hosted computing infrastructure (servers, storage, networking)", "Individual functions triggered by events"], answer: 2, explanation: "IaaS (Infrastructure as a Service) provides on-demand access to cloud-hosted computing infrastructure that customers can configure like on-premises hardware." },
  { q: "What is the correct relationship: SLI → SLO → SLA?", options: ["Measure → Target → Contract with consequences", "Contract → Measure → Target", "Target → Contract → Measure", "Agreement → Indicator → Objective"], answer: 0, explanation: "SLI = what you measure, SLO = your target for that measurement, SLA = the contract with consequences if the target isn't met." },
  { q: "A service with '4 nines' (99.99%) uptime allows how much downtime per month?", options: ["7 hours", "43 minutes", "4 minutes", "25 seconds"], answer: 2, explanation: "99.99% uptime (4 nines) allows approximately 4 minutes of downtime per month. 99% = 7 hours, 99.9% = 43 minutes, 99.999% = 25 seconds." },
  { q: "Which type of SLA is tailored specifically to a particular customer?", options: ["Service Level SLA", "Customer Level SLA", "Multilevel SLA", "Corporate SLA"], answer: 1, explanation: "Customer Level SLA is tailored to a specific customer or group of customers, outlining all agreed services — often at a premium price." },
  { q: "What does 'Data Sovereignty' mean in cloud computing?", options: ["Cloud provider owns all data", "Information stored in digital form is subject to the laws of the country where it is located", "Data must be stored in servers larger than 1TB", "Customers can delete their data anytime"], answer: 1, explanation: "Data sovereignty means information converted and stored in binary digital form is subject to the laws of the country in which it is located." },
  { q: "In SOA, what does 'loose coupling' mean?", options: ["Services are tightly integrated", "Services are independent and can be changed without affecting others", "Services share the same database", "Services must use the same programming language"], answer: 1, explanation: "Loose coupling in SOA means services are independent — you can change or update one service without affecting other services in the system." },
  { q: "Which cloud service model requires the MOST management responsibility from the customer?", options: ["SaaS", "PaaS", "IaaS", "FaaS"], answer: 2, explanation: "IaaS requires customers to manage the OS, middleware, applications, and data — everything above the virtualization layer. SaaS requires the least management." },
  { q: "What is FaaS (Function as a Service)?", options: ["File access service", "A cloud service where developers deploy individual functions triggered by events, with no server management", "Feature as a subscription service", "Fast application scaling service"], answer: 1, explanation: "FaaS (Serverless Computing) lets developers deploy individual functions that run in response to events, completely abstracting away server management. AWS Lambda is the most famous example." },
  { q: "Which of the 5 things to look for in a Cloud SLA deals with who owns your data?", options: ["Availability", "Disaster Recovery", "Data Ownership", "Customer Responsibilities"], answer: 2, explanation: "Data Ownership is one of the 5 key SLA elements. An SLA should explicitly state that all ownership rights stay with the user." },
];

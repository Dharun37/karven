# KARVENSEN WEBSITE - COMPLETE BUILD PROMPT

## 🎯 PROJECT OVERVIEW
Build a professional corporate website for **Karvensen** - an IT company founded in 2023 by Karthika Venkatesan, specializing in AI software development, agricultural drone technology (Make in India initiative), enterprise solutions (LMS platforms, cloud computing), and educational programs.

---

## 📦 TECH STACK

### Core Technologies
- **Framework**: Next.js 15+ with App Router (`app/` directory)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: shadcn/ui (Radix UI primitives)
- **CMS**: Sanity.io with Sanity Studio
- **Animations**: Framer Motion (optional) or CSS animations
- **Forms**: react-hook-form + zod validation
- **Package Manager**: pnpm (or npm)

### Dependencies Required
```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "typescript": "^5.x",
    "@sanity/client": "^6.x",
    "@sanity/image-url": "^1.x",
    "@sanity/vision": "^4.x",
    "sanity": "^3.x",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "lucide-react": "latest",
    "react-hook-form": "^7.x",
    "@hookform/resolvers": "^3.x",
    "zod": "^3.x",
    "date-fns": "^4.x"
  }
}
```

---

## 🎨 DESIGN SYSTEM

### Color Palette (Professional & Clean)
- **Primary**: Gray-900 (`#111827`) - main text, CTAs
- **Secondary**: Gray-700 (`#374151`) - secondary elements
- **Accent**: Green-400 (`#4ADE80`) - hover states, highlights
- **Background**: White (`#FFFFFF`) and Gray-50 (`#F9FAFB`)
- **Borders**: Gray-200 (`#E5E7EB`)
- **Text**: Gray-900 (headings), Gray-600 (body)

### Typography
- **Font Family**: System fonts (Inter recommended)
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, leading-relaxed

### Design Principles
- Clean, professional aesthetic (no excessive gradients)
- Minimal but impactful animations
- Neumorphic button effects (shadow on hover)
- Responsive design (mobile-first)
- Dark mode support (optional)

---

## 🏗️ PROJECT STRUCTURE

```
/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── training/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── careers/page.tsx
│   └── studio/[[...tool]]/page.tsx  # Sanity Studio
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── why-choose-section.tsx
│   ├── testimonials-section.tsx
│   ├── cta-section.tsx
│   └── ui/                 # shadcn/ui components
├── sanity/
│   ├── schemaTypes/
│   │   ├── service.ts
│   │   ├── blog.ts
│   │   ├── author.ts
│   │   ├── category.ts
│   │   ├── training.ts
│   │   ├── testimonial.ts
│   │   ├── project.ts
│   │   └── settings.ts
│   ├── lib/
│   │   ├── client.ts       # Sanity client config
│   │   └── image.ts        # Image URL builder
│   └── env.ts
├── sanity.config.ts
├── sanity.cli.ts
├── tailwind.config.ts
└── next.config.mjs
```

---

## 📄 PAGE-BY-PAGE SPECIFICATIONS

### 1. HOMEPAGE (`/`)

#### Sections & Layout:

**A. Hero Section**
- **Background**: Subtle grid pattern with gradient (gray-50 to white)
- **Headline**: "Transforming Industries with AI & Drone Technology"
- **Subtext**: "Pioneering intelligent solutions in AI software, agricultural drones, enterprise systems, and cloud infrastructure. Built in India, powered by innovation."
- **CTA Button**: "Explore Services" (links to `/services`)
  - Style: Gray-900 background, hover: green-400 with shadow effect
- **Key Highlights** (below CTA):
  - 🟢 AI-Powered Solutions
  - 🟢 Drone Technology for Farmers
  - 🟢 Make in India Initiative
- **Stats Cards** (4 columns):
  - Founded: 2023
  - Drones Deployed: 150+
  - Workshops Conducted: 100+
  - Enterprise Clients: 25+

**B. Features/Services Section**
- **Heading**: "Comprehensive Technology Solutions"
- **4 Service Cards** (2x2 grid on desktop):
  1. **AI Software Development** 
     - Icon: Cpu (lucide-react)
     - Description: "Custom AI solutions, machine learning models, and intelligent automation systems..."
  2. **Agricultural Drone Systems**
     - Icon: Plane
     - Description: "Smart drone technology for farmers - crop monitoring, spraying, and analytics..."
  3. **LMS Solutions**
     - Icon: BookOpen
     - Description: "Modern learning management systems for educational institutions and enterprises..."
  4. **Educational Programs**
     - Icon: GraduationCap
     - Description: "Hands-on workshops and awareness programs about drone technology..."
- **Card Design**: White background, gray-200 border, hover: shadow-lg + translate-y-1

**C. Why Choose Karvensen Section**
- **Background**: Gray-50
- **2-Column Layout**:
  - **Left**: Text content
    - Heading: "Why Choose Karvensen?"
    - Description paragraph
    - Checklist (6 items with checkmark icons):
      - AI-first approach to problem solving
      - Specialized in agricultural drone solutions
      - Proven track record in enterprise systems
      - Comprehensive training and support programs
      - Cloud-native architecture expertise
      - Commitment to indigenous manufacturing
  - **Right**: 4 Value Cards (2x2 grid)
    1. Founded on Innovation (Target icon)
    2. Make in India (Zap icon)
    3. Enterprise-Grade Quality (Shield icon)
    4. Community Impact (Users icon)

**D. Testimonials Section**
- **Heading**: "Trusted by Organizations Nationwide"
- **3 Testimonial Cards** (3-column grid):
  1. **Rajesh Kumar** - Agricultural Enterprise Owner, Maharashtra
     - Quote about drone technology increasing yield by 35%
  2. **Dr. Priya Sharma** - Dean of Education Technology
     - Quote about LMS platform transforming online education
  3. **Prof. Venkat Rao** - Engineering College Principal
     - Quote about exceptional drone workshop
- **Card Design**: Quote icon at top-left, avatar + name at bottom

**E. CTA Section**
- **Background**: Gray-800 with grid pattern overlay
- **Text**: White
- **Heading**: "Ready to Innovate with Karvensen?"
- **Buttons**: 
  - Primary: "Schedule a Consultation" (white bg, gray-900 text)
  - Secondary: "Explore Services" (outline)

---

### 2. ABOUT PAGE (`/about`)

#### Sections:

**A. Hero Section**
- **Badge**: "Innovating Since 2023" with TrendingUp icon
- **Heading**: "About Karvensen" (with animated text effect on desktop)
- **Description**: "Founded by **Karthika Venkatesan** in 2023, Karvensen is pioneering the future of AI software development, agricultural drone technology, cloud computing, and LMS platforms..."
- **3 Status Indicators**: Innovation First, AI-First Approach, Community Focused (green pulse dots)

**B. Mission & Vision**
- **2-Column Grid**:
  - **Mission Card** (Target icon)
    - Title: "Our Mission"
    - Text: "To empower businesses, farmers, and educational institutions with AI-driven technology..."
  - **Vision Card** (Eye icon)
    - Title: "Our Vision"
    - Text: "To be India's leading technology partner..."

**C. Core Values**
- **Background**: Gray-50
- **4 Value Cards** (2x2 grid):
  1. Innovation First (Lightbulb icon)
  2. Quality & Reliability (Shield icon)
  3. Community Impact (Users icon)
  4. Excellence (Award icon)

**D. Journey Timeline**
- **Vertical Timeline** (center-aligned on desktop):
  - 2023: Company founded
  - 2023: Launched drone program
  - 2023: Started educational workshops
  - 2024: Expanded to LMS & Cloud Solutions
  - 2024: Deployed 500+ drones
  - 2025: 100+ workshops, 50+ clients
- **Design**: Vertical line with circular nodes, alternating left/right text

**E. Impact Stats**
- **Background**: Gray-700 (dark)
- **4 Stats** (horizontal grid):
  - 150+ Drones Deployed (Plane icon)
  - 100+ Workshops Conducted (Users icon)
  - 25+ Enterprise Clients (Award icon)
  - 1000+ People Trained (Target icon)

**🖼️ IMAGE PLACEMENT - About Page:**
- **NO images currently** - design is icon-based
- **OPTIONAL**: Hero background image (team photo or office)
- **OPTIONAL**: Founder photo next to mission/vision section

---

### 3. SERVICES PAGE (`/services`)

#### Sections:

**A. Hero Section**
- **Heading**: "Our Services"
- **Description**: "Comprehensive technology solutions spanning AI development, drone systems, enterprise software, and educational programs..."

**B. Service Details** (4 major services)
Each service has:
- **2-Column Card Layout**:
  - **Left Column** (Gray-50 background):
    - Icon (large, 14x14, in gray-700 circle)
    - Tagline badge
    - Title (h2, 3xl)
    - Description paragraph
    - "Get Started" CTA button
  - **Right Column** (White background):
    - **Key Features** (checklist with CheckCircle icons)
    - **Use Cases** (pill badges)

**Services List:**

1. **AI Software Development**
   - Icon: Cpu
   - Tagline: "Intelligent Solutions for Modern Challenges"
   - Features (6):
     - Custom Machine Learning Models
     - Computer Vision & Image Processing
     - Natural Language Processing (NLP)
     - Predictive Analytics & Forecasting
     - AI Integration & Deployment
     - Model Training & Optimization
   - Use Cases: Manufacturing Quality Control, Customer Behavior Analysis, Process Automation, Risk Assessment

2. **Drone Technology**
   - Icon: Plane
   - Tagline: "Empowering Farmers with Smart Technology"
   - Features (6):
     - Crop Health Monitoring
     - Precision Spraying Systems
     - Real-time Field Analytics
     - Multi-Spectral Imaging
     - Automated Flight Planning
     - Data-Driven Insights
   - Use Cases: Pest Detection, Irrigation Planning, Yield Estimation, Field Mapping

3. **Learning Management Systems**
   - Icon: BookOpen
   - Tagline: "Modern Education Platforms"
   - Features (6):
     - Course Management & Delivery
     - Interactive Assessments
     - Progress Tracking & Analytics
     - Mobile-Responsive Design
     - Integration with Existing Systems
     - Certification Management
   - Use Cases: Corporate Training, Academic Courses, Skill Development, Compliance Training

4. **Educational Programs**
   - Icon: GraduationCap
   - Tagline: "Awareness & Skill Development"
   - Features (6):
     - Drone Awareness Workshops
     - Practical Drone Operation Training
     - AI & Technology Seminars
     - Career Guidance Programs
     - Hands-on Project Sessions
     - Certification Courses
   - Use Cases: School Workshops, College Programs, Farmer Training, Professional Development

**C. CTA Section**
- **Background**: Gray-700 with grid pattern
- **Heading**: "Ready to Transform Your Business?"
- **Button**: "Schedule a Consultation"

**🖼️ IMAGE PLACEMENT - Services:**
- **REQUIRED**: Each service card left column can have:
  - AI Software: Code/neural network visualization
  - Drone: Agricultural drone in field
  - LMS: Students using platform
  - Training: Workshop/classroom photo

---

### 4. TRAINING PAGE (`/training`)

#### Sections:

**A. Hero Section**
- **Badge**: "Training Programs"
- **Heading**: "Drone Awareness & Technical Training"
- **Description**: About empowering communities

**B. Stats Bar** (4 stats horizontal):
- 500+ Farmers Trained
- 50+ Schools Reached
- 200+ Certified Professionals
- 30+ Districts Covered

**C. Training Programs** (3 programs)
Each program has:
- **2-Column Layout**:
  - **Visual Column**: Large icon centered with duration/format badges
  - **Details Column**: 
    - Title
    - Description
    - What You'll Learn (checklist)
    - Meta info (certification, audience)
    - "Enroll Now" button

**Programs:**

1. **Farmer Drone Awareness Programs**
   - Icon: Tractor
   - Duration: 2-3 Days
   - Format: On-site / Field Training
   - Features (6):
     - Introduction to agricultural drones
     - Crop health monitoring basics
     - Precision spraying techniques
     - Data interpretation
     - Government schemes
     - Hands-on operation
   - Audience: Farmers, Agricultural Officers

2. **School & College Workshops**
   - Icon: GraduationCap
   - Duration: 1-5 Days
   - Format: On-campus Workshops
   - Features (6):
     - Intro to AI/ML
     - Drone basics
     - Hands-on coding
     - Project-based learning
     - Career guidance
     - Interactive demos
   - Audience: Students (Class 8-12), College, Teachers

3. **Skill Development & Certification**
   - Icon: Award
   - Duration: 4-12 Weeks
   - Format: Hybrid (Online + Practical)
   - Features (6):
     - DGCA drone pilot prep
     - AI/ML fundamentals
     - Cloud computing
     - Enterprise software dev
     - Project management
     - Placement assistance
   - Audience: Professionals, Graduates

**D. FAQ Section** (Accordion)
5 FAQs about eligibility, certification, location, cost, financial assistance

**🖼️ IMAGE PLACEMENT - Training:**
- **REQUIRED**:
  - Farmer program: Farmers with drones in field
  - School program: Students in workshop
  - Professional: Certification/training session photo

---

### 5. BLOG PAGE (`/blog`)

#### Sections:

**A. Hero Section**
- **Badge**: "Insights & Updates" with BookOpen icon
- **Heading**: "The Karvensen Blog"
- **Description**: "Explore deep insights, innovations, and real-world applications across AI, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions shaping the future."
- **Hero Style**: Clean, modern, tech-focused with subtle animated background (AI circuit/drone map lines)

**B. Category Filter**
- **Horizontal pill buttons** (Branch-based categories):
  - All
  - Artificial Intelligence
  - Drone Technology
  - Cloud Computing
  - LMS & EdTech
  - Innovation & Research
  - Cybersecurity
  - Data & Analytics
  - Industry Use-Cases

**C. Blog Grid** (3-column desktop, 2-column tablet, 1-column mobile)
**50+ Comprehensive Blog Posts:**

**🧠 ARTIFICIAL INTELLIGENCE (12 posts)**

1. **AI in Agriculture: Transforming India's Farming Landscape**
   - Category: Artificial Intelligence
   - Branch: AI in Agriculture
   - Date: Jan 15, 2026
   - Read Time: 6 min
   - Excerpt: Discover how AI-powered analytics, crop monitoring, and predictive models are revolutionizing agricultural productivity across Indian farms.

2. **AI-Driven Healthcare: Early Disease Detection Systems**
   - Category: Artificial Intelligence
   - Branch: AI in Healthcare
   - Date: Jan 12, 2026
   - Read Time: 7 min
   - Excerpt: Explore how computer vision and machine learning enable rapid medical imaging analysis and predictive diagnostics in modern healthcare.

3. **Computer Vision Applications: From Theory to Practice**
   - Category: Artificial Intelligence
   - Branch: Computer Vision
   - Date: Jan 8, 2026
   - Read Time: 8 min
   - Excerpt: Deep dive into real-world computer vision implementations including object detection, facial recognition, and quality control systems.

4. **Generative AI: The Future of Content Creation**
   - Category: Artificial Intelligence
   - Branch: Generative AI
   - Date: Jan 5, 2026
   - Read Time: 6 min
   - Excerpt: Understanding how generative models are reshaping creative industries, from text to images and beyond.

5. **AI Model Training: Best Practices for Production Systems**
   - Category: Artificial Intelligence
   - Branch: AI Model Training
   - Date: Dec 28, 2025
   - Read Time: 9 min
   - Excerpt: Comprehensive guide to training, validating, and deploying machine learning models at scale with optimal performance.

6. **Intelligent Automation: AI-Powered Workflow Optimization**
   - Category: Artificial Intelligence
   - Branch: AI Automation
   - Date: Dec 22, 2025
   - Read Time: 7 min
   - Excerpt: How businesses leverage AI to automate complex processes, reduce costs, and enhance operational efficiency.

7. **Edge AI: Processing Intelligence at the Source**
   - Category: Artificial Intelligence
   - Branch: Edge AI
   - Date: Dec 18, 2025
   - Read Time: 6 min
   - Excerpt: Exploring edge computing combined with AI for real-time decision making in IoT devices and embedded systems.

8. **AI Ethics: Building Responsible AI Systems**
   - Category: Artificial Intelligence
   - Branch: AI Ethics
   - Date: Dec 12, 2025
   - Read Time: 8 min
   - Excerpt: Navigate the ethical considerations, bias mitigation, and transparency requirements in modern AI development.

9. **AI + IoT: The Smart Connected Future**
   - Category: Artificial Intelligence
   - Branch: AI + IoT
   - Date: Dec 8, 2025
   - Read Time: 7 min
   - Excerpt: How artificial intelligence enhances IoT ecosystems for predictive maintenance, smart homes, and industrial automation.

10. **AI for Smart Cities: Urban Intelligence Revolution**
    - Category: Artificial Intelligence
    - Branch: AI for Smart Cities
    - Date: Dec 2, 2025
    - Read Time: 7 min
    - Excerpt: Transforming urban infrastructure with AI-driven traffic management, waste optimization, and energy efficiency systems.

11. **Natural Language Processing: Human-AI Communication**
    - Category: Artificial Intelligence
    - Branch: NLP
    - Date: Nov 25, 2025
    - Read Time: 8 min
    - Excerpt: Advanced NLP techniques powering chatbots, sentiment analysis, and language translation in enterprise applications.

12. **AI-Powered Predictive Analytics for Business Intelligence**
    - Category: Artificial Intelligence
    - Branch: Predictive Analytics
    - Date: Nov 20, 2025
    - Read Time: 6 min
    - Excerpt: Leverage AI-driven forecasting models to anticipate market trends, customer behavior, and business outcomes.

**🚁 DRONE TECHNOLOGY (12 posts)**

13. **Precision Farming Drones: Maximizing Crop Yields**
    - Category: Drone Technology
    - Branch: Precision Farming Drones
    - Date: Jan 10, 2026
    - Read Time: 7 min
    - Excerpt: How agricultural drones equipped with multispectral sensors enable targeted interventions for optimal crop health.

14. **Drone Surveillance & Terrain Mapping Technologies**
    - Category: Drone Technology
    - Branch: Surveillance & Mapping
    - Date: Jan 6, 2026
    - Read Time: 6 min
    - Excerpt: Advanced aerial mapping solutions for infrastructure monitoring, land surveys, and disaster response operations.

15. **Make in India: Drone Manufacturing Excellence**
    - Category: Drone Technology
    - Branch: Drone Manufacturing
    - Date: Jan 3, 2026
    - Read Time: 8 min
    - Excerpt: Building world-class drones domestically—from design and component sourcing to quality assurance and certification.

16. **UAV Regulations in India: Compliance & Certification**
    - Category: Drone Technology
    - Branch: UAV Regulations
    - Date: Dec 30, 2025
    - Read Time: 7 min
    - Excerpt: Navigate DGCA guidelines, drone pilot licensing, and regulatory frameworks for commercial UAV operations.

17. **Autonomous Drones: Self-Flying Intelligence**
    - Category: Drone Technology
    - Branch: Autonomous Drones
    - Date: Dec 25, 2025
    - Read Time: 8 min
    - Excerpt: Cutting-edge autonomous navigation systems using AI, computer vision, and GPS-denied environment capabilities.

18. **Drone Swarm Technology: Coordinated Aerial Intelligence**
    - Category: Drone Technology
    - Branch: Drone Swarm Technology
    - Date: Dec 20, 2025
    - Read Time: 9 min
    - Excerpt: Multi-drone coordination algorithms enabling synchronized operations for search, rescue, and large-scale monitoring.

19. **AI-Powered Drones: Next-Gen Aerial Analytics**
    - Category: Drone Technology
    - Branch: AI-Powered Drones
    - Date: Dec 15, 2025
    - Read Time: 7 min
    - Excerpt: Integration of deep learning models for real-time object detection, tracking, and decision-making in flight.

20. **Defense Applications: Drones in National Security**
    - Category: Drone Technology
    - Branch: Defense Applications
    - Date: Dec 10, 2025
    - Read Time: 6 min
    - Excerpt: Tactical UAV deployment for border surveillance, reconnaissance, and strategic defense operations.

21. **Delivery Drones: The Future of Logistics**
    - Category: Drone Technology
    - Branch: Delivery Drones
    - Date: Dec 5, 2025
    - Read Time: 7 min
    - Excerpt: Revolutionizing last-mile delivery with autonomous aerial vehicles for e-commerce and emergency medical supplies.

22. **Drone Maintenance & Repair: Ensuring Operational Excellence**
    - Category: Drone Technology
    - Branch: Drone Maintenance
    - Date: Nov 28, 2025
    - Read Time: 6 min
    - Excerpt: Best practices for drone fleet management, preventive maintenance schedules, and troubleshooting common issues.

23. **Thermal Imaging Drones: Beyond Visual Spectrum**
    - Category: Drone Technology
    - Branch: Thermal Imaging
    - Date: Nov 22, 2025
    - Read Time: 7 min
    - Excerpt: Applications of thermal cameras in drones for wildlife monitoring, electrical inspections, and search operations.

24. **Agricultural Spraying Drones: Precision Application Systems**
    - Category: Drone Technology
    - Branch: Agricultural Spraying
    - Date: Nov 18, 2025
    - Read Time: 6 min
    - Excerpt: Optimizing pesticide and fertilizer distribution with GPS-guided drone sprayers for reduced waste and enhanced coverage.

**☁️ CLOUD COMPUTING (13 posts)**

25. **Cloud Architecture: Designing Scalable Systems**
    - Category: Cloud Computing
    - Branch: Cloud Architecture
    - Date: Jan 14, 2026
    - Read Time: 8 min
    - Excerpt: Master the fundamentals of cloud infrastructure design, microservices architecture, and high-availability patterns.

26. **Hybrid Cloud Strategies: Best of Both Worlds**
    - Category: Cloud Computing
    - Branch: Hybrid Cloud
    - Date: Jan 11, 2026
    - Read Time: 7 min
    - Excerpt: Balancing on-premise and cloud resources for optimal performance, security, and cost efficiency.

27. **Multi-Cloud Management: Avoiding Vendor Lock-In**
    - Category: Cloud Computing
    - Branch: Multi-Cloud Strategy
    - Date: Jan 7, 2026
    - Read Time: 7 min
    - Excerpt: Strategies for managing workloads across AWS, Azure, and GCP while maintaining interoperability and resilience.

28. **Cloud Migration: From On-Premise to Cloud-Native**
    - Category: Cloud Computing
    - Branch: Cloud Migration
    - Date: Jan 4, 2026
    - Read Time: 9 min
    - Excerpt: Step-by-step guide to successful cloud migration including assessment, planning, execution, and optimization.

29. **DevOps & CI/CD: Accelerating Cloud Deployments**
    - Category: Cloud Computing
    - Branch: DevOps & CI/CD
    - Date: Dec 29, 2025
    - Read Time: 8 min
    - Excerpt: Implementing continuous integration and deployment pipelines for rapid, reliable cloud application releases.

30. **Cloud AI Services: Machine Learning at Scale**
    - Category: Cloud Computing
    - Branch: Cloud AI Services
    - Date: Dec 24, 2025
    - Read Time: 7 min
    - Excerpt: Leveraging cloud-native AI platforms for training, deploying, and scaling machine learning models efficiently.

31. **Edge Cloud Computing: Distributed Intelligence**
    - Category: Cloud Computing
    - Branch: Edge Cloud
    - Date: Dec 19, 2025
    - Read Time: 6 min
    - Excerpt: Bringing compute resources closer to data sources for ultra-low latency applications and IoT workloads.

32. **Cloud Cost Optimization: Maximizing ROI**
    - Category: Cloud Computing
    - Branch: Cloud Cost Optimization
    - Date: Dec 14, 2025
    - Read Time: 8 min
    - Excerpt: Proven techniques to reduce cloud spending through resource rightsizing, reserved instances, and automation.

33. **Serverless Computing: Event-Driven Architecture**
    - Category: Cloud Computing
    - Branch: Serverless Computing
    - Date: Dec 9, 2025
    - Read Time: 7 min
    - Excerpt: Build scalable applications without managing servers using AWS Lambda, Azure Functions, and similar platforms.

34. **Cloud for Startups: Rapid Infrastructure Deployment**
    - Category: Cloud Computing
    - Branch: Cloud for Startups
    - Date: Dec 4, 2025
    - Read Time: 6 min
    - Excerpt: How startups leverage cloud infrastructure for rapid prototyping, scaling, and cost-effective growth.

35. **Cloud Security: Protecting Data in the Cloud**
    - Category: Cloud Computing
    - Branch: Cloud Security
    - Date: Nov 30, 2025
    - Read Time: 8 min
    - Excerpt: Comprehensive security strategies including encryption, identity management, and compliance frameworks.

36. **Kubernetes & Container Orchestration**
    - Category: Cloud Computing
    - Branch: Container Orchestration
    - Date: Nov 26, 2025
    - Read Time: 9 min
    - Excerpt: Mastering Kubernetes for deploying, scaling, and managing containerized applications in production.

37. **Cloud-Native Development: Building Modern Applications**
    - Category: Cloud Computing
    - Branch: Cloud-Native Development
    - Date: Nov 21, 2025
    - Read Time: 7 min
    - Excerpt: Designing applications optimized for cloud environments with 12-factor principles and microservices patterns.

**🎓 LMS & EDTECH (13 posts)**

38. **AI-Based LMS: Personalized Learning Experiences**
    - Category: LMS & EdTech
    - Branch: AI-Based LMS
    - Date: Jan 13, 2026
    - Read Time: 7 min
    - Excerpt: How AI algorithms adapt content delivery, recommend resources, and optimize learning paths for individual students.

39. **Personalized Learning: Adaptive Education Platforms**
    - Category: LMS & EdTech
    - Branch: Personalized Learning
    - Date: Jan 9, 2026
    - Read Time: 6 min
    - Excerpt: Tailoring educational content to learner pace, style, and proficiency using data-driven insights.

40. **Virtual Labs: Hands-On Learning in Digital Spaces**
    - Category: LMS & EdTech
    - Branch: Virtual Labs
    - Date: Jan 2, 2026
    - Read Time: 7 min
    - Excerpt: Simulated laboratory environments enabling students to conduct experiments remotely with realistic outcomes.

41. **Skill Tracking Systems: Measuring Learning Outcomes**
    - Category: LMS & EdTech
    - Branch: Skill Tracking
    - Date: Dec 27, 2025
    - Read Time: 6 min
    - Excerpt: Advanced analytics platforms for monitoring student progress, competency development, and knowledge retention.

42. **Online Certification Platforms: Credentialing the Future**
    - Category: LMS & EdTech
    - Branch: Online Certification
    - Date: Dec 23, 2025
    - Read Time: 7 min
    - Excerpt: Blockchain-verified certifications and digital badges for professional skills and academic achievements.

43. **LMS Analytics: Data-Driven Education Insights**
    - Category: LMS & EdTech
    - Branch: LMS Analytics
    - Date: Dec 17, 2025
    - Read Time: 8 min
    - Excerpt: Leveraging learning analytics dashboards to improve course design, engagement, and student success rates.

44. **Gamification in LMS: Engagement Through Play**
    - Category: LMS & EdTech
    - Branch: Gamification
    - Date: Dec 13, 2025
    - Read Time: 6 min
    - Excerpt: Incorporating game mechanics like points, badges, and leaderboards to boost motivation and participation.

45. **Corporate Training Systems: Enterprise Learning Platforms**
    - Category: LMS & EdTech
    - Branch: Corporate Training
    - Date: Dec 7, 2025
    - Read Time: 7 min
    - Excerpt: Scalable LMS solutions for employee onboarding, compliance training, and continuous professional development.

46. **LMS for Educational Institutions: Campus-Wide Solutions**
    - Category: LMS & EdTech
    - Branch: LMS for Institutions
    - Date: Dec 1, 2025
    - Read Time: 8 min
    - Excerpt: Comprehensive platforms managing courses, assessments, grading, and communication for schools and universities.

47. **AR/VR in Education: Immersive Learning Technologies**
    - Category: LMS & EdTech
    - Branch: AR/VR in Education
    - Date: Nov 27, 2025
    - Read Time: 9 min
    - Excerpt: Transforming education with augmented and virtual reality for interactive simulations and experiential learning.

48. **Mobile Learning: Education On-The-Go**
    - Category: LMS & EdTech
    - Branch: Mobile Learning
    - Date: Nov 23, 2025
    - Read Time: 6 min
    - Excerpt: Responsive LMS design and mobile-first strategies for learning anytime, anywhere on any device.

49. **Collaborative Learning Platforms: Social Education**
    - Category: LMS & EdTech
    - Branch: Collaborative Learning
    - Date: Nov 19, 2025
    - Read Time: 7 min
    - Excerpt: Peer-to-peer learning features including discussion forums, group projects, and real-time collaboration tools.

50. **Learning Management API Integration: Ecosystem Connectivity**
    - Category: LMS & EdTech
    - Branch: LMS Integration
    - Date: Nov 15, 2025
    - Read Time: 8 min
    - Excerpt: Integrating LMS platforms with existing enterprise systems, payment gateways, and third-party content providers.

**Card Design**: 
- Category badge at top (branch name)
- Featured image (1200×630px)
- Blog title (bold, clear)
- Excerpt (2 lines max)
- Date + Read time at bottom
- Hover effect: lift + glow animation

**🖼️ IMAGE PLACEMENT - Blog:**
- **REQUIRED**: Each blog card needs:
  - Featured image/thumbnail (1200×630px)
  - AI-generated or high-quality stock images
  - Strictly related to blog branch topic

**AI IMAGE GENERATION PROMPTS:**

Template for each blog:
```
Ultra-realistic, high-resolution technology illustration of [BLOG BRANCH],
modern Indian context, advanced AI systems, futuristic UI overlays,
clean lighting, professional corporate style,
cinematic composition, depth of field,
no text, no watermark, 16:9 ratio, 1200x630
```

Examples:
- **AI in Agriculture:** Drones scanning crops with AI dashboards overlay
- **Cloud Computing:** Glowing cloud servers with data streams
- **LMS Platform:** Virtual classroom with AI tutor hologram
- **Drone Manufacturing:** High-tech assembly line with quality control systems

---

### 6. CONTACT PAGE (`/contact`)

#### Sections:

**A. Hero Section**
- **Heading**: "Get in Touch"
- **Description**: About services, training, partnerships

**B. Main Content** (2-column layout)

**Left Column - Contact Form:**
- Fields:
  - First Name (required)
  - Last Name (required)
  - Email (required, type=email)
  - Phone (optional, type=tel)
  - Inquiry Type (dropdown): General, Book Demo, Partnership, Training, Careers, Support
  - Company (optional)
  - Message (textarea, required)
- **Submit Button**: "Send Message" with Send icon
  - Style: Gray-900 bg, hover: green-400 with shadow effect
- **Success State**: Shows checkmark + thank you message

**Right Column - Contact Information Cards:**
4 cards with hover effects:

1. **Office Address**
   - Icon: MapPin
   - Text: 
     - KarVenSen Technologies
     - Hitech City, Hyderabad
     - Telangana 500081, India

2. **Email Us**
   - Icon: Mail
   - Links:
     - contact@karvensen.com
     - sales@karvensen.com
     - careers@karvensen.com

3. **Call Us**
   - Icon: Phone
   - Numbers:
     - +91 123 456 7890
     - +91 987 654 3210

4. **Business Hours**
   - Icon: Clock
   - Schedule:
     - Monday - Friday: 9:00 AM - 6:00 PM
     - Saturday: 10:00 AM - 2:00 PM
     - Sunday: Closed

**🖼️ IMAGE PLACEMENT - Contact:**
- **OPTIONAL**: Map embed or office photo

---

### 7. CAREERS PAGE (`/careers`)

#### Sections:

**A. Hero Section**
- **Badge**: "We're Hiring" (green-400 bg)
- **Heading**: "Build the Future with KarVenSen"
- **Description**: About joining innovators

**B. Benefits Section** (Gray-50 background)
- **4 Benefit Cards** (4-column grid):
  1. Growth Opportunities (TrendingUp icon)
  2. Cutting-Edge Tech (Zap icon)
  3. Health & Wellness (Heart icon)
  4. Collaborative Culture (Users icon)

**C. Open Positions** (vertical list)
**6 Job Listings:**

1. **AI/ML Engineer**
   - Department: AI Research
   - Location: Hyderabad
   - Type: Full-time
   - Experience: 3-5 years
   - Requirements (4 bullet points)
   - "View Details" button

2. **Drone Systems Engineer**
   - Department: Drone Technology
   - Location: Hyderabad
   - Type: Full-time
   - Experience: 2-4 years

3. **Full Stack Developer**
   - Department: Product Engineering
   - Location: Hyderabad / Remote
   - Type: Full-time
   - Experience: 2-4 years

4. **DevOps Engineer**
   - Department: Infrastructure
   - Location: Hyderabad
   - Type: Full-time
   - Experience: 3-5 years

5. **Training Program Coordinator**
   - Department: Training & Outreach
   - Location: Hyderabad / Field
   - Type: Full-time
   - Experience: 2-3 years

6. **Enterprise Sales Executive**
   - Department: Business Development
   - Location: Hyderabad / Delhi
   - Type: Full-time
   - Experience: 3-5 years

**Job Card Design**: White bg, gray-200 border, hover: shadow-lg, shows department, location, type, experience badge

**D. Application CTA Section**
- Background: Gray-700
- "Don't see a perfect fit?" message
- "Send us your resume" button

**🖼️ IMAGE PLACEMENT - Careers:**
- **OPTIONAL**: Team photo, office culture images

---

## 🧩 SHARED COMPONENTS

### NAVBAR (Sticky Top)
- **Logo**: "K" in gray-700 square + "Karvensen" text
- **Desktop Menu**:
  - Home (link)
  - Services (dropdown with 5 services)
  - Training (dropdown with 3 programs)
  - About
  - Blog
  - Contact
- **CTA Button**: "Get Started" (gray-900 bg)
- **Mobile**: Hamburger menu (Sheet component)
- **Sticky**: Yes, backdrop-blur effect

### FOOTER
- **5-Column Grid** (responsive):
  1. **Brand Column** (spans 2 cols):
     - Logo + name
     - Description text
     - Contact info (MapPin, Mail, Phone with icons)
     - **Social Media Icons** (5 icons with brand colors):
       - LinkedIn (#0077b5)
       - YouTube (#CD201F)
       - Facebook (#316FF6)
       - Twitter (#1DA1F2)
       - Instagram (gradient)
  
  2. **Company Links**:
     - About Us
     - Careers
     - Blog
     - Contact
  
  3. **Services Links**:
     - AI Solutions
     - Drone Technology
     - LMS Solutions
     - Cloud Services
  
  4. **Training Links**:
     - Farmer Programs
     - School Workshops
     - Skill Development

  5. **Resources** (optional):
     - Documentation
     - Case Studies
     - Privacy Policy
     - Terms of Service

- **Bottom Bar**: Copyright text

**🎨 Footer Design**: Gray-50 background, gray-200 border-top

---

## 🗄️ SANITY CMS SCHEMAS

### 1. Service Schema
```typescript
{
  name: 'service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', required },
    { name: 'slug', type: 'slug' },
    { name: 'icon', type: 'string' }, // lucide icon name
    { name: 'tagline', type: 'string' },
    { name: 'shortDescription', type: 'text' },
    { name: 'longDescription', type: 'blockContent' },
    { name: 'features', type: 'array of strings' },
    { name: 'useCases', type: 'array of strings' },
    { name: 'images', type: 'array of images' },
    { name: 'order', type: 'number' }
  ]
}
```

### 2. Blog Post Schema
```typescript
{
  name: 'blogPost',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', required },
    { name: 'slug', type: 'slug', required },
    { name: 'author', type: 'reference to author' },
    { name: 'publishedAt', type: 'datetime', required },
    { name: 'category', type: 'string', required }, // Main category
    { name: 'branch', type: 'string', required }, // Branch/subtitle
    { name: 'excerpt', type: 'text', required, maxLength: 200 },
    { name: 'heroImage', type: 'image', required },
    { name: 'heroVideo', type: 'url' }, // AI-generated video URL
    { name: 'content', type: 'blockContent', required },
    { name: 'readTime', type: 'string' },
    { name: 'tags', type: 'array of strings' },
    { name: 'featured', type: 'boolean', default: false },
    { name: 'relatedPosts', type: 'array of references to blogPost' },
    { name: 'seo', type: 'object', fields: [
      { name: 'metaTitle', type: 'string' },
      { name: 'metaDescription', type: 'text' },
      { name: 'keywords', type: 'array of strings' }
    ]}
  ]
}
```

### 3. Author Schema
```typescript
{
  name: 'author',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'avatar', type: 'image' },
    { name: 'bio', type: 'text' }
  ]
}
```

### 4. Category Schema
```typescript
{
  name: 'category',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' }
  ]
}
```

### 5. Training Program Schema
```typescript
{
  name: 'training',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'icon', type: 'string' },
    { name: 'duration', type: 'string' },
    { name: 'format', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'features', type: 'array of strings' },
    { name: 'audience', type: 'string' },
    { name: 'certification', type: 'string' },
    { name: 'price', type: 'number' },
    { name: 'images', type: 'array of images' }
  ]
}
```

### 6. Testimonial Schema
```typescript
{
  name: 'testimonial',
  fields: [
    { name: 'quote', type: 'text' },
    { name: 'author', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'avatar', type: 'image' },
    { name: 'company', type: 'string' },
    { name: 'featured', type: 'boolean' }
  ]
}
```

### 7. Project/Case Study Schema
```typescript
{
  name: 'project',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'client', type: 'string' },
    { name: 'industry', type: 'string' },
    { name: 'description', type: 'blockContent' },
    { name: 'images', type: 'array of images' },
    { name: 'results', type: 'array of objects' },
    { name: 'technologies', type: 'array of strings' }
  ]
}
```

### 8. Settings Schema
```typescript
{
  name: 'settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'logo', type: 'image' },
    { name: 'contactEmail', type: 'string' },
    { name: 'contactPhone', type: 'string' },
    { name: 'address', type: 'text' },
    { name: 'socialLinks', type: 'object with URLs' },
    { name: 'footerText', type: 'string' }
  ]
}
```

---

## 🖼️ IMAGE REQUIREMENTS & PLACEMENTS

### Critical Images Needed:

#### Homepage:
- ❌ **Hero**: Optional background (office/team photo)
- ❌ **Features**: Optional service illustrations
- ✅ **Testimonials**: 3 avatar images (placeholder acceptable)

#### About Page:
- ❌ All icon-based (no images required)
- ✅ **Optional**: Founder photo, team photo

#### Services Page:
- ✅ **AI Software**: Neural network/code visualization (800x600px)
- ✅ **Drone Technology**: Agricultural drone in field (800x600px)
- ✅ **LMS**: Students/platform screenshot (800x600px)
- ✅ **Training**: Workshop/classroom photo (800x600px)

#### Training Page:
- ✅ **Farmer Program**: Farmers with drones (800x600px)
- ✅ **School Workshop**: Students in classroom (800x600px)
- ✅ **Professional**: Training session (800x600px)

#### Blog Page:
- ✅ **Each Post**: Featured image (1200x630px) - 6 total
  - AI + Agriculture theme
  - Drone technology
  - Manufacturing/innovation
  - Enterprise/office
  - Cloud/security
  - Education/students

#### Contact & Careers:
- ❌ Optional only

### Image Optimization:
- Format: WebP (with JPEG fallback)
- Use Next.js `<Image>` component
- Lazy loading enabled
- Responsive srcset

### Image Sources (Suggestions):
- Unsplash (free, commercial use)
- Pexels (free)
- Custom photography (recommended for authenticity)
- Sanity's image CDN for CMS images

---

## ⚡ KEY FEATURES & FUNCTIONALITY

### 1. Animations
- **Fade-up on scroll** for sections
- **Counter animation** for stats (homepage hero)
- **Hover effects**: Shadow + translate for cards
- **Button hover**: Color change + shadow effect (neumorphic)

### 2. Forms
- **Contact Form**:
  - Client-side validation (zod)
  - Success/error states
  - Email integration (optional: Resend, SendGrid, or Next.js API route)
- **Newsletter** (optional in footer)

### 3. SEO
- Metadata in each page
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap generation
- robots.txt

### 4. Performance
- Image optimization (Next.js Image)
- Font optimization
- Code splitting
- Lazy loading

### 5. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Alt text for images
- Color contrast (WCAG AA)

---

## 📱 RESPONSIVE BREAKPOINTS

```css
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

### Mobile Considerations:
- Hamburger menu (navbar)
- Stacked layouts (1 column)
- Touch-friendly buttons (min 44x44px)
- Simplified animations

---

## 🚀 DEPLOYMENT CHECKLIST

### Environment Variables
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN= (for write access)
```

### Vercel Deployment Steps:
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy
5. Configure custom domain (optional)

### Sanity Studio Access:
- URL: `yourdomain.com/studio`
- Authentication: Sanity accounts

---

## 📋 CONTENT CHECKLIST

### Required Content:
- ✅ Company description
- ✅ Service descriptions (4 services)
- ✅ Training program details (3 programs)
- ✅ Testimonials (3 minimum)
- ✅ Blog posts (6 sample posts)
- ✅ Job listings (6 positions)
- ✅ Contact information
- ✅ About page content (mission, vision, values, timeline)

### Optional Content:
- Case studies/projects
- Team member profiles
- FAQ sections
- Documentation/resources

---

## 🎯 ACCEPTANCE CRITERIA

### Functionality:
- ✅ All pages render correctly
- ✅ Navigation works (desktop + mobile)
- ✅ Forms submit successfully
- ✅ Sanity Studio accessible at `/studio`
- ✅ Content editable via CMS
- ✅ Images load optimized
- ✅ Responsive on all devices

### Design:
- ✅ Matches color palette
- ✅ Professional, clean aesthetic
- ✅ Consistent spacing/typography
- ✅ Hover effects work
- ✅ Animations smooth

### Performance:
- ✅ Lighthouse score > 90
- ✅ First Contentful Paint < 2s
- ✅ Time to Interactive < 3s

### SEO:
- ✅ Meta tags present
- ✅ Sitemap generated
- ✅ robots.txt configured

---

## 🛠️ DEVELOPMENT COMMANDS

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Access Sanity Studio
# Navigate to: http://localhost:3000/studio
```

---

## 📚 REFERENCE LINKS

- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev

---

## 🎨 BUTTON STYLES (Neumorphic Effect)

```css
/* Primary CTA Button */
.btn-primary {
  @apply bg-gray-900 text-white cursor-pointer border border-gray-900 
         rounded px-8 py-3 transition-all duration-200
         hover:bg-green-400 hover:text-gray-900 
         hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] 
         hover:shadow-[0.25rem_0.25rem_0_0_rgb(17,24,39)]
         active:translate-x-0 active:translate-y-0 active:shadow-none;
}
```

---

## ✅ FINAL NOTES

This website is designed to be:
- **Professional**: Clean, corporate-appropriate design
- **Functional**: All features work end-to-end
- **Scalable**: Easy to add more content via Sanity CMS
- **Performant**: Optimized images, code-splitting, lazy loading
- **Accessible**: WCAG compliant, keyboard navigable
- **SEO-friendly**: Proper meta tags, structured data

**Unique Selling Points:**
- Make in India initiative (drone manufacturing)
- Founder-led (Karthika Venkatesan)
- Focus on community impact (farmer training, school workshops)
- AI-first approach to solutions

---

**END OF BUILD PROMPT**

Use this document to build the Karvensen website from scratch. Every section, component, color, content piece, and image placement is specified above. Copy this prompt and provide it to any developer, AI tool, or use it as a reference for building the exact website structure.

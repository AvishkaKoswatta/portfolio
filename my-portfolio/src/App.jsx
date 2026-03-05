// import React, { useState } from 'react';
// import { Download, Mail, Phone, MapPin, Github, Linkedin, Database, BarChart3, Code, Users } from 'lucide-react';

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const projects = [
//     {
//       title: "E-commerce Data Pipeline",
//       description: "Built an automated ETL pipeline processing transactions using Python, Apache Airflow, and PostgreSQL.",
//       technologies: ["Python", "Apache Airflow", "PostgreSQL"],
//       status: "Completed",
//       image: "/etl.jpeg"
//     },
//     {
//       title: "Real-time Analytics Dashboard",
//       description: "Developed a real-time dashboard for monitoring medical state of patients using Kafka, Debezium and Spark Streaming.",
//       technologies: ["Apache Kafka", "Spark", "Debezium"],
//       status: "Completed",
//       image: "/real_time_dashboard.png"
//     },
//     {
//       title: "Data Quality Framework",
//       description: "Implemented data quality checks and monitoring system, reducing data issues and improving data reliability.",
//       technologies: ["Python", "Great Expectations"],
//       status: "Completed",
//       image: "/images/data_quality_framework.png"
//     },
//     {
//       title: "AI-Aided Loan Default Predication Model for Small Scale Financial Institutions ",
//       description: "Final year undergraduate group project. This is an AI Aided Loan Default Predication Model for Small Scale Financial Institutions (SSFI).",
//       technologies: ["ML", "AI"],
//       status: "On Going",
//       image: "/images/loan_default_prediction.png"
//     },
//     {
//       title: "Carbon Footprint Chatbot",
//       description: "Developed a domain-Specific Chatbot on Carbon Footprint with LoRA fine-tuned Mistral 7B that capable of answering related questions using a RAG pipeline. (FAISS + Hugging Face)",
//       technologies: ["Python", "Advance AI"],
//       status: "Completed",
//       image: "chatbot.png"
//     },
//     {
//       title: "Bank Document Verification using OCR",
//       description: "A project that used OCR and CRNN as hybrid system to read from scanned bank documents.",
//       technologies: ["OCR", "CRNN"],
//       status: "Completed",
//       image: "ocr-bank-doc.png"
//     }
//   ];

//   const skills = {
//     "Programming": ["Python", "SQL", "Java"],
//     "Big Data": ["Apache Spark", "Hadoop", "Kafka", "Airflow"],
//     "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
//     "Cloud": ["AWS", "Docker"],
//   };

//   const NavButton = ({ section, label, icon: Icon }) => (
//     <button
//       onClick={() => setActiveSection(section)}
//       className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
//         activeSection === section
//           ? 'bg-blue-600 text-white'
//           : 'text-gray-600 hover:bg-gray-100'
//       }`}
//     >
//       <Icon size={18} />
//       <span>{label}</span>
//     </button>
//   );

//   const SkillCategory = ({ category, skillList }) => (
//     <div className="mb-4">
//       <h4 className="font-semibold text-gray-800 mb-2">{category}</h4>
//       <div className="flex flex-wrap gap-2">
//         {skillList.map((skill, index) => (
//           <span
//             key={index}
//             className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );

//   const ProjectCard = ({ project }) => (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//       <div className="flex justify-between items-start mb-3">
//         <h3
//           onClick={() => setSelectedProject(project)}
//           className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
//           title="Click to view image"
//         >
//           {project.title}
//         </h3>
//         <span className={`px-2 py-1 rounded text-xs ${
//           project.status === 'Completed'
//             ? 'bg-green-100 text-green-800'
//             : 'bg-yellow-100 text-yellow-800'
//         }`}>
//           {project.status}
//         </span>
//       </div>
//       <p className="text-gray-600 mb-4">{project.description}</p>
//       <div className="flex flex-wrap gap-2">
//         {project.technologies.map((tech, index) => (
//           <span
//             key={index}
//             className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//     </div>
//   );

//   const renderHome = () => (
//     <div className="w-full px-4 text-center">
//       <div className="mb-8">
//         <div className="flex items-center justify-center">
//           <img
//             src="logo.gif"
//             alt="Logo"
//             className="w-55 h-60 rounded-full object-cover"
//           />
//         </div>
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">AVISHKA KOSWATHTHA</h1>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
//           Computer Engineering graduate currently seeking AI/ML or Data Engineering roles. 
//           Building scalable data pipelines, AI/ML systems, and transforming raw data into meaningful insights..
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
//         <div className="text-center">
//           {/* <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
//                    <div className="flex items-center justify-center">
//           <img
//             src="bar.gif"
//             alt="Logo"
//             className="w-12 h-12 text-blue-600 mx-auto mb-4" 
//           />
//         </div>
//           <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
//           <p className="text-gray-600">
//             Extract insights from datasets & ensure data quality and reliability.
//           </p>
//         </div>
//         <div className="text-center">
//           {/* <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
//           <div className="flex items-center justify-center">
//           <img
//             src="code.gif"
//             alt="Logo"
//             className="w-12 h-12 text-blue-600 mx-auto mb-4" 
//           />
//         </div>
//           <h3 className="text-lg font-semibold mb-2">Pipeline Development</h3>
//           <p className="text-gray-600">
//             Build ETL pipelines for efficient data processing and automation.
//           </p>
//         </div>
//         <div className="text-center">
//           {/* <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" /> */}
//           <div className="flex items-center justify-center">
//           <img
//             src="users.gif"
//             alt="Logo"
//             className="w-12 h-12 text-blue-600 mx-auto mb-4" 
//           />
//         </div>
//           <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
//           <p className="text-gray-600">
//             Work with cross-functional teams to deliver impactful data solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   const renderAbout = () => (
//     <div className="w-screen py-12 bg-white">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
//         <div className="flex items-center justify-center">
//           <img
//             src="me.jpg"
//             alt="avishka koswaththa"
//             className="w-30 h-40 rounded-full mx-auto mb-4" 
//           />
//         </div>      
//       <div className="flex flex-col space-y-12 px-8">
//         <div className="w-full">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Background</h3>
//           <div className="border-l-4 border-blue-500 pl-4"> 
//           <p className="text-gray-700 mb-4">
//             I have completed academic period at University of Ruhuna, BScEng (Hons) in Computer Engineering with a focus on AI/ML and Data Engineering. 
//             Through coursework, projects, and internships, I have built strong skills in data processing, 
//             pipeline development, and analytics.
//           </p>
//           </div>
//           <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-700">Education</h3>
//           <div className="border-l-4 border-blue-500 pl-4">
//             <h4 className="font-semibold text-gray-600">BScEng (Hons) in Computer Engineering</h4>
//             <p className="text-gray-600">University of Ruhuna | Expected 2025</p>
//             <p className="text-gray-600">Focus: AI/ML, Data Engineering & Analytics</p>
//           </div>
//           <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-700">Experience</h3>
//           <div className="border-l-4 border-blue-500 pl-4">
//             <h4 className="font-semibold text-gray-600">Intern Software Engineer</h4>
//             <p className="text-gray-600">eSupport Technologies PVT(LTD)</p>
//             <p className="text-gray-600">08/2024 to 01/2025 (6 Month)</p>
//           </div>
//         </div>

//         <div className="w-full">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
//           {Object.entries(skills).map(([category, skillList]) => (
//             <SkillCategory key={category} category={category} skillList={skillList} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderProjects = () => (
//     <div className="w-full px-4 py-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
//       <p className="text-gray-600 mb-8 text-center">
//         Here are some of my key projects demonstrating my AI, ML and data engineering skills and experience.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );

//   const renderContact = () => (
//     <div className="w-screen py-12 bg-white">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>
//       <p className="text-gray-600 mb-8 text-center px-4">
//         I'm always interested in discussing opportunities or collaborations.
//       </p>
//       <div className="flex flex-wrap justify-center gap-4 mb-8 px-8">
//         <div className="flex items-center space-x-3">
//           <Mail className="text-blue-600" size={20} />
//           <span className="text-gray-700 font-bold">avishkakkoswaththa@gmail.com</span>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Phone className="text-blue-600" size={20} />
//           <span className="text-gray-700 font-bold">(+94) 71 524 1066</span>
//         </div>
//         <div className="flex items-center space-x-3">
//           <MapPin className="text-blue-600" size={20} />
//           <span className="text-gray-700 font-bold">59, 4th Canal, Hasalaka</span>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 mb-8 px-8">
//         <a href="https://github.com/AvishkaKoswatta" className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
//           <Github size={20} />
//           <span>GitHub</span>
//         </a>
//         <a href="http://www.linkedin.com/in/avishkakoswaththa" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//           <Linkedin size={20} />
//           <span>LinkedIn</span>
//         </a>
//       </div>

//       <div className="flex justify-center">
//         {/* <button
//           onClick={() => alert('CV download would start here.')}
//           className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
//         >
//           <Download size={20} />
//           <span>Download CV</span>
//         </button>
//          */}
//          {/* <a
//     href="/Avishka_Koswaththa_Resume_Data_Eng.pdf"
//     download
//     className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
//   >
//     <Download size={20} />
//     <span>Download CV</span>
//   </a> */}
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'home': return renderHome();
//       case 'about': return renderAbout();
//       case 'projects': return renderProjects();
//       case 'contact': return renderContact();
//       default: return renderHome();
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       {/* Navigation */}
//      {/* Navigation */}
// <nav className="bg-white shadow-sm sticky top-0 z-10 w-full">
//   <div className="w-full px-4 py-4 flex justify-end items-center">
//     {/* Left side (optional logo) */}
    

//     {/* Hamburger icon (visible only on mobile) */}
//     <button
//       onClick={() => setMenuOpen(!menuOpen)}
//       className="md:hidden text-gray-700 focus:outline-none"
//     >
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//         />
//       </svg>
//     </button>

//     {/* Nav buttons */}
//     <div
//       className={`flex flex-col md:flex-row md:space-x-2 md:static absolute md:bg-transparent bg-white top-16 left-0 w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
//         menuOpen ? "block" : "hidden md:flex"
//       }`}
//     >
//       <NavButton section="home" label="Home" icon={Database} />
//       <NavButton section="about" label="About" icon={Users} />
//       <NavButton section="projects" label="Projects" icon={Code} />
//       <NavButton section="contact" label="Contact" icon={Mail} />
//     </div>
//   </div>
// </nav>



//       {/* Main Content */}
//       <main className="w-full">
//         {renderContent()}
//       </main>

//       {/* Modal for Project Image */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//                <div className="p-4 text-center">
//               <h2 className="text-xl font-bold text-gray-800">{selectedProject.title}</h2>
//               {/* <button
//                 onClick={() => setSelectedProject(null)}
//                 className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Close
//               </button> */}
//             </div>
//             <img
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               className="w-full h-auto object-contain"
//             />
         
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8 mt-16 w-full text-center">
//         <p className="text-gray-300">
//           © 2025 Avishka Koswaththa. Built with React and Tailwind CSS.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;


import { useState, useEffect, useRef } from "react";
import {
  Database, Cpu, Code2, Mail, Phone, MapPin, Github, Linkedin,
  BarChart3, GitBranch, Cloud, Server, Layers, Zap, Search,
  RefreshCw, BrainCircuit, MessageSquare, FlaskConical, ShieldCheck,
  Package, Workflow, Table2, Wind, Activity, User, FolderKanban,
  ChevronRight, Circle, Sparkles, ArrowRight, Globe, Menu, X
} from "lucide-react";

const NAV = ["Home", "About", "Data Engineering", "AI / ML", "Contact"];



// const DE_SKILLS = [
//   { name: "Python",         sub: "Language",        Icon: Code2 },
//   { name: "Apache Airflow", sub: "Orchestration",   Icon: Workflow },
//   { name: "Apache Spark",   sub: "Big Data",        Icon: GitBranch },
//   { name: "Apache Kafka",   sub: "Streaming",       Icon: Zap },
//   { name: "dbt",            sub: "Data Transformation",      Icon: Activity },
//   { name: "PostgreSQL",     sub: "Database",       Icon: Database },
//   { name: "MySQL",          sub: "Database",       Icon: Table2 },
//   { name: "Snowflake",      sub: "Data Warehouse",          Icon: Cloud },
//   { name: "AWS",            sub: "Cloud", Icon: Package },
//   { name: "Cube",           sub: "Semantic Layer", Icon: Search },
// ];

const DE_SKILLS = [
  { name: "Python",         sub: "Language",        image: "/logos/python.png" },
  { name: "Apache Airflow", sub: "Orchestration",   image: "/logos/apache-airflow.png" },
  { name: "Apache Spark",   sub: "Big Data",        image: "/logos/spark.png" },
  { name: "Apache Kafka",   sub: "Streaming",       image: "/logos/kafka.png" },
  { name: "dbt",            sub: "Data Transformation", image: "/logos/dbt.png" },
  { name: "PostgreSQL",     sub: "Database",        image: "/logos/postgresql.png" },
  { name: "MySQL",          sub: "Database",        image: "/logos/mysql.png" },
  { name: "Snowflake",      sub: "Data Warehouse",  image: "/logos/snowflake.png" },
  { name: "AWS",            sub: "Cloud",           image: "/logos/aws.png" },
  { name: "Cube",           sub: "Semantic Layer",  image: "/logos/cube.png" },
];

const ML_SKILLS = [
  { name: "Machine Learning", sub: "Core AI",       image: "/logos/ml.png" },
  { name: "LLM",              sub: "Generative AI",       image: "/logos/llm.png"},
  { name: "RAG",              sub: "Generative AI", image: "/logos/rag.png" },
  { name: "MLOps",              sub: "AI Ops", image: "/logos/mlops.png" },
  { name: "LLMOps",            sub: "AI Ops",        image: "/logos/llmops.webp" },
  
];

const PROJECTS = [
  { title: "E-commerce Data Pipeline",         tag: "Data Engineering", accent: "#0ea5e9", desc: "Automated ETL pipeline processing e-commerce transactions using Python, Apache Airflow, and PostgreSQL.", tech: ["Python","Apache Airflow","PostgreSQL"], status: "Completed",  Icon: Workflow },
  { title: "Real-time Analytics Dashboard",    tag: "Data Engineering", accent: "#0ea5e9", desc: "Real-time dashboard monitoring patient vitals using Kafka, Debezium and Spark Streaming.", tech: ["Apache Kafka","Spark","Debezium"], status: "Completed",  Icon: Activity },
  { title: "Healthcare Appointment Data Pipeline ", tag: "Data Engineering", accent: "#0ea5e9", desc: "Designed and implemented an end-to-end healthcare appointment data pipeline that ingests real-time events.", tech: ["Amazon S3", "dbt", "Kafka", "Snowflake", "Airflow"], status: "Completed",  Icon: ShieldCheck },
  { title: "AI Loan Default Prediction",       tag: "AI / ML",          accent: "#8b5cf6", desc: "Final year undergraduate project — AI aided loan default prediction model for small scale financial institutions.", tech: ["ML","AI","Python"], status: "On Going",   Icon: BrainCircuit },
  { title: "Carbon Footprint Chatbot",         tag: "AI / ML",          accent: "#8b5cf6", desc: "Domain-specific chatbot with LoRA fine-tuned Mistral 7B and RAG pipeline using FAISS + Hugging Face.", tech: ["Python","LLM","RAG","FAISS"], status: "Completed",  Icon: MessageSquare },
  { title: "Bank Document Verification (OCR)", tag: "AI / ML",          accent: "#8b5cf6", desc: "Hybrid OCR + CRNN system to extract and verify information from scanned bank documents.", tech: ["OCR","CRNN","Python"], status: "Completed",  Icon: FlaskConical },
];

/* ─── Animated skill row ─── */
function SkillRow({ name, sub, image, accent, idx }) {
  const [on, setOn] = useState(false);
  const [ticked, setTicked] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setOn(true),     idx * 65);
        setTimeout(() => setTicked(true), idx * 65 + 420);
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [idx]);

  return (
    <div ref={ref} style={{
      display: "flex", alignItems: "center", marginBottom: 8,
      opacity: on ? 1 : 0, transform: on ? "none" : "translateX(-18px)",
      transition: `opacity .4s ease ${idx*.065}s, transform .4s ease ${idx*.065}s`,
    }}>
      {/* pill */}
      <div style={{
        display:"flex", alignItems:"center", gap:10,
        background:"#fff", border:`1.5px solid ${accent}28`,
        borderRadius:10, padding:"9px 14px", width:220, flexShrink:0,
        boxShadow:"0 1px 5px rgba(0,0,0,.05)",
      }}>
        {/* <div style={{ color: accent }}><Icon size={18} strokeWidth={1.8}/></div> */}
        <div style={{
  width: 20,
  height: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
  <img
    src={image}
    alt={name}
    style={{
      width: "50px",
      height: "50px",
      
      objectFit: "contain"
    }}
  />
</div>
        <div>
          <div style={{ fontWeight:700, fontSize:"0.83rem", color:"#1e293b", lineHeight:1.2 }}>{name}</div>
          <div style={{ fontSize:"0.68rem", color:"#94a3b8", marginTop:1 }}>{sub}</div>
        </div>
      </div>

      {/* dashed line */}
      <div style={{ flex:1, margin:"0 10px", position:"relative", height:14, overflow:"visible" }}>
        <svg width="100%" height="14" style={{ position:"absolute", top:0, left:0 }}>
          <line x1="0" y1="7" x2="100%" y2="7"
            stroke={accent} strokeWidth="1.6" strokeDasharray="5 4" opacity="0.45"
            style={{
              strokeDashoffset: on ? 0 : 300,
              transition: `stroke-dashoffset .85s ease ${idx*.065+.1}s`,
            }}
          />
        </svg>
        {ticked && (
          <div style={{
            position:"absolute", top:3, left:0,
            width:8, height:8, borderRadius:"50%", background:accent,
            animation:`slidePill 2.2s linear ${idx*.1}s infinite`,
          }}/>
        )}
      </div>

      {/* checkmark box */}
      <div style={{
        width:34, height:34, borderRadius:8, flexShrink:0,
        background: ticked ? accent : "#f8fafc",
        border: `2px solid ${ticked ? accent : "#e2e8f0"}`,
        display:"flex", alignItems:"center", justifyContent:"center",
        transition: `background .3s ease ${idx*.065+.48}s, border-color .3s ease ${idx*.065+.48}s`,
        boxShadow: ticked ? `0 0 0 3px ${accent}22` : "none",
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7l3 3L11.5 3.5"
            stroke={ticked ? "#fff" : "#cbd5e1"}
            strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"
            style={{
              strokeDasharray:18, strokeDashoffset: ticked ? 0 : 18,
              transition:`stroke-dashoffset .35s ease ${idx*.065+.58}s`,
            }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── Project card ─── */
function PCard({ p }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background:"#fff", borderRadius:14, padding:"1.4rem",
        border:`1.5px solid ${hov ? p.accent+"55" : "#e2e8f0"}`,
        boxShadow: hov ? `0 12px 32px rgba(0,0,0,.08)` : "0 1px 4px rgba(0,0,0,.04)",
        transform: hov ? "translateY(-3px)" : "none",
        transition:"all .25s ease", display:"flex", flexDirection:"column", gap:10,
      }}
    >
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.09em", textTransform:"uppercase", color:p.accent, background:p.accent+"14", padding:"3px 9px", borderRadius:100, border:`1px solid ${p.accent}28` }}>{p.tag}</span>
        <span style={{ fontSize:"0.67rem", fontWeight:700, color:p.status==="Completed"?"#16a34a":"#d97706", background:p.status==="Completed"?"#dcfce7":"#fef3c7", padding:"3px 9px", borderRadius:100 }}>{p.status}</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ width:34, height:34, borderRadius:9, background:p.accent+"12", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <p.Icon size={17} color={p.accent} strokeWidth={1.9}/>
        </div>
        <h3 style={{ fontWeight:700, fontSize:"0.92rem", color:"#0f172a", lineHeight:1.3 }}>{p.title}</h3>
      </div>
      <p style={{ fontSize:"0.79rem", color:"#64748b", lineHeight:1.75 }}>{p.desc}</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginTop:"auto" }}>
        {p.tech.map(t=>(
          <span key={t} style={{ fontSize:"0.69rem", color:"#475569", background:"#f1f5f9", padding:"2px 8px", borderRadius:100, border:"1px solid #e2e8f0" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Section header ─── */
function SHead({ eyebrow, title, accent="#0ea5e9" }) {
  return (
    <div style={{ marginBottom:"2.5rem" }}>
      <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:accent, marginBottom:"0.5rem" }}>{eyebrow}</p>
      <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,2.8vw,2.6rem)", fontWeight:800, color:"#0f172a", letterSpacing:"-0.025em" }}>{title}</h2>
    </div>
  );
}

/* ─── Cap card ─── */
function CapCard({ icon: Icon, title, desc, accent }) {
  return (
    <div style={{ background:"#fff", border:"1.5px solid #e8edf3", borderRadius:12, padding:"1.1rem", boxShadow:"0 1px 4px rgba(0,0,0,.04)" }}>
      <div style={{ width:34, height:34, borderRadius:8, background:accent+"14", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:8 }}>
        <Icon size={17} color={accent} strokeWidth={1.9}/>
      </div>
      <h4 style={{ fontWeight:700, fontSize:"0.85rem", color:"#0f172a", marginBottom:3 }}>{title}</h4>
      <p style={{ fontSize:"0.78rem", color:"#64748b", lineHeight:1.7 }}>{desc}</p>
    </div>
  );
}

export default function Portfolio() {
  const [page, setPage]   = useState("Home");
  const [menu, setMenu]   = useState(false);
  const [scrolled, setSc] = useState(false);

  useEffect(()=>{
    const fn = ()=>setSc(window.scrollY>6);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const go = p => { setPage(p); setMenu(false); window.scrollTo(0,0); };

  /* shared section wrapper — full width, generous side padding */
  const W = ({ children, style={} }) => (
    <div style={{ width:"100%", padding:"3.5rem 5vw 5rem", ...style }}>
      {children}
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", width:"100%", background:"#f8fafc", fontFamily:"'DM Sans','Segoe UI',sans-serif", color:"#1e293b" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body { width:100%; overflow-x:hidden; }
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#f1f5f9}
        ::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}
        @keyframes fadeUp{ from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slidePill{ 0%{left:0;opacity:1} 85%{opacity:1} 100%{left:calc(100% - 8px);opacity:0} }
        @keyframes pulse{ 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.5);opacity:1} }
        @keyframes moveRight{ 0%{transform:translateX(0)} 50%{transform:translateX(6px)} 100%{transform:translateX(0)} }
        .sec{ animation:fadeUp .5s ease forwards }
        .nb{ background:none; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:.83rem; font-weight:500; padding:7px 13px; border-radius:8px; color:#64748b; transition:all .2s; white-space:nowrap; }
        .nb:hover{ color:#0f172a; background:#f1f5f9; }
        .nb.on{ color:#0369a1; background:#e0f2fe; font-weight:700; }
        .g2{ display:grid; grid-template-columns:1fr 1fr; gap:1.4rem; }
        .g3{ display:grid; grid-template-columns:repeat(3,1fr); gap:1.1rem; }
        .g4{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
        .hero-grid{ display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
        @media(max-width:1100px){ .g4{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:860px){ .g3{grid-template-columns:1fr 1fr} .hero-grid{grid-template-columns:1fr} }
        @media(max-width:600px){ .g2,.g3,.g4{grid-template-columns:1fr} .desk{display:none!important} .burg{display:flex!important} .hero-svg{display:none!important} }
        .burg{ display:none; align-items:center; justify-content:center; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:8px; width:36px; height:36px; cursor:pointer; color:#475569; }
        a{ text-decoration:none; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position:"sticky", top:0, zIndex:200, width:"100%",
        background:"rgba(248,250,252,.94)", backdropFilter:"blur(16px)",
        borderBottom:"1px solid #e2e8f0",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,.06)" : "none",
        transition:"box-shadow .3s",
      }}>
        <div style={{ width:"100%", padding:"0 5vw", display:"flex", justifyContent:"space-between", alignItems:"center", height:56 }}>
          <div onClick={()=>go("Home")} style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.1rem", color:"#0f172a", cursor:"pointer", letterSpacing:"-0.02em", userSelect:"none" }}>
            <span style={{ color:"#0ea5e9" }}>A</span>VISHKA
          </div>
          <div className="desk" style={{ display:"flex", gap:2 }}>
            {NAV.map(n=>(
              <button key={n} className={`nb${page===n?" on":""}`} onClick={()=>go(n)}>{n}</button>
            ))}
          </div>
          <button className="burg" onClick={()=>setMenu(!menu)}>
            {menu ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
        {menu && (
          <div style={{ background:"#fff", borderTop:"1px solid #f1f5f9", padding:"0.5rem 5vw 1rem" }}>
            {NAV.map(n=>(
              <button key={n} className={`nb${page===n?" on":""}`} style={{ display:"block", width:"100%", textAlign:"left", marginBottom:2 }} onClick={()=>go(n)}>{n}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HOME ── */}
      {page==="Home" && (
        <W style={{ minHeight:"calc(100vh - 56px)", display:"flex", alignItems:"center", paddingTop:"2rem", paddingBottom:"2rem" }}>
          <div className="hero-grid" style={{ width:"100%" }}>
            {/* Left */}
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#e0f2fe", border:"1px solid #bae6fd", borderRadius:100, padding:"4px 13px", marginBottom:"1.4rem" }}>
                {/* <span style={{ width:7, height:7, borderRadius:"50%", background:"#0ea5e9", animation:"pulse 2s ease-in-out infinite", display:"block" }}/> */}
                <span style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#10b981" }}>Open to Work</span>
              </div>
              <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.6rem,5vw,4.5rem)", fontWeight:800, lineHeight:1.03, letterSpacing:"-0.03em", color:"#0f172a", marginBottom:"1.1rem" }}>
                Avishka<br/><span style={{ color:"#0ea5e9" }}>Koswaththa</span>
              </h1>
              <p style={{ fontSize:"1rem", color:"#64748b", lineHeight:1.85, maxWidth:480, marginBottom:"1.8rem" }}>
                Computer Engineering graduate building scalable data pipelines, AI/ML systems, and transforming raw data into meaningful insights.
              </p>

              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:"1.8rem" }}>
                <button onClick={()=>go("Projects")} style={{ padding:"10px 22px", background:"#0ea5e9", color:"#fff", border:"none", borderRadius:9, fontWeight:700, fontSize:"0.87rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", boxShadow:"0 4px 14px #0ea5e92e", display:"flex", alignItems:"center", gap:6 }}>
                  View Projects <ArrowRight size={15}/>
                </button>
                <button onClick={()=>go("Contact")} style={{ padding:"10px 22px", background:"#fff", color:"#475569", border:"1.5px solid #e2e8f0", borderRadius:9, fontWeight:600, fontSize:"0.87rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>
                  Get in Touch
                </button>
              </div>

              

              {/* Stats */}
              <div style={{ display:"flex", gap:"2.5rem", paddingTop:"1.8rem", borderTop:"1px solid #e8edf3", flexWrap:"wrap" }}>
                {/* Specialisation pills */}
              <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:"2rem" }}>
                {[
                  { label:"Data Engineering", color:"#0ea5e9", bg:"#e0f2fe", p:"Data Engineering" },
                  { label:"AI / ML",          color:"#8b5cf6", bg:"#ede9fe", p:"AI / ML" },
                ].map(c=>(
                  <button key={c.label} onClick={()=>go(c.p)} style={{ display:"flex", alignItems:"center", gap:5, padding:"6px 14px", background:c.bg, color:c.color, border:`1.5px solid ${c.color}28`, borderRadius:8, fontWeight:700, fontSize:"0.77rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>
                    {c.label} <ChevronRight size={13}/>
                  </button>
                ))}
              </div>
              </div>
            </div>

            {/* Right — data flow SVG */}
            <div className="hero-svg" style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
              <svg viewBox="0 0 460 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", maxWidth:460 }}>
                <defs>
                  <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.2" fill="#cbd5e1" opacity="0.6"/>
                  </pattern>
                  <filter id="s1"><feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0ea5e9" floodOpacity="0.1"/></filter>
                  <filter id="s2"><feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#8b5cf6" floodOpacity="0.1"/></filter>
                </defs>
                <rect width="460" height="420" fill="url(#dots)" rx="18"/>

                {/* Dashed connectors */}
                {[
                  [80,85,230,205,"#0ea5e9"],[380,85,230,205,"#0ea5e9"],
                  [80,335,230,215,"#8b5cf6"],[380,335,230,215,"#8b5cf6"],
                  [230,238,230,352,"#10b981"],
                ].map(([x1,y1,x2,y2,c],i)=>(
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={c} strokeWidth="1.8" strokeDasharray="5 4" opacity="0.45"/>
                ))}

                {/* Moving particles */}
                {[
                  { path:"M80,85 L230,205",  c:"#0ea5e9", dur:"2s",   start:"0s"   },
                  { path:"M380,85 L230,205", c:"#0ea5e9", dur:"2.4s", start:"0.5s" },
                  { path:"M80,335 L230,215", c:"#8b5cf6", dur:"2.8s", start:"0.8s" },
                  { path:"M380,335 L230,215",c:"#8b5cf6", dur:"3.1s", start:"1.2s" },
                  { path:"M230,238 L230,353",c:"#10b981", dur:"1.8s", start:"1s"   },
                ].map(({path,c,dur,start},i)=>(
                  <circle key={i} r="4.5" fill={c} opacity="0.85">
                    <animateMotion dur={dur} begin={start} repeatCount="indefinite" path={path}/>
                  </circle>
                ))}

                {/* Source nodes */}
                {[
                  { x:80,  y:85,  label:"Data",   sub:"Tools/Concepts",   c:"#0ea5e9", f:"url(#s1)" },
                  { x:380, y:85,  label:"Pipelines",  sub:"ETL/ELT",     c:"#0ea5e9", f:"url(#s1)" },
                  { x:80,  y:335, label:"ML",  sub:"ML Models",  c:"#8b5cf6", f:"url(#s2)" },
                  { x:380, y:335, label:"LLM / RAG",  sub:"Advanced AI", c:"#8b5cf6", f:"url(#s2)" },
                ].map(({x,y,label,sub,c,f})=>(
                  <g key={label} filter={f}>
                    <rect x={x-50} y={y-34} width="100" height="68" rx="14" fill="#fff" stroke={c} strokeWidth="1.4" opacity="0.9"/>
                    <text x={x} y={y-8}  textAnchor="middle" fontSize="10" fill={c} fontWeight="800" fontFamily="Syne,sans-serif">{label}</text>
                    <text x={x} y={y+10} textAnchor="middle" fontSize="9"  fill="#94a3b8" fontFamily="DM Sans,sans-serif">{sub}</text>
                  </g>
                ))}

                {/* Centre */}
                <g filter="url(#s1)">
                  <rect x={168} y={183} width="124" height="52" rx="14" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.8"/>
                  <text x="230" y="206" textAnchor="middle" fontSize="10.5" fill="#0ea5e9" fontWeight="800" fontFamily="Syne,sans-serif">Data & AI/ML</text>
                                  </g>

                {/* Output */}
                <rect x={176} y={356} width="108" height="38" rx="10" fill="#10b981"/>
                <text x="230" y="379" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700" fontFamily="DM Sans,sans-serif">Insights ✦</text>
              </svg>
            </div>
          </div>
        </W>
      )}

      {/* ── ABOUT ── */}
      {page==="About" && (
        <W className="sec">
          <SHead eyebrow="WHO I AM" title="About Me"/>
          <div className="g2" style={{ alignItems:"start" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.1rem" }}>
              {[
                { label:"Background", accent:"#0ea5e9", border:"#bae6fd", text:"Completed academic period at University of Ruhuna with a deep focus on AI/ML and Data Engineering. Through coursework, projects, and an internship I've built strong foundations in data systems and intelligent applications." },
                { label:"Education",  accent:"#0ea5e9", border:"#bae6fd",
                  content: <div style={{ borderLeft:"3px solid #bae6fd", paddingLeft:14 }}>
                    <p style={{ fontWeight:700, color:"#0f172a", fontSize:"0.9rem" }}>BScEng (Hons) Computer Engineering</p>
                    <p style={{ color:"#64748b", fontSize:"0.82rem", marginTop:3 }}>University of Ruhuna</p>
                    <p style={{ color:"#94a3b8", fontSize:"0.77rem", marginTop:2 }}>2021/March - 2026/January · AI/ML, Data Engineering & Analytics</p>
                  </div>
                },
              ].map(c=>(
                <div key={c.label} style={{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:14, padding:"1.5rem", boxShadow:"0 1px 5px rgba(0,0,0,.04)" }}>
                  <div style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:c.accent, marginBottom:10 }}>{c.label}</div>
                  {c.content ?? <p style={{ color:"#64748b", lineHeight:1.85, fontSize:"0.87rem" }}>{c.text}</p>}
                </div>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.1rem" }}>
              <div style={{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:14, padding:"1.5rem", boxShadow:"0 1px 5px rgba(0,0,0,.04)" }}>
                <div style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#8b5cf6", marginBottom:10 }}>Experience</div>
                <div style={{ borderLeft:"3px solid #ddd6fe", paddingLeft:14 }}>
                  <p style={{ fontWeight:700, color:"#0f172a", fontSize:"0.9rem" }}>Intern Software Engineer</p>
                  <p style={{ color:"#64748b", fontSize:"0.82rem", marginTop:3 }}>eSupport Technologies PVT(LTD)</p>
                  <p style={{ color:"#94a3b8", fontSize:"0.77rem", marginTop:2 }}>08/2024 – 01/2025 · 6 Months</p>
                  <p style={{ color:"#94a3b8", fontSize:"0.77rem", marginTop:2 }}>• Collaborated in developing multiple full-stack web applications using Laravel and MySQL.</p>
              
                  
                </div>
              </div>
              <div style={{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:14, padding:"1.5rem", boxShadow:"0 1px 5px rgba(0,0,0,.04)" }}>
                <div style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#8b5cf6", marginBottom:10 }}>Core Interests</div>
                {["Scalable data pipelines & orchestration","Fine-tuning large language models","MLOps & DataOps"].map(item=>(
                  <div key={item} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                    <div style={{ width:18, height:18, borderRadius:5, background:"#ede9fe", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <ShieldCheck size={10} color="#8b5cf6" strokeWidth={2.2}/>
                    </div>
                    <span style={{ fontSize:"0.83rem", color:"#64748b" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </W>
      )}

      {/* ── DATA ENGINEERING ── */}
      {page==="Data Engineering" && (
        <W className="sec">
          <SHead eyebrow="SPECIALISATION" title="Data Engineering" accent="#0ea5e9"/>
          <div className="g2" style={{ alignItems:"start", marginBottom:"3rem" }}>
            <div>
              <p style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#0ea5e9", marginBottom:12 }}>Skills</p>
              {DE_SKILLS.map((s,i)=><SkillRow key={s.name} {...s} accent="#0ea5e9" idx={i}/>)}
            </div>
            <div>
              <p style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#0ea5e9", marginBottom:12 }}>Capabilities</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <CapCard icon={Workflow}   title="Pipeline Orchestration"  accent="#0ea5e9" desc="Designing and scheduling DAG-based workflows with Apache Airflow for reliable automated data movement."/>
                <CapCard icon={Zap}        title="Batch & Stream Processing" accent="#0ea5e9" desc="Processing datasets with Apache Spark and building real-time event streams with Kafka."/>
                <CapCard icon={GitBranch}  title="Data Transformation (dbt)" accent="#0ea5e9" desc="Writing modular, testable SQL transformations using dbt to build analytics-ready data models."/>
                <CapCard icon={ShieldCheck}title="Cloud Platforms"              accent="#0ea5e9" desc="Use AWS services to ingest, move and transform data."/>
              </div>
            </div>
          </div>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"#0f172a", marginBottom:14 }}>Related Projects</p>
          <div className="g3">{PROJECTS.filter(p=>p.tag==="Data Engineering").map((p,i)=><PCard key={i} p={p}/>)}</div>
        </W>
      )}

      {/* ── AI / ML ── */}
      {page==="AI / ML" && (
        <W className="sec">
          <SHead eyebrow="SPECIALISATION" title="AI / ML Engineering" accent="#8b5cf6"/>
          <div className="g2" style={{ alignItems:"start", marginBottom:"3rem" }}>
            <div>
              <p style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#8b5cf6", marginBottom:12 }}>Skills</p>
              {ML_SKILLS.map((s,i)=><SkillRow key={s.name} {...s} accent="#8b5cf6" idx={i}/>)}
            </div>
            <div>
              <p style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.13em", textTransform:"uppercase", color:"#8b5cf6", marginBottom:12 }}>Capabilities</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <CapCard icon={BrainCircuit}  title="Classical ML"  accent="#8b5cf6" desc="Training classification, and regression models."/>
                <CapCard icon={MessageSquare} title="LLMs"           accent="#8b5cf6" desc="Building, fine-tuning and prompt engineering LLMs."/>
                <CapCard icon={Search}        title="RAG Pipelines"        accent="#8b5cf6" desc="Retrieval-augmented generation with vector stores and Hugging Face for grounded AI responses."/>
                <CapCard icon={RefreshCw}     title="MLOps & LLMOps"      accent="#8b5cf6" desc="Model lifecycle management — versioning, experiment tracking, deployment and monitoring in production."/>
              </div>
            </div>
          </div>
          <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"#0f172a", marginBottom:14 }}>Related Projects</p>
          <div className="g3">{PROJECTS.filter(p=>p.tag==="AI / ML").map((p,i)=><PCard key={i} p={p}/>)}</div>
        </W>
      )}

      {/* ── PROJECTS ── */}
      {page==="Projects" && (
        <W className="sec">
          <SHead eyebrow="PORTFOLIO" title="All Projects"/>
          <div className="g3">{PROJECTS.map((p,i)=><PCard key={i} p={p}/>)}</div>
        </W>
      )}

      {/* ── CONTACT ── */}
      {page==="Contact" && (
        <W className="sec">
          <SHead eyebrow="GET IN TOUCH" title="Let's Connect"/>
          <div className="g3" style={{ alignItems:"start" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}>
              {[
                { Icon:Mail,   label:"Email",    value:"avishkakkoswaththa@gmail.com", href:"mailto:avishkakkoswaththa@gmail.com" },
                { Icon:Phone,  label:"Phone",    value:"(+94) 71 524 1066",           href:"tel:+94715241066" },
                { Icon:MapPin, label:"Location", value:"59, 4th Canal, Hasalaka, Sri Lanka" },
              ].map(item=>(
                <div key={item.label} style={{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"1.1rem", display:"flex", alignItems:"center", gap:12, boxShadow:"0 1px 4px rgba(0,0,0,.04)" }}>
                  <div style={{ width:36, height:36, background:"#e0f2fe", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <item.Icon size={17} color="#0ea5e9" strokeWidth={1.9}/>
                  </div>
                  <div>
                    <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#94a3b8", marginBottom:2 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ color:"#0ea5e9", fontSize:"0.83rem", fontWeight:500 }}>{item.value}</a>
                      : <span style={{ color:"#475569", fontSize:"0.83rem" }}>{item.value}</span>}
                  </div>
                </div>
              ))}
            </div>
             <div style={{ background:"linear-gradient(135deg,#f0f9ff,#f5f3ff)", border:"1.5px solid #bae6fd", borderRadius:12, padding:"1.5rem", textAlign:"center" }}>
                <Sparkles size={28} color="#0ea5e9" strokeWidth={1.6} style={{ marginBottom:8, display:"block", margin:"0 auto 8px" }}/>
                <p style={{ fontSize:"0.82rem", color:"#475569", lineHeight:1.85 }}>
                  Seeking roles in <span style={{ color:"#0ea5e9", fontWeight:700 }}>AI/ML Engineering</span> or <span style={{ color:"#8b5cf6", fontWeight:700 }}>Data Engineering</span>.
                </p>
                           <img
            src="me.jpg"
             alt="avishka koswaththa"
             className="w-30 h-40 rounded-full mx-auto mb-4" 
          />
              </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}>
              {[
                { Icon:Github,   label:"GitHub",   value:"AvishkaKoswatta",     href:"https://github.com/AvishkaKoswatta" },
                { Icon:Linkedin, label:"LinkedIn", value:"avishkakoswaththa",   href:"http://www.linkedin.com/in/avishkakoswaththa" },
                { Icon:Globe,    label:"Portfolio", value:"Open to opportunities" },
              ].map(item=>(
                <div key={item.label}
                  onClick={item.href ? ()=>window.open(item.href,"_blank") : undefined}
                  style={{ background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"1.1rem", display:"flex", alignItems:"center", gap:12, boxShadow:"0 1px 4px rgba(0,0,0,.04)", cursor:item.href?"pointer":"default", transition:"border-color .2s" }}
                  onMouseEnter={e=>{ if(item.href) e.currentTarget.style.borderColor="#bae6fd"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor="#e2e8f0"; }}
                >
                  <div style={{ width:36, height:36, background:"#f5f3ff", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <item.Icon size={17} color="#8b5cf6" strokeWidth={1.9}/>
                  </div>
                  <div>
                    <div style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#94a3b8", marginBottom:2 }}>{item.label}</div>
                    <span style={{ color: item.href?"#0ea5e9":"#64748b", fontSize:"0.83rem", fontWeight:item.href?500:400 }}>{item.value}</span>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </W>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ borderTop:"1px solid #e2e8f0", background:"#fff", padding:"1.2rem 5vw", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
        <span style={{ fontSize:"0.74rem", color:"#94a3b8" }}>© 2026 Avishka Koswaththa</span>
        <div style={{ display:"flex", gap:12 }}>
          <a href="https://github.com/AvishkaKoswatta" target="_blank" rel="noreferrer">
            <Github size={17} color="#94a3b8" strokeWidth={1.8}/>
          </a>
          <a href="http://www.linkedin.com/in/avishkakoswaththa" target="_blank" rel="noreferrer">
            <Linkedin size={17} color="#94a3b8" strokeWidth={1.8}/>
          </a>
          <a href="mailto:avishkakkoswaththa@gmail.com">
            <Mail size={17} color="#94a3b8" strokeWidth={1.8}/>
          </a>
        </div>
      </footer>
    </div>
  );
}
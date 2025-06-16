import { FaReact, FaNode, FaCss3Alt,FaJava,FaPython}  from 'react-icons/fa';
import { FaFontAwesomeIcon } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { SiJavascript} from 'react-icons/si';

import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"
import Project4 from "../assets/Project4.jpg"
import Project_Codesensei from "../assets/Project_Codesensei.png"
import { TiHtml5 } from "react-icons/ti";
import { BsFiletypeSql } from "react-icons/bs";
import { SiPytorch } from 'react-icons/si';
import { SiMusicbrainz } from "react-icons/si";

export const Skills = [
    {
        id:0,
        tech: 'React JS',
        icon: <FaReact />,
        progress: 70,
    },
  
    {
        id: 1,
        tech: 'CSS',
        icon: <FaCss3Alt />,
        progress: 90,

    },
    {
        id: 2,
        tech: 'HTML',
        icon:<TiHtml5 />,
        progress:90
    },
    {
        id:3,
        tech: "JavaScipt",
        icon: <SiJavascript />,
        progress: 80,

    },
    {
        id: 4,
        tech: 'Node JS',
        icon: <FaNode />,
        progress: 70,
    },
    
    {
        id:5,
        tech: 'SQL',
        icon:<BsFiletypeSql />,
        progress: 80
    },
    {
        id:6,
        tech:'Java',
        icon:<FaJava />,
        progress: 80
    },
    {
        id:7,
        tech:'Python',
        icon:<FaPython />,
        progress: 85
    },
    {
        id:8,
        tech:'PyTorch',
        icon:<SiPytorch />,
        progress: 20
    },
    {
        id: '10',
        tech: 'Deep Learning',
        icon:<SiMusicbrainz />,
        progress: '40'
    }

]


export const projectDetails = [

    {
        id: 0,
        Project_name:"Crowd Control and Management using DL",
        Project_desc: " A fine YOLO model was fine tuned to track people in input video source, 2d scenes were converted into overhead 3d scene using automated homography and a heatmap is generated to detect violations. This helps and aids authorities to track and manage crowds at various public spaces. The system was tested using live video source from public spaces at college campus.",
        tech_stack: ["Pytorch","Python"],
        project_img: Project1,
        project_url: "https://github.com/JANARDHANAREDDYMS/yoloposemodel.git",
        video_url: "",
        reverse: false,
},
{
    id: 1,
        Project_name:"NYU Enrolls",
        Project_desc: " Developed an improved version of the college enrollment application. The algorithm used to waitlist into courses was changed to incorporate priority based waitlisting. Bugs present in the existing system were also fixed. We integrated a Pre Registration analytics where courses can be added and drop before the enrollment begins. ",
        tech_stack: ["Django","Python","Postgres","AWS"],
        project_img: Project2,
        project_url: "https://github.com/JANARDHANAREDDYMS/nyuenrolls.git",
        video_url: "https://drive.google.com/file/d/12kNKhO__RF1DxRTBmKau9c6A3iqdAxxc/view?usp=share_link",
        reverse: true,
},
{
    id:2,
    Project_name:"Code Sensei",
    Project_desc: "An AI-powered interview platform for Computer Science students to practice for technical Interviews. An AI agent powered by the MCP server generates an assessment for the users based on the input prompt and the previous performance of the user. LLM to provide constrained, context-aware hints as a helper during the interview process. Code execution and compiler services were implemented using ECS with Fargate to scale based on demand for 10,000+ consecutive users. Cached performance and prompts to reduce latency and calls to Bedrock LLM. ",
    tech_stack:["AWS","EKS","Open Search","MCP","TypeScript"],
    project_img: Project_Codesensei,
    project_url: "https://github.com/JANARDHANAREDDYMS/CodeSensei",
    video_url: "https://www.youtube.com/watch?v=T0FAQEtJMJY",
    reverse: false,
},
{
    id:3,
    Project_name:"Sephora Recommendation System",
    Project_desc: "Implemented a deep learning model with multilayer neural architecture using TensorFlow/Keras, including embedding layers and batch normalization, to recommend Sephora products based on user attributes like skin, hair, and product preferences, using an open-source dataset of Sephora sales, products, and reviews, while also considering price consciousness, with positive user testing feedback from college students. ",
    tech_stack:["Python","Keras","PyTorch"],
    project_img: Project3,
    project_url: "https://github.com/JANARDHANAREDDYMS/mlproject.git",
    video_url: "",
    reverse: false,
},
{
    id: 4,
    Project_name:"Automated Lane Detection System",
    Project_desc: "An automated lane detection system using open source libraries like OpenCV,NumPy,Pandas. The system uses the principles of Hough Transform for lane detection using up vote technique",
    tech_stack: ["Python","OpenCv"],
    project_img: Project4,
    project_url: "https://github.com/JANARDHANAREDDYMS/LANEDETECTION.git",
    video_url: "",
    reverse: true,
}
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 0,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 0,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 0,
        name: 'Contact',
        href: 'contact'
    }
]
















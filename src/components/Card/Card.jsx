import React from 'react';
import './Card.css'; // Updated custom CSS styles
import { 
  FaPython, FaGithub, FaReact, FaJava, FaDocker
} from 'react-icons/fa';
import { SiCplusplus, SiPython, SiHtml5, SiKubernetes, 
  SiDjango, SiOctopusdeploy, SiJenkins, SiNginx, SiRedis,
  SiAmazonroute53, SiAmazons3, SiAmazonec2, SiJavascript, SiTypescript, SiCelery, SiApachekafka } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";


const Card = () => {
  const projects = [
    {
      name: 'Signals',
      description: (
      <>
        A KPI Management System built for <a href="https://www.bpe.gov.ng/" target="_blank" rel="noreferrer"> BPE </a> 
        to help monitor one of it's subsidiary an Electricity distribution company and it's branches to meet it's set out goals
        for the year.
      </>
      ),

      icons: [<FaGithub/>, ' ', <FaPython/>, ' ', <FaDocker/>, ' ', 
      <SiKubernetes/>, ' ', <SiJavascript/>, ' ',  <FaReact/>, ' ',<SiDjango/>, ' ',<SiJenkins/>, ' ',
      <SiNginx/>, ' ',<SiRedis/>, ' ',<SiOctopusdeploy/>, ' ',<SiAmazonroute53/>, ' ',<SiAmazons3/>, ' ',<SiAmazonec2/>,
      ' ', <SiCelery/>
      ],
      link: '#',
      type: 'project',
    },
    {
      name: 'Tensorflow',
      description: (
      <>
        An end-to-end open source machine learning platform for everyone. 
        Discover TensorFlow's flexible ecosystem of tools, libraries and community resources.
      </>
      ),
      icons: [<SiCplusplus/>, ' ', <SiPython/>, ' ', <SiHtml5/>, ' ', <FaGolang/>],
      link: 'https://github.com/MrChike/tensorflow',
      type: 'contribution',
    },
    {
      name: 'Plaex',
      description: (
      <>
        <a href="https://plaex.net/" target="_blank" rel="noreferrer"> PLAEX Technologies </a> is a sustainability 
        IT Services firm based in Enschede, The Netherlands, that develops smart waste management 
        technologies to make the tomorrow of circularity happen today! Our solutions reduce waste-related expenses, 
        greenhouse gas emissions, and positively impacts the environment. Key technologies: AI, ML, Robotics, IoT, API
      </>
      ),
      icons: [<FaGithub/>, ' ', <FaPython/>, ' ', <FaDocker/>, ' ', <FaJava/>, ' ', <FaReact/>],
      link: 'https://dashboard.plaex.net/login',
      type: 'project',
    },
    {
      name: 'Trail',
      description: (
      <>
        Trail is a cloud-based Corporate Performance Tracking, Monitoring and Impact Assurance tool that enables 
        organizations drive efficiency, performance, and growth leveraging the power of data, automation and 
        gamification technology for <a href="https://venturegardengroup.com/" target="_blank" rel="noreferrer"> Venture Garden Group </a> 
      </>
      ),
      icons: [<FaGithub/>, ' ', <FaPython/>, ' ', <FaDocker/>, ' ', 
      <SiKubernetes/>, ' ', <SiJavascript/>, ' ',  <FaReact/>, ' ',<SiDjango/>, ' ',<SiJenkins/>, ' ',
      <SiNginx/>, ' ',<SiRedis/>, ' ',<SiOctopusdeploy/>, ' ',<SiAmazonroute53/>, ' ',<SiAmazons3/>, ' ',<SiAmazonec2/>,
      ' ', <SiApachekafka/>
      ],
      link: 'https://www.mytrail.io/',
      type: 'project',
    },
    {
      name: 'EUV Methrology Scanner',
      description: (
      <>
        <a href="https://www.asml.com/en" target="_blank" rel="noreferrer"> ASML </a> is a Dutch company and one of the leading suppliers of 
        photolithography equipment used in the semiconductor industry. Founded in 1984, ASML plays a crucial role in 
        the manufacturing of integrated circuits, enabling the production of smaller, faster, and more efficient microchips.
      </>
      ),
      icons: [<SiCplusplus/>, ' ', <SiPython/>, ' ', <FaJava/>],
      link: 'https://www.asml.com/en/products/euv-lithography-systems/twinscan-exe-5000',
      type: 'project',
    },
  ];
  return (
    <div className="project-list">
      {projects.map((repo, index) => (
        <div className="repo-card" key={index}>
          <div className="repo-header">
            <a href={repo.link} className="repo-name" target="_blank" rel="noreferrer">{repo.name}</a>
            <span className="repo-badge modern-button">{repo.type}</span>
          </div>
          <p className="repo-description">{repo.description}</p>
          <div className="repo-language">
            <span style={{fontSize: '17px'}}>{repo.icons}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

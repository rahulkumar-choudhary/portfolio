import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rahulkumar Manohar Choudhary",
  initials: "RC",
  url: "https://rahulkumar-choudhary.online",
  location: "Arlington, TX",
  locationLink: "https://www.google.com/maps/place/arlington",
  description:
    "Cloud and DevOps Engineer with a passion for optimizing IT infrastructure and accelerating software delivery. Committed to driving innovation and efficiency through automation, continuous integration, and a holistic approach to DevOps practice I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I'm passionate about automation, cloud security, and scalable infrastructure. I've led microservice migrations to EKS, built high-availability Kubernetes clusters with Terraform, and developed a Real-Time DDoS Attack Detection System using AWS and machine learning. As a speaker at LWRedHatDay2023, I've also shared my knowledge on Docker, AWS, and open-source contributions. I thrive on optimizing systems, enhancing security, and driving innovation through automation.",
  avatarUrl: "/Rahulkumar.jpeg",
  skills: [
    // Languages / Frameworks
    "Python",
    "Java",
    "C",
    "C++",
    "Go",
    "SQL",
    "HTML",
    "Flask",
    // Technologies
    "Linux",
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Ansible",
    "Grafana",
    "Prometheus",
    "GitLab CI/CD",
    "RHEL",
    "Helm",
    // Databases
    "MySQL",
    "MongoDB"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rahulchoudhary5768@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahulkumar-choudhary",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahulkumar-choudhary/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/rahulkumarstwt",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Micronix System",
      href: "#",
      badges: [],
      location: "Remote",
      title: "DevOps Engineer",
      //logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAnFBMVEX////+/v7N2ebc5e7q7PCJlKlWZ4hfbo3AxdD7/P2KqMfB0OC0uscAKF4bNmUgOmceOGYAJVxsk7owSHIlPWkAIFvY3OPg4+jj6vFfirSft9Cmr74KMWQAK2A4T3c3VoJQcJlNXoBBVnybpLbHzNfz9vl8iKB6ncBMdaFWhLGtwthvfZhahrJjco9diLO3yNtRga9XhbGUr8tymL3FZ2dnAAABt0lEQVR4AVWQh7KbMBQFD70LmSh0cJWJ/PRkHP//v0W66TtdZ5bZC+DhX/wgjOIkBWjwPHi/ALK8KCtW80NEj/+JYVOU/EvNhPjaghYnhG3bZeiHEY6JCUYqgDKZD1V1WNbjKQRx5vWFLMQVF0Rd8yVJMwBXJmaXgmkRgs3Mbpxxwaq19HCbRSWdGfNa3NO2276donM913UVt+0sDnb07Mhu7j6lHkB3vcyMsQ8hlsyZ11kAyBo9SFiy2ydjLgIOyVcAD6VG/KpvrcgTqi1aO0pjdA+3wvHJ65WuCsYOeO46dx6BbLVXXSQs4wg0WhVwkNkywbo4hmPL/d3YHCeRGdle4B6BSl9G504jINe6ugH9nX6+HIw98g/lzM8e0ASTG2GMGb735NI/q1LYccjI3I15KZ0HcNwYS2AZ9iddY3tGpbV6P0MgWVjnHpXeYKHYYNu1UapA+BHJ3h8H40bPjaZHVjT7650BYWMDX+bXZ/vdqACw8/YGIBttA/W+wZHtw2sE0ZbAuDu2guqBTZshgCNZJWQfBGFGi6PYjVFD0/T3WOJfPAuo1ARRRA9/AIHntj2ysv1fww/FcSpmANp5lQAAAABJRU5ErkJggg==",
      logoUrl: "/micronix.png",
      start: "May 2023",
      end: "May 2024",
      description:
        "Reduced AWS costs by 57% through cost-saving strategies like optimal resource allocation and auto-scaling cluster. Orchestrated migration of a critical microservice from GKE to EKS, optimizing performance, scalability, and achieved 99.9% uptime. Coordinated setup of distinct AWS accounts for diverse contexts, leveraging AWS AFT and implementing SCPs to enforce secure AWS resource usage, resulting in an 80% increase in infrastructure security. Configured EKS clusters with high availability employing Terraform to enable seamless node-type adjustments at zero downtime. Designed and implemented a Jenkins Shared Library to foster collaboration across multiple teams, resulting in a 4x faster time to market for new features.",
    },
    {
      company: "GotoAdmins",
      href: "#",
      badges: [],
      location: "Remote",
      title: "DevOps Intern",
      //logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAMAAADjLDWuAAAAZlBMVEX////Qz8+SkZFZV1goJCUAAAAwLS5iYWGZmZnb29sjHyDGxsbr6+u6urqBgICrqqpDQEHU1NTKysq+vr75+fnz8/MXEhN6eXmEgoMUDhChoKFRT09ramqKiYkIAAC0tLRzcXJfXl6jXoc7AAAA7ElEQVR4AaWSA7bDUBRFT3DyENua/yA/GzR1uxceroENw7Rs0hFS4QqS2nSV5yk/IEMccGntrIyIMfYETHBGSokN4WQ4kBclFioHV6jlGjvDFfIlh31sY3f3iV+adjPpSOFh4d9+K8VkoXXBHnviAf+M9aD/qM/aI/ulBXqF06729CSvN3mxkzvqvpzeZ3Jb3ZfP7n25ad6sz2Sbw9BLf4ZDf3ytegugutHf3kROQFo35qMYtgEAGtfnm9pl88x+IHBwhULe3U9dYqM67rdL8/BuY6zELQ0caFj3qfI8lfYDG1whlrNN2rOMsfENpGAQ2DVA1GgAAAAASUVORK5CYII=",
      logoUrl: "/gotoadmins.png",
      start: "April 2022",
      end: "March 2023",
      description:
        "Pioneered log monitoring for Apache and MySQL servers using Site24x7 and performance monitoring with Prometheus, resulting in a 2x improvement in error resolution time and overall system performance. Improved developer productivity 200x by modernizing microservices deployment with HelmCharts and optimizing Helm management using Helmfile.",
    },
    {
      company: "LinuxWorld Informatics",
      href: "https://www.lwindia.com/#",
      badges: [],
      location: "Remote",
      title: "MLOps Intern",
      //logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAllBMVEX////6+vr77+/29vbprq7lnZ3fg4PLFhvKCA/OLzHuwsOtra0AAADl5eV3d3fJAADjl5jZamvUUVLYY2TMIyf45eWZmZne3t5kZGTnpKWNjY2oqKg9PT3w8PDhjI3WW13rt7jMzMzSSEvRQELV1dXHx8dMTEz01tbMHyOAgIAsLCyTk5NbW1vp6enz8/O6urooKChubm70DktfAAABEUlEQVR4AdXPRXbDMAAA0TG0JoU5ihySme9/ufrZoV237XhlfSH/I8PklQUYDNlfwLfjej5jgZiAmEI/PJvDYrZcrWebEbdi1+MeWDrrHs0DLBx7XLgXRynFSSr80OkR4OxcAK7i2RZ8d8DLbX1nSE9FcI1EfDVe+O2svWRUKSbjmS+EeboGsLJY7KdTkU93H8jaSQAtnskR8RMw0wExCnG1lCgNRvRn6eGyXHvPd+rXmbMQQtdxnTQZsSoAqQFMfwMk89A2+DWlqqDWRlDtdgTNLkLTREpdIwB9bQp10sdjfiTYFdI6stdSFs2OHrfbpthOi61saSZZRqY73U2zowKo6kpRUxsG/VfT/1agLP5eP0D/F6DlGdOYAAAAAElFTkSuQmCC",
      logoUrl: "/linuxworld.png",
      start: "May 2021",
      end: "June 2021",
      description:
        "Devised CI/CD pipelines for building and training machine learning models across diverse datasets, reducing build time by 60% through parallelized model training. Recipient of the Red Hat Silver Award at LW Red Hat Day 2023; as a speaker, delivered insights to over 1000 professionals and students on core Red Hat technologies and open-source initiatives.",
    },
  ],
  education: [
    {
      school: "University of Texas at Arlington",
      href: "https://www.uta.edu/",
      degree: "MS Computer Science",
      //logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAolBMVEX///9ynctKg79NhsHp8PcAUqoAYbAAVKvJ2OqLrNMAXa4AZLFajMMAX68AYrC3y+MAWK0cbbU8fLyGqdGtxeAAW67d5/IAV6zQ3Oru7O0AY7P/9ur/2rwAS6j+pmqgwuUARaX48/Dx4Nf66d71dgDy+f37vpr3jUL6xKb5tIn/wZcocrj6xaH/1r281u9rl8jN5Pf1gyf/+eybt9j/0bAAZbLsSj2+AAAA3klEQVR4Ac3RVWICMRSF4dEbyGl0fHB3h/0vrd5iWQD/6xeP98r5wWeh26KYPmMNJzY5PqM3JwoJSQCLHKY0pAkJvOlAS+BJmkGKZ8sZUJRVAWTqCX0OWbfalkD2CTtMx36r2+sUrJ8/HicaDIej1ng0GAwm6QMaytvT2XzRmi6rVXxvZSFZrzWarmebrabsfupOAJ39uHVoRR0Jubq1SYHPs46mo3n3aAkoyhs8cYD755bnjdY9DojdDV4AFL/fETEAbPJvjULK66tZkjI7/WOQCZH5/3toIfjFe8U+AHBEEKA+tpxWAAAAAElFTkSuQmCC",
      logoUrl: "/UTA.png",
      start: "2024",
      end: "2026",
      description: "Coursework: Machine Learning, Adv. Computer Networks, Distributed Systems, Data Mining"
    },
    {
      school: "Savitribai Phule Pune University",
      href: "http://www.unipune.ac.in/",
      degree: "BE Computer Engineering",
      //logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAMAAACXZR4WAAAAllBMVEVHcEw+PDszMTBDQkFAPz5OTk9ycnJSUVFAPj5OTk1OTU1TUVFbWlp0c3JaWVlmZWRkY2JycXB6eXisra9GRURHRkUhGxl3d3iKiouBgX+FhIVIRUQxLStPTk1eXFtgX14xLSszMC54dnZKSUgwLSpfYGAuLCsoJCJiYF9hX15zc3NIRkV3d3eNjYteXl1PTk1OTEtTUVJONDyjAAAAMnRSTlMAbGQuOw1PSR5QJVVhMkKavt+7GVViKyYukEatgyyThaS0iji1PCHT0etswV23bZaGeX8+UAwAAACbSURBVHgBTYoDlgNBFEV/s9i2be9/cTNxcg8e4YUgwi+SrKhI+kRMMGVcowi/Zh0M07Js29EfJ9fzg9CJIicOfM8FkJUkzfLcNItcShNFBtcoK67GdR0bTVsaLnT9ICiFaY7THItD34EgI28hdF0ztHhIFgCL6iaXdJ5p6Re7iAEkHpH98Nixd2fSww3F9648Oa7CkxT40Mgv8w9dzAxLCg2HIQAAAABJRU5ErkJggg==",
      logoUrl: "/sppu.png",
      start: "2019",
      end: "2023",
      description: "GPA: 3.96 • Coursework: Data Structures and Algorithms, DB Management Systems, Cloud Computing, Big Data"
    }
  ],
  projects: [],
  hackathons: [
    {
      title: "DDoS Attack Surveillance",
      dates: "October 12 - 13, 2024",
      location: "Arlington, USA",
      description: "The project detects Distributed Denial of Service (DDoS) attacks in real-time using machine learning. It classifies network traffic as either malicious (DDoS) or benign by analyzing features from the traffic dataset. This allows the system to block harmful requests early and maintain the availability of services even during high-volume attacks.",
      image: "/uta-hack.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/rahulkumar-choudhary/DDoS-attack-surveillance"
        }
      ]
    }
  ],
} as const;

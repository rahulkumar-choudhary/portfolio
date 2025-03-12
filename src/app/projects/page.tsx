import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] w-full px-4 md:px-8 py-24">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h1>
            <p className="text-muted-foreground max-w-[600px] md:text-xl">
              A collection of projects I&apos;ve worked on, from Kubernetes to AWS to open source contributions.
            </p>
          </div>
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
          >
            <span className="text-lg mr-2">👈</span>
            <span>Back Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
          {[
            {
              title: "Real-Time DDoS Attack Detection System",
              description: "Initiated and predicted DDoS attacks using AWS-hosted attacker systems, tshark for traffic capture, and a Gradient Boosting Classifier for detection, improving real-time attack detection accuracy by 30%. Published DDoS attack results to a web app via Firebase, improving user awareness and response times during security incidents",
              dates: "Aug 2022",
              technologies: ["Docker", "Terraform", "Python", "AWS", "ML"],
              //image: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/3jlyZeWRy9eBz3tyEk9mxA/96eab064524495e8f6b2647f1f7b9d60/application_layer_ddos_example.png",
              image: "/ddos.png",
              github: "https://github.com/rahulkumar-choudhary/DDoS-attack-surveillance"
            },
            {
              title: "Cloud-based Kubernetes Multi-node Cluster Automation",
              description: "Parallelly initiated EC2 instances master and worker nodes using an optimized asynchronous approach. Incorporated Ansible's Dynamic Inventory for efficient gathering of instance public IPs, ensuring automatic connection of all workers with the master. Optimized EC2 instance initiation asynchronously, reducing setup time by 40% and accelerating system startup",
              dates: "Feb 2021",
              technologies: ["AWS", "Python", "Ansible"],
              //image: "https://camo.githubusercontent.com/4d7daa7fd1d25733ca6f3799e1fd3171f013025d118caceebb03d46e839f5ffd/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f312a626f726a3443417a4e423361386b697865717a7177512e6769663f7261773d74727565",
              image: "/k8s-cluster.gif",
              github: "https://github.com/rahulkumar-choudhary/Kubernetes_MultiNode_Cluster_Automation"
            },
            {
              title: "Facial Recognition-Enabled ML Model for Automated Launch of AWS Resources",
              description: "Developed a facial recognition ML model with OpenCV to automate AWS resource provisioning via Terraform and trigger email notifications, increasing process speed by 3x. Deployed the model in a Docker container to ensure consistent environments, reducing errors by 40% and enhancing scalability",
              dates: "Jan 2021",
              technologies: ["Python", "Research", "AWS"],
              //image: "https://appinventiv.com/wp-content/uploads/2024/07/GIF-1.gif",
              image: "/face-ai.gif",
              github: "https://github.com/rahulkumar-choudhary/Face_Detection_Security_Mail"
            },
            {
              title: "Hadoop HDFS Cluster Configuration Automation",
              description: "Automated Hadoop cluster setup with Ansible, improving efficiency and reducing manual configuration by 80%",
              dates: "Dec 2020",
              technologies: ["Hadoop", "Ansible"],
              //image: "https://spideropsnet.com/site1/wp-content/uploads/2014/08/mapx2.gif",
              image: "/hadoop.gif",
              github: "https://github.com/rahulkumar-choudhary/Hadoop-HDFS-Cluster-Ansible-Automation"
            }
          ].map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                github={project.github}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </main>
  );
} 
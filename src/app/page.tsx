import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 w-full px-4 md:px-8">
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4 backdrop-blur-md bg-background/60 rounded-2xl border border-white/20 px-4 py-8 shadow-lg hover:shadow-xl transition-all">
          {[
            { href: "#about", label: "About", icon: "👨‍💻", description: "Learn more about me and my journey" },
            { href: "#certificates", label: "Certifications", icon: "🎓", description: "View my certifications" }, 
            { href: "#projects", label: "Projects", icon: "🚀", description: "View my portfolio projects" },
            //{ href: "/projects", label: "Projects", icon: "🚀", description: "View my portfolio projects" },
            { href: "#blog", label: "Blog", icon: "✍️", description: "Read my latest articles" },
            //{ href: "/blog", label: "Blog", icon: "✍️", description: "Read my latest articles" },
            { href: "#resume", label: "Resume", icon: "📄", description: "View my professional journey" },
            { href: "#contact", label: "Contact", icon: "📧", description: "Get in touch with me" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 hover:bg-gray-100 border border-gray-200 transition-all hover:scale-110 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-100/50 via-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="absolute left-[calc(100%+1rem)] rounded-xl bg-white px-4 py-3 text-sm text-gray-800 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 shadow-lg border border-gray-200">
                <div className="font-medium flex items-center gap-2 mb-1">
                  {item.icon} {item.label}
                </div>
                <div className="text-xs text-gray-600 font-light">
                  {item.description}
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 border-8 border-transparent border-r-white"></div>
              </span>

              <span className="text-lg group-hover:text-gray-800 transition-colors">{item.icon}</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex justify-center gap-4 flex-wrap lg:hidden sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md py-4 px-4 border-b border-gray-200">
        <Link href="/about" className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-pink-100/50 via-purple-100/50 to-transparent blur-sm" />
            <span className="relative">Learn more about me</span>
          </span>
          <span className="text-lg mr-2">👨‍💻</span>
          <span className="text-gray-800">About</span>
        </Link>
        <Link href="/projects" className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-pink-100/50 via-purple-100/50 to-transparent blur-sm" />
            <span className="relative">View my work</span>
          </span>
          <span className="text-lg mr-2">🚀</span>
          <span className="text-gray-800">Projects</span>
        </Link>
        <Link href="/blog" className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-pink-100/50 via-purple-100/50 to-transparent blur-sm" />
            <span className="relative">Read my articles</span>
          </span>
          <span className="text-lg mr-2">✍️</span>
          <span className="text-gray-800">Blog</span>
        </Link>
        <Link href="#resume" className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-pink-100/50 via-purple-100/50 to-transparent blur-sm" />
            <span className="relative">View my resume</span>
          </span>
          <span className="text-lg mr-2">📄</span>
          <span className="text-gray-800">Resume</span>
        </Link>
        <Link href="#contact" className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300">
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-pink-100/50 via-purple-100/50 to-transparent blur-sm" />
            <span className="relative">Get in touch</span>
          </span>
          <span className="text-lg mr-2">📧</span>
          <span className="text-gray-800">Contact</span>
        </Link>
      </div>
      <section id="hero">
        <div className="mx-auto w-full max-w-7xl space-y-8">
          <div className="gap-8 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-[0.5rem] font-bold tracking-tighter sm:text-[1.5rem] xl:text-[2rem]/none"
                yOffset={8}
                text={`Hi, I am ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-[1.12rem]"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-40 border sm:size-48 md:size-56 lg:size-64 !rounded-2xl">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover !rounded-2xl" />
                <AvatarFallback className="!rounded-2xl">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="py-12">
        <div className="mx-auto w-full max-w-7xl">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Journey
                </h2>
                <div className="mx-auto max-w-[800px] space-y-4">
                  <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:prose-invert">
            {DATA.summary}
          </Markdown>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="certificates" className="py-12">
        <div className="mx-auto w-full max-w-7xl">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certifications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Professional Certifications
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Industry-recognized certifications that validate my expertise.{" "}
                  <Link 
                    href="https://www.credly.com/users/rahulkumar-choudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline inline-flex items-center gap-1"
                  >
                    Verify on Credly
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mt-8 flex flex-nowrap gap-4 overflow-x-auto pb-4 max-w-[800px] mx-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
            {[
              {
                name: "CKA: Certified Kubernetes Administrator",
                link: "https://www.credly.com/badges/d342d6bb-7c50-4953-8a43-0b98fd8cf41f",
                //image: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
                image: "/CKA.png",
                issuer: "The Linux Foundation"
              },
              {
                name: "Red Hat Certified Engineer (RHCE)",
                link: "https://www.credly.com/badges/304bd7e3-f54b-4580-b252-d7dee10513a4",
                //image: "https://images.credly.com/size/680x680/images/19c4e804-54fe-4857-b022-7cfd5520596c/image.png",
                image: "/rhce.png",
                issuer: "The Linux Foundation"
              },
              {
                name: "Red Hat Certified System Administrator (RHCSA)",
                link: "https://www.credly.com/badges/13469b20-78ef-4a5e-af94-6e294357a6f9",
                //image: "https://images.credly.com/size/680x680/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png",
                image: "/rhcsa.png",
                issuer: "Red Hat"
              },
              {
                name: "Red Hat Certified Specialist in Containers and Kubernetes",
                link: "https://www.credly.com/badges/ea6d31a9-bc6b-438e-817a-e743cf72fbe2",
                //image: "https://images.credly.com/size/680x680/images/1dd8824f-d6b6-4967-906a-7bd3c0063fae/image.png",
                image: "/do180.png",
                issuer: "Red Hat"
              }
            ].map((cert, index) => (
              <BlurFade
                key={cert.name}
                delay={BLUR_FADE_DELAY * 5 + index * 0.05}
                className="flex-shrink-0"
              >
                <Link 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group flex flex-col space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10 hover:border-white/20 w-[180px]"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white/5 p-2">
                    <Image
                      src={cert.image || ""}
                      alt={cert.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-sm font-medium line-clamp-2">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from Kubernetes to AWS to open source contributions.{" "}
                  <Link 
                    href="/projects"
                    className="text-blue-500 hover:underline inline-flex items-center gap-1"
                  >
                    View all projects
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
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
                description: "Parallelly initiated EC2 instances master and worker nodes using an optimized asynchronous approach. Incorporated Ansible Dynamic Inventory for efficient gathering of instance public IPs, ensuring automatic connection of all workers with the master. Optimized EC2 instance initiation asynchronously, reducing setup time by 40% and accelerating system startup",
                dates: "Feb 2021",
                technologies: ["AWS", "Python", "Ansible"],
                //image: "https://camo.githubusercontent.com/4d7daa7fd1d25733ca6f3799e1fd3171f013025d118caceebb03d46e839f5ffd/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f312a626f726a3443417a4e423361386b697865717a7177512e6769663f7261773d74727565",
                image: "/k8s-cluster.gif",
                github: "https://github.com/rahulkumar-choudhary/Kubernetes_MultiNode_Cluster_Automation"
              }
            ].map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
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
      </section>
      <section id="blog" className="py-12">
        <div className="mx-auto w-full max-w-7xl">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest Articles
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I write about technology, development, and my experiences building products.{" "}
                  <Link 
                    href="/blog"
                    className="text-blue-500 hover:underline inline-flex items-center gap-1"
                  >
                    View all posts
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
            {[
              {
                title: "Understanding ulimit in Docker Files",
                description: "Learn about system resource limits in Docker containers and how to configure them properly using Nginx and FastCGI.",
                //image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1735585588944/879c70c6-1836-4bd2-bf9a-110e161ca8b8.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
                image: "/unix.png",
                url: "https://rahulsblog.hashnode.dev/ulimit-docker-file",
                tags: ["Docker", "DevOps"]
              },
              {
                title: "aws-nuke: Delete All AWS Resources with One Click",
                description: "A comprehensive guide on using aws-nuke tool to remove all resources from an AWS account safely and efficiently.",
                //image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1673779970041/88c54d6a-f5eb-482c-904a-585e3f83b101.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
                image: "/nuke.png",
                url: "https://rahulsblog.hashnode.dev/aws-nuke",
                tags: ["AWS", "DevOps", "Cloud"]
              }
            ].map((post, index) => (
              <BlurFade
                key={post.url}
                delay={BLUR_FADE_DELAY * 15 + index * 0.05}
              >
                <Link 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group flex flex-col space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                      //src={post.image}
                      src={post.image || ""}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/10 px-3 py-1 text-xs text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="resume" className="py-12">
        <div className="mx-auto w-full max-w-7xl">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Resume
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Take a Peek at My Journey
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive into my professional story and explore my experiences
                </p>
              </div>
              <Link
                href="https://drive.google.com/file/d/1Pgro8axY2OlFhZBeB1fx4MY6lcqaTF3b/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105 active:scale-95 hover:shadow-2xl"
              >
                <span className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-b from-[#ff80b5] to-[#9089fc] opacity-0 blur-xl transition-all group-hover:opacity-50" />
                <span className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#ff80b5] to-[#9089fc] opacity-0 transition-all group-hover:opacity-30" />
                <span className="absolute inset-0 rounded-md bg-gradient-to-tr from-transparent via-transparent to-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1">
                  View My Professional Journey • PDF Format
                </span>
                <svg
                  className="mr-2 size-4 animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span className="relative">View Resume</span>
              </Link>
            </div>
        </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => {
              const gradients = [
                "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
                "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
                "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
                "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
                "from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600",
                "from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600",
              ];
              const gradient = gradients[id % gradients.length];
              
              return (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge 
                    key={skill}
                    className={`bg-gradient-to-r ${gradient} text-white border-0 text-sm px-4 py-1.5 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300`}
                  >
                    {skill}
                  </Badge>
              </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. In two to three days, people from all around the nation would come together and create amazing things. Seeing the limitless potential realized by a bunch of driven and enthusiastic people was eye-opening.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to reach out through any of these platforms. I am always open to interesting conversations and opportunities.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/rahulkumar-choudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-[#E8F3FC] px-5 py-2 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href="mailto:rahulchoudhary5768@gmail.com"
                  className="group flex items-center gap-2 rounded-full bg-[#FCE8E8] px-5 py-2 text-[#EA4335] transition-all hover:bg-[#EA4335] hover:text-white"
                  aria-label="Send me an email"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>rahulchoudhary5768@gmail.com</span>
                </Link>
                <Link
                  href="https://github.com/rahulkumar-choudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-[#F6F8FA] px-5 py-2 text-[#24292F] transition-all hover:bg-[#24292F] hover:text-white dark:bg-[#F6F8FA] dark:text-[#24292F] dark:hover:bg-[#24292F] dark:hover:text-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com/rahulkumarstwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-[#E8F5FD] px-5 py-2 text-[#1D9BF0] transition-all hover:bg-[#1D9BF0] hover:text-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span>Twitter</span>
                </Link>
                <Link
                  href="https://instagram.com/rahulkumar_ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-[#FDF2F8] px-5 py-2 text-[#E4405F] transition-all hover:bg-[#E4405F] hover:text-white"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

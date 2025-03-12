import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

const BLOG_POSTS = [
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
];

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] w-full px-4 md:px-8 py-24">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              My Blog
            </h1>
            <p className="text-muted-foreground max-w-[600px] md:text-xl">
              Thoughts and insights about technology, development, and building products.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <BlurFade key={post.url} delay={BLUR_FADE_DELAY * (index + 1)}>
              <Link 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="group flex flex-col space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <Image
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
    </main>
  );
}

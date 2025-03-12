import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  github?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  github,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex flex-col space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20",
        className
      )}
    >
      {video && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      {image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col space-y-2">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <time className="font-sans text-xs text-muted-foreground">{dates}</time>
        <div className="hidden font-sans text-xs underline print:visible">
          {link?.replace("https://", "").replace("www.", "").replace("/", "")}
        </div>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-foreground/10 px-3 py-1 text-xs text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {((links && links.length > 0) || github) && (
          <div className="flex justify-between items-center pt-2">
            {links && links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-1">
                {links?.map((link, idx) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
            {github && (
              <Link 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#F6F8FA] px-4 py-1.5 text-[#24292F] transition-all hover:bg-[#24292F] hover:text-white"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm font-medium">View on GitHub</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

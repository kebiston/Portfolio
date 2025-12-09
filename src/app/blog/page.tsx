import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Resume</h1>
        <h3>My thoughts on software development, Bilingual Engineer and more.</h3><br></br>
        <h1>
          Japanese Resume:
            <a href="https://drive.google.com/file/d/1yZac6-PC_YvOwQzl2z40YtOpW7R8KcGR/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', marginLeft: '8px' }}>
            View Resume
            </a>
        </h1>
        <h1>
          English Resume:
            <a href="https://drive.google.com/file/d/11I3RMLumAvd7lYhsvY99jXPhPrl3NXuj/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', marginLeft: '8px' }}>
            View Resume
            </a>
        </h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                {/* <p className="tracking-tight">{post.metadata.title}</p> */}
                <p className="h-6 text-xs text-muted-foreground">
                  {/* {post.metadata.publishedAt} */}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}

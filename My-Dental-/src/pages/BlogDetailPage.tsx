import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, ArrowUpRight } from "lucide-react";
import { blogPosts, BlogPost } from "@/lib/blogData";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-foreground">Article Not Found</h2>
        <Link href="/blog" className="mt-4 text-primary underline">Back to Blog</Link>
      </div>
    );
  }

  // Get related posts (excluding the current one)
  const relatedPosts = Object.values(blogPosts)
    .filter((p: BlogPost) => p.slug !== slug)
    // Only pick the main 6 posts for cleaner suggestions
    .filter((p: BlogPost) => [
      'clear-aligner-workflows-explained',
      'digital-impressions-vs-traditional-impressions',
      'a-practical-guide-to-scanning-for-crowns',
      'how-intraoral-scanners-improve-workflows',
      'intraoral-scanner-buying-guide',
      'intraoral-scanning-mistakes'
    ].includes(p.slug))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Header section */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-16 bg-white border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          {/* Back link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground/50 hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>All Articles</span>
          </Link>

          {/* Category Badge */}
          <span className="inline-block bg-primary/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm font-bold text-foreground/45 border-t border-border/40 pt-4">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>{post.author}</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 flex-grow bg-[#fbfbf9]">
        <div className="container mx-auto max-w-4xl flex flex-col gap-10">
          
          {/* Featured Image */}
          <div className="relative aspect-[16/8] md:aspect-[16/7] rounded-[2.5rem] overflow-hidden bg-muted border border-black/5 shadow-sm">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Paragraphs */}
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-border/80 shadow-sm flex flex-col gap-6 max-w-4xl mx-auto w-full">
            {post.paragraphs.map((para: string, idx: number) => {
              // Format sections slightly differently if they look like headers or lists
              const isSubHeading = para.length < 100 && (para.startsWith("Stage") || para.includes(":") || para.startsWith("Traditional") || para.startsWith("Digital") || para.includes("Mistake") || para.includes("Metric") || para.startsWith("Upper") || para.startsWith("Lower"));
              
              if (isSubHeading && !para.endsWith(".") && !para.includes("http")) {
                return (
                  <h3 key={idx} className="text-lg md:text-xl font-extrabold text-foreground tracking-tight mt-6 mb-2 border-l-4 border-primary pl-3">
                    {para}
                  </h3>
                );
              }
              
              return (
                <p key={idx} className="text-foreground/75 text-sm md:text-[16px] font-semibold leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Related Articles Footer */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-border/60 pt-16 mt-8">
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight mb-8">
                Related Dental Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((rel: BlogPost, i: number) => (
                  <Link 
                    href={`/blog/${rel.slug}`} 
                    key={i}
                    className="flex flex-col gap-4 bg-white border border-border/70 rounded-[2rem] p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-muted">
                      <img 
                        src={rel.image} 
                        alt={rel.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {rel.category}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 flex-grow px-1">
                      <h4 className="text-base font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-[12px] text-foreground/50 font-bold flex items-center gap-3">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  const activePostSlugs = [
    "clear-aligner-workflows-explained",
    "digital-impressions-vs-traditional-impressions",
    "a-practical-guide-to-scanning-for-crowns",
    "how-intraoral-scanners-improve-workflows",
    "intraoral-scanner-buying-guide",
    "intraoral-scanning-mistakes"
  ];

  const posts = activePostSlugs.map(slug => blogPosts[slug]).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 text-center bg-white border-b border-border/40">
        <div className="container mx-auto max-w-[800px] flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Dental World News</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-foreground tracking-tight leading-none">
            Dental Insights & Articles
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-foreground/60 leading-relaxed font-semibold max-w-[650px] mt-2">
            Expert articles on dental implants, veneers, smile restoration, and oral health. Practical guidance from the Dental Clinic specialist team.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16 flex-grow bg-[#fbfbf9]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-5 bg-white border border-border/70 rounded-[2rem] p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col gap-5 w-full">
                  {/* Image Wrap */}
                  <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Info Metadata */}
                  <div className="flex items-center gap-4 text-xs font-bold text-foreground/45 px-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2.5 px-1 flex-grow">
                    <h3 className="text-lg font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-foreground/60 leading-relaxed font-semibold">
                      {post.description}
                    </p>
                  </div>

                  {/* Author row */}
                  <div className="flex items-center gap-2 px-1 pt-4 border-t border-border/40 mt-auto">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground/80">{post.author}</span>
                    <div className="ml-auto text-primary text-xs font-black uppercase tracking-wider flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      <span>Read</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

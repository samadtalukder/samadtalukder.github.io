'use client';

import { blog } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import { Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Blog</h2>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog.map((post, index) => (
            <ScrollReveal key={post.title} delay={0.1 * (index + 1)}>
              <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full flex flex-col">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image
                        src={`/images/${post.image.replace('img/', '')}`}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <span>Read More</span>
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-2">
                      {post.description}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

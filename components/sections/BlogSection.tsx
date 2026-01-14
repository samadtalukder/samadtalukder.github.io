'use client';

import {about, blog} from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {ArrowUpRight} from 'lucide-react';
import Image from 'next/image';

export default function BlogSection() {
    return (
        <section id="blog" className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <p className="text-lg sm:text-xl font-montserrat text-center font-semibold text-brand-orange mb-2">Latest
                        Blog</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12 lg:mb-16">My Articles and Advice​</h2>
                </ScrollReveal>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {blog.map((post, index) => (
                        <ScrollReveal key={post.title} delay={0.1 * (index + 1)}>
                            <a href={post.url} target="_blank" rel="noopener noreferrer"
                               className="h-full flex flex-col group transition-transform duration-300 hover:-translate-y-2">
                                {post.image && (
                                    <div className="relative h-56 sm:h-64 md:h-72 overflow-visible shrink-0">
                                        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-3xl">
                                            <Image
                                                src={`/images/${post.image.replace('img/', '')}`}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Curved cutout effect in bottom right */}
                                            <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gray-50"
                                                 style={{borderTopLeftRadius: '100%'}}></div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <div
                                                className="w-12 h-12 md:w-16 md:h-16 bg-brand-orange rounded-full flex items-center justify-center group-hover:bg-[#1e293b] transition-colors duration-300 shadow-lg">
                                                <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 text-white"/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div
                                    className="p-4 md:p-6 flex flex-col grow rounded-b-3xl shadow-lg transition-shadow duration-300">
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="mb-4">
                      <span
                          className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl text-xs font-anton font-medium">
                        {post.tags[0]}
                      </span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                                            <span className="font-medium">{about.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-montserrat font-bold text-gray-800 leading-relaxed line-clamp-2">
                                        {post.title}
                                    </h3>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

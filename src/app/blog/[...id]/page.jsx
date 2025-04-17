"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useBlogStore } from '../../../services/blogService';
import Link from 'next/link';

export default function PostDetail() {
    const router = useRouter();
    const params = useParams();
    const { getPost } = useBlogStore();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        if (params?.id) {
            try {
                // Make sure we're handling the ID correctly
                // The ID might come as a string or array from params
                const postId = Array.isArray(params.id) ? params.id[0] : params.id;
                
                // Try both string and number versions of the ID
                let fetchedPost = getPost(postId);
                
                if (!fetchedPost) {
                    // If string ID didn't work, try numeric
                    fetchedPost = getPost(parseInt(postId, 10));
                }
                
                setPost(fetchedPost);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }
    }, [params, getPost]);
    
    if (!post) {
        return (
            <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-6">The post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <button
                        onClick={() => router.push('/blog')}
                        className="px-4 py-2 bg-[#004040] text-white rounded hover:bg-green-400 transition-colors"
                    >
                        Back to Posts
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-green-950">GTS</h1>
                    <span className="text-gray-600">Post Detail</span>
                </div>
            </header>
            
            <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <section className="mb-6">
                    <div className="flex justify-between items-start gap-4">
                        <h2 className="text-3xl font-bold text-[#004040] mb-3">{post.title}</h2>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${post.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                            {post.status}
                        </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                        <time>{post.date}</time>
                        <span>By {post.author}</span>
                        <span className="bg-blue-100 text-[#004040] text-xs px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                </section>
                
                <article className="prose max-w-none text-gray-800">
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </article>
                
                <footer className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                        href="/blog"
                        className="text-[#004040] hover:text-green-400 flex items-center gap-2 transition-colors"
                    >
                        <span>←</span>
                        <span>Back to posts</span>
                    </Link>
                </footer>
            </main>
        </div>
    );
}
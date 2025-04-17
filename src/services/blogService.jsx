// services/blogService.js
"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Initial sample posts data
const initialPosts = [
  {
    id: 1,
    title: "New Bilingual Program Launch",
    category: "Education",
    content: "We are excited to announce the launch of our new bilingual program in partnership with schools across the Netherlands. This innovative program aims to provide students with a comprehensive language learning experience that integrates both Dutch and English instruction.\n\nThe program has been developed in collaboration with leading educational experts and will be implemented in selected schools starting from the next academic year. It focuses on developing strong language skills while also ensuring that students master the core curriculum subjects.",
    date: "2025-03-15",
    status: "Published",
    author: "Maria van der Berg",
    readTime: "4 min"
  },
  {
    id: 2,
    title: "Teacher Training Workshop",
    category: "Events",
    content: "Join us for our upcoming teacher training workshop focused on bilingual education techniques. This intensive workshop will provide educators with practical strategies for implementing bilingual instruction in their classrooms.\n\nThe workshop will cover topics such as dual language lesson planning, cross-linguistic transfer strategies, and assessment in bilingual contexts. Participants will also have the opportunity to collaborate with peers and receive feedback from experienced bilingual education specialists.",
    date: "2025-03-10",
    status: "Published",
    author: "Johan Klein",
    readTime: "3 min"
  },
  {
    id: 3,
    title: "Student Success Stories",
    category: "Students",
    content: "Read about how our bilingual education program has transformed the learning journey of our students. In this article, we showcase several success stories from students who have thrived in our bilingual learning environment.\n\nThese inspiring accounts highlight not only the academic achievements of our students but also their growth in cultural awareness, confidence, and global perspective. Parents also share their observations about how bilingual education has positively impacted their children's development.",
    date: "2025-03-05",
    status: "Draft",
    author: "Lisa Jansen",
    readTime: "5 min"
  }
];

// Create a store with Zustand
export const useBlogStore = create(
  persist(
    (set) => ({
      posts: initialPosts,
      
      // Add a new post
      addPost: (post) => set((state) => {
        const newId = Math.max(...state.posts.map(p => p.id), 0) + 1;
        const newPost = { 
          ...post, 
          id: newId,
          readTime: `${Math.max(1, Math.ceil(post.content.length / 500))} min` 
        };
        return { posts: [...state.posts, newPost] };
      }),
      
      // Update an existing post
      updatePost: (updatedPost) => set((state) => ({
        posts: state.posts.map(post => 
          post.id === updatedPost.id ? {
            ...updatedPost,
            readTime: `${Math.max(1, Math.ceil(updatedPost.content.length / 500))} min`
          } : post
        )
      })),
      
      // Delete a post
      deletePost: (postId) => set((state) => ({
        posts: state.posts.filter(post => post.id !== postId)
      })),
      
      // Get a single post by ID
      getPost: (postId) => {
        const state = useBlogStore.getState();
        return state.posts.find(post => post.id === postId);
      }
    }),
    {
      name: 'blog-storage', // name for localStorage
    }
  )
);
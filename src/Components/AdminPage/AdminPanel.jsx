"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBlogStore } from "../../services/blogService";
import { signOut } from "next-auth/react";

export default function BlogAdmin() {
  const router = useRouter();
  const { posts, addPost, updatePost, deletePost } = useBlogStore();

  // State for form and UI control
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    date: new Date().toISOString().slice(0, 10),
    status: "Draft",
    author: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  
  // Category Management State
  const [categories, setCategories] = useState(["Education", "Events", "Students"]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryInput, setCategoryInput] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

  // Initialize category from local storage on component mount
  useEffect(() => {
    const storedCategories = localStorage.getItem("blog-categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);
  useEffect(() => {
    if (formData.category === "" && categories.length > 0) {
      setFormData((prev) => ({ ...prev, category: categories[0] }));
    }
  }, [formData.category, categories]);
    

  // Save categories to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("blog-categories", JSON.stringify(categories));
  }, [categories]);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      // Update existing post
      updatePost({ ...formData, id: editingPost.id });
    } else {
      // Create new post
      addPost(formData);
    }
    resetForm();
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData(post);
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id);
    }
  };

  const resetForm = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      category: categories.length > 0 ? categories[0] : "",
      content: "",
      date: new Date().toISOString().slice(0, 10),
      status: "Draft",
      author: "",
    });
    setShowForm(false);
  };

  // Category Management Functions
  const handleAddCategory = () => {
    if (categoryInput.trim() === "") return;
    
    if (editingCategory !== null) {
      // Update existing category
      const updatedCategories = [...categories];
      updatedCategories[editingCategory] = categoryInput;
      setCategories(updatedCategories);
      
      // Update posts with the old category name
      const oldCategoryName = categories[editingCategory];
      posts.forEach(post => {
        if (post.category === oldCategoryName) {
          updatePost({...post, category: categoryInput});
        }
      });
    } else {
      // Add new category
      setCategories([...categories, categoryInput]);
    }
    
    setCategoryInput("");
    setEditingCategory(null);
  };

  const handleEditCategory = (index) => {
    setCategoryInput(categories[index]);
    setEditingCategory(index);
  };

  const handleDeleteCategory = (index) => {
    const categoryToDelete = categories[index];
    if (window.confirm(`Are you sure you want to delete category "${categoryToDelete}"? This will remove the category from all posts using it.`)) {
      const updatedCategories = categories.filter((_, i) => i !== index);
      setCategories(updatedCategories);
      
      // Update posts with the deleted category
      posts.forEach(post => {
        if (post.category === categoryToDelete) {
          // Set to first available category or empty string
          const newCategory = updatedCategories.length > 0 ? updatedCategories[0] : "";
          updatePost({...post, category: newCategory});
        }
      });
      
      // Update formData if it was using the deleted category
      if (formData.category === categoryToDelete) {
        setFormData({
          ...formData,
          category: updatedCategories.length > 0 ? updatedCategories[0] : ""
        });
      }
    }
  };

  // Filter and search posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || post.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // FIXED FUNCTION: Fixed the URL path for viewing posts
  const viewPost = (postId) => {
    router.push(`/posts/${postId}`);  // Added the forward slash between 'posts' and postId
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-2 sm:p-4 md:p-6">
      {/* Header with logo and navigation */}
      <header className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-0">
            <div className="text-xl sm:text-2xl font-bold text-green-950">
              GTS
            </div>
            <div className="text-sm sm:text-base text-gray-600">
               Admin Panel
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden bg-gray-100 p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex space-x-4">
            
            <Link
              href="/posts"
              className="text-green-900 hover:text-green-600"
            >
              Posts
            </Link>
            <Link
              href="/admin"
              className="text-gren-900 hover:text-green-600"
            >
              Settings
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="sm:hidden mt-3 pt-3 border-t">
            <ul className="flex flex-col space-y-2">
             
              <li>
                <Link
                  href="/posts"
                  className="block py-2 text-green-900 hover:text-green-600"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="block py-2 text-green-900 hover:text-green-600"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Sidebar - Mobile Collapsible, Desktop Fixed */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 sm:mb-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3 sm:mb-4">
              Quick Actions
            </h3>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full bg-green-600  md:hidden hover:bg-green-700 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
            >
              Sign Out
            </button>
            
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
            >
              <span>{showForm ? "Cancel" : "Create New Post"}</span>
            </button>
            <div className="space-y-2">
              <button
                onClick={() => setFilterStatus("All")}
                className={`w-full text-left px-3 sm:px-4 py-2 text-green-900 hover:bg-gray-100 rounded flex items-center ${
                  filterStatus === "All" ? "bg-gray-100" : ""
                }`}
              >
                <span>All Posts ({posts.length})</span>
              </button>
              <button
                onClick={() => setFilterStatus("Published")}
                className={`w-full text-left px-3 sm:px-4 py-2 text-green-900 hover:bg-gray-100 rounded flex items-center ${
                  filterStatus === "Published" ? "bg-gray-100" : ""
                }`}
              >
                <span>
                  Published (
                  {posts.filter((p) => p.status === "Published").length})
                </span>
              </button>
              <button
                onClick={() => setFilterStatus("Draft")}
                className={`w-full text-left px-3 sm:px-4 py-2 text-green-900 hover:bg-gray-100 rounded flex items-center ${
                  filterStatus === "Draft" ? "bg-gray-100" : ""
                }`}
              >
                <span>
                  Drafts ({posts.filter((p) => p.status === "Draft").length})
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
  {/* Categories Header */}
  <div className="mb-3 sm:mb-4">
    <h3 className="text-lg font-semibold text-green-900 mb-3">
      Categories
    </h3>
    <button
      onClick={() => setShowCategoryModal(true)}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-3 flex items-center justify-center"
    >
      Add New Category
    </button>
  </div>
  
  {/* Categories List */}
  <div className="space-y-2">
    {categories.length > 0 ? (
      categories.map((category, index) => (
        <div key={index} className="flex items-center">
          <span className="flex-1 text-gray-700">{category}</span>
          <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1">
            {posts.filter((p) => p.category === category).length}
          </span>
        </div>
      ))
    ) : (
      <div className="text-gray-500 text-sm">No categories defined</div>
    )}
  </div>
</div>
   </div>
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Create/Edit Post Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
              <h2 className="text-xl font-bold text-green-900 mb-4">
                {editingPost ? "Edit Post" : "Create New Post"}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="title">
                    Post Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    >
                      {categories.length > 0 ? (
                        categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))
                      ) : (
                        <option value="">No categories available</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="author"
                    >
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="content">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    required
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="date">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    {editingPost ? "Update Post" : "Publish Post"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Posts List */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-3 sm:space-y-0">
              <h2 className="text-xl font-bold text-green-900">Blog Posts</h2>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500 w-full sm:w-auto"
                >
                  <option value="All">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded pl-3 pr-10 py-2 w-full sm:w-48 focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="min-w-full border-collapse">
                  <thead className="bg-gray-100 text-green-900">
                    <tr>
                      <th className="px-4 py-3 text-left">Title</th>
                      <th className="px-4 py-3 text-left hidden sm:table-cell">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left hidden md:table-cell">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPosts.map((post) => (
                      <tr key={post.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div
                            className="font-medium text-gray-800 cursor-pointer hover:text-green-600"
                            onClick={() => viewPost(post.id)}
                          >
                            {post.title}
                          </div>
                          {/* Mobile-only category and date display */}
                          <div className="sm:hidden mt-1 flex flex-wrap gap-2">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-600">
                              {post.date}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                          {post.date}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              post.status === "Published"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => handleEdit(post)}
                              className="text-green-600 hover:text-green-800 px-2 py-1"
                              aria-label="Edit post"
                            >
                              <span className="hidden sm:inline">Edit</span>
                              <span className="sm:hidden">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                              </span>
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="text-green-600 hover:text-green-800 px-2 py-1"
                              aria-label="Delete post"
                            >
                              <span className="hidden sm:inline">Delete</span>
                              <span className="sm:hidden">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No posts found. Try adjusting your search or filter criteria.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Management Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-green-900">Manage Categories</h3>
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setCategoryInput("");
                  setEditingCategory(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  placeholder="Add or edit category"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                />
                <button
                  onClick={handleAddCategory}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  {editingCategory !== null ? "Update" : "Add"}
                </button>
              </div>
            </div>
            
            <div className="max-h-60 overflow-y-auto">
              {categories.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {categories.map((category, index) => (
                    <li key={index} className="py-3 flex justify-between items-center">
                      <span className="font-medium text-gray-800">{category}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditCategory(index)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(index)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center py-4 text-gray-500">No categories available</p>
              )}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setCategoryInput("");
                  setEditingCategory(null);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

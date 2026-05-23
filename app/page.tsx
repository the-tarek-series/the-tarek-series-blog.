'use client';

import React, { useState } from 'react';
import { Menu, X, Mail, ExternalLink } from 'lucide-react';

export default function PsychologyBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "ক্র্যাব মেনটালিটি - মানুষ কেন অন্যদের নামিয়ে আনতে চায়",
      excerpt: "মানুষের সবচেয়ে গভীর মনোবিজ্ঞান।",
      date: "May 22, 2024",
      category: "Psychology"
    },
    {
      id: 2,
      title: "ম্যানিপুলেশন - কীভাবে মানুষ অন্যদের নিয়ন্ত্রণ করে",
      excerpt: "গভীর মনস্তাত্ত্বিক কৌশল।",
      date: "May 20, 2024",
      category: "Dark Psychology"
    }
  ]);

  const [books] = useState([
    {
      id: 1,
      title: "মৃত্যুর আগে জেগে ওঠা",
      price: "৳299",
      description: "জীবন পরিবর্তনকারী self-help বই।"
    },
    {
      id: 2,
      title: "সময়ের দরজা",
      price: "৳399",
      description: "অসাধারণ historical fantasy novel।"
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', excerpt: '', category: '' });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            The Tarek Series
          </h1>
          
          <div className="hidden md:flex gap-6">
            <button onClick={() => setCurrentPage('home')} className="hover:text-red-500 transition">Home</button>
            <button onClick={() => setCurrentPage('blog')} className="hover:text-red-500 transition">Stories</button>
            <button onClick={() => setCurrentPage('books')} className="hover:text-red-500 transition">Books</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-red-500 transition">About</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-red-500 transition">Contact</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-red-900/30 p-4 space-y-2">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left hover:text-red-500 py-2">Home</button>
            <button onClick={() => { setCurrentPage('blog'); setIsMenuOpen(false); }} className="block w-full text-left hover:text-red-500 py-2">Stories</button>
            <button onClick={() => { setCurrentPage('books'); setIsMenuOpen(false); }} className="block w-full text-left hover:text-red-500 py-2">Books</button>
            <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="block w-full text-left hover:text-red-500 py-2">About</button>
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block w-full text-left hover:text-red-500 py-2">Contact</button>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {currentPage === 'home' && (
          <div className="space-y-12">
            <section className="py-20 text-center space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold">The Tarek Series</h2>
              <p className="text-xl md:text-2xl text-gray-400">Dark Psychology & Storytelling</p>
              <p className="text-gray-300 max-w-2xl mx-auto">মানুষের মন, আচরণ এবং লুকানো সত্য সম্পর্কে গল্প।</p>
              <button onClick={() => setCurrentPage('blog')} className="inline-block bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 rounded-lg font-bold">নতুন গল্প পড়ুন</button>
            </section>

            <section className="space-y-6">
              <h3 className="text-3xl font-bold">সাম্প্রতিক গল্প</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {posts.slice(0, 2).map(post => (
                  <div key={post.id} className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
                    <span className="text-red-500 text-sm">{post.category}</span>
                    <h4 className="text-xl font-bold mt-2">{post.title}</h4>
                    <p className="text-gray-400 mt-2">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentPage === 'blog' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">সব গল্প</h2>
            <div className="grid gap-6">
              {posts.map(post => (
                <div key={post.id} className="bg-gray-900 border border-red-900/30 rounded-lg p-6">
                  <span className="text-red-500 text-sm">{post.category}</span>
                  <h3 className="text-2xl font-bold mt-2">{post.title}</h3>
                  <p className="text-gray-300 mt-2">{post.excerpt}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 border border-red-900/30 rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">নতুন গল্প যোগ করুন</h3>
              <input placeholder="শিরোনাম" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" />
              <input placeholder="সংক্ষিপ্ত বর্ণনা" value={newPost.excerpt} onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" />
              <button onClick={() => { if(newPost.title) { setPosts([...posts, {...newPost, id: posts.length + 1, date: new Date().toLocaleDateString(), category: 'New'}]); setNewPost({title: '', excerpt: '', category: ''}); }}} className="w-full bg-red-600 py-2 rounded font-bold">প্রকাশ করুন</button>
            </div>
          </div>
        )}

        {currentPage === 'books' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">আমার বই</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {books.map(book => (
                <div key={book.id} className="bg-gray-900 border border-red-900/30 rounded-lg p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{book.title}</h3>
                  <p className="text-gray-300">{book.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">{book.price}</span>
                    <button className="bg-red-600 px-6 py-2 rounded font-bold">কিনুন</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="space-y-8 max-w-3xl">
            <h2 className="text-4xl font-bold">আমার পরিচয়</h2>
            <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold">ইয়াছিন রহমান তারেক</h3>
              <p className="text-gray-300">আমি একজন Bengali Psychology Content Creator। Dark Psychology এবং মানুষের আচরণ নিয়ে লিখি।</p>
              <div className="border-t border-red-900/30 pt-6">
                <h4 className="text-xl font-bold mb-4">আমাকে অনুসরণ করুন</h4>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 hover:text-red-500">TikTok: @tarek-series</a>
                  <a href="#" className="flex items-center gap-3 hover:text-red-500">Instagram: @the-tarek-series</a>
                  <a href="#" className="flex items-center gap-3 hover:text-red-500">Facebook: @thetarekseries</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="space-y-8 max-w-2xl">
            <h2 className="text-4xl font-bold">যোগাযোগ করুন</h2>
            <div className="bg-gray-900 border border-red-900/30 rounded-lg p-8 space-y-4">
              <input placeholder="আপনার নাম" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" />
              <input placeholder="আপনার ইমেইল" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" />
              <textarea placeholder="আপনার বার্তা" rows={6} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white"></textarea>
              <button className="w-full bg-red-600 py-3 rounded font-bold">পাঠান</button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-black border-t border-red-900/30 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 The Tarek Series. সর্বাধিকার সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}

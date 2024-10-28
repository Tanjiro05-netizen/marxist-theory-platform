import React, { useState } from 'react';
import { ChevronRight, Globe, ArrowLeft, RotateCw, X } from 'lucide-react';

const TheoryPage = () => {
    const [activeCategory, setActiveCategory] = useState('philosophy');

    const categories = [
        { id: 'dialectics', name: '辯證法', enName: 'Dialectics' },
        { id: 'economics', name: '經濟學', enName: 'Economics' },
        { id: 'philosophy', name: '哲學', enName: 'Philosophy' },
        { id: 'praxis', name: '實踐', enName: 'Praxis' }
    ];

    const articles = [
        {
            id: 1,
            title: 'Dialectical Materialism',
            excerpt: 'Understanding the fundamental principles of materialist dialectics...',
            readTime: '15 min',
            category: 'dialectics',
            progress: 65
        },
        {
            id: 2,
            title: 'Capital Vol. I',
            excerpt: 'Analysis of the capitalist mode of production...',
            readTime: '25 min',
            category: 'economics',
            progress: 30
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Top Menu Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800">
                <div className="flex items-center h-12">
                    {/* Back Button and Title */}
                    <div className="flex items-center px-4 border-r border-neutral-800 h-full">
                        <button className="flex items-center text-neutral-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            <span className="text-sm">Revolutionary Theory Page</span>
                        </button>
                    </div>

                    {/* Center Buttons */}
                    <div className="flex items-center mx-auto space-x-2 px-4">
                        <button className="px-3 py-1 text-sm text-white bg-neutral-800 rounded">
                            Preview
                        </button>
                        <button className="px-3 py-1 text-sm text-neutral-400 hover:text-white transition-colors">
                            Code
                        </button>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center px-4 border-l border-neutral-800 h-full">
                        <button className="flex items-center text-neutral-400 hover:text-white transition-colors">
                            <RotateCw className="w-4 h-4 mr-2" />
                        </button>
                        <button className="flex items-center text-neutral-400 hover:text-white transition-colors ml-2">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Menu Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <a href="/" className="text-white font-medium">
                            MARXIST.THEORY
                        </a>

                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-1 text-sm text-gray-400 hover:bg-neutral-800 rounded">Home</button>
                            <button className="px-4 py-1 text-sm text-white hover:bg-neutral-800 rounded">Revolutionary Theory</button>
                            <button className="px-4 py-1 text-sm text-gray-400 hover:bg-neutral-800 rounded">Analysis</button>
                            <button className="px-4 py-1 text-sm text-gray-400 hover:bg-neutral-800 rounded">Digital Library</button>
                            <button className="px-4 py-1 text-sm text-gray-400 hover:bg-neutral-800 rounded">Submit</button>
                            <button className="p-2 hover:bg-neutral-800 rounded-full transition-colors">
                                <Globe className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <span className="text-9xl text-red-500">革命</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">革命 REVOLUTIONARY THEORY</h1>
                <p className="text-gray-400 text-xl max-w-3xl text-center">
                    "Without revolutionary theory there can be no revolutionary movement."
                </p>
            </div>

            {/* Category Navigation */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex space-x-12 mb-16">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className="flex flex-col space-y-2 group"
                        >
              <span className={`text-2xl transition-colors ${
                  activeCategory === category.id ? 'text-red-500' : 'text-gray-400 group-hover:text-white'
              }`}>
                {category.name}
              </span>
                            <span className={`text-sm transition-colors ${
                                activeCategory === category.id ? 'text-gray-200' : 'text-gray-600 group-hover:text-gray-400'
                            }`}>
                {category.enName}
              </span>
                        </button>
                    ))}
                </div>

                {/* Articles */}
                <div className="space-y-4">
                    {articles.map(article => (
                        <div
                            key={article.id}
                            className="group relative bg-black border border-red-900/20 hover:border-red-500/30 rounded p-6 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-medium group-hover:text-red-500 transition-colors">
                                    {article.title}
                                </h3>
                                <span className="text-sm text-gray-500">{article.readTime}</span>
                            </div>

                            <p className="text-gray-400 mb-6 pr-8">{article.excerpt}</p>

                            {/* Progress Bar */}
                            <div className="h-1 bg-red-900/20 rounded-full overflow-hidden mb-3">
                                <div
                                    className="h-full bg-red-600 transition-all duration-500"
                                    style={{ width: `${article.progress}%` }}
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{article.progress}% Complete</span>
                                <ChevronRight
                                    className="w-5 h-5 text-red-500 transform group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-32" />
        </div>
    );
};

export default TheoryPage;
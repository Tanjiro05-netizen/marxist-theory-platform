// src/App.jsx
import React, { useState } from 'react';
import { Menu, Book, Globe } from 'lucide-react';
import { Link } from 'react-router-dom' ;

const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="min-h-screen bg-[#12131A]">
            {/* Hero Section */}
            <header className="relative h-screen">
                {/* Animated background grid */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(#ff000033_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-[800px] h-[800px] opacity-20"
                        style={{
                            background: `url('/images/hammerandsickle.png') no-repeat center center`,
                            backgroundSize: 'contain',
                            filter: 'brightness(0.7) contrast(1.2)', mixBlendMode: 'soft-light'
                        }}
                    ></div>
                </div>
                {/* Navigation */}
                {/* Navigation */}
                <nav className="absolute top-0 w-full bg-transparent text-white p-4 z-50">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-2xl font-bold tracking-wider">MARXIST.THEORY</div>
                        <div className="hidden md:flex space-x-8">
                            <Link
                                to="/theory"
                                className={`${
                                    activeSection === 'theory' ? 'text-red-500' : 'text-white'
                                } hover:text-red-400 transition-colors text-sm tracking-wide`}
                            >
                                Revolutionary Theory
                            </Link>
                            <Link
                                to="/analysis"
                                className={`${
                                    activeSection === 'analysis' ? 'text-red-500' : 'text-white'
                                } hover:text-red-400 transition-colors text-sm tracking-wide`}
                            >
                                Analysis
                            </Link>
                            <Link
                                to="/library"
                                className={`${
                                    activeSection === 'library' ? 'text-red-500' : 'text-white'
                                } hover:text-red-400 transition-colors text-sm tracking-wide`}
                            >
                                Digital Library
                            </Link>
                            <Link
                                to="/submit"
                                className={`${
                                    activeSection === 'submit' ? 'text-red-500' : 'text-white'
                                } hover:text-red-400 transition-colors text-sm tracking-wide`}
                            >
                                Submit
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Globe className="h-5 w-5"/>
                            <Menu className="h-6 w-6 md:hidden"/>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center space-y-8 max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            革命 REVOLUTIONARY THEORY
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                            A collective of writers, artists, and researchers contributing to the renaissance of Marxist
                            analysis
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                to="/theory"
                                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors inline-block">
                                Explore Theory
                            </Link>
                            <button
                                className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-red-900 transition-all">
                                Submit Work
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Content */}
            <section className="py-20 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-white mb-12 font-bold">Featured Analysis</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeaturedCard
                            title="Dialectical Materialism in the Digital Age"
                            excerpt="Examining the contradictions of modern technology"
                            category="Theory"
                        />
                        <FeaturedCard
                            title="Labor Movement Resurgence"
                            excerpt="Analysis of contemporary worker organization"
                            category="Analysis"
                        />
                        <FeaturedCard
                            title="Socialist Planning & AI"
                            excerpt="Technical possibilities for economic coordination"
                            category="Technology"
                        />
                    </div>
                </div>
            </section>

            {/* Digital Library */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-white mb-12 font-bold">Digital Library</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i}
                                 className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-black/40 transition-colors">
                                <Book className="w-8 h-8 mb-4 text-red-500"/>
                                <h3 className="text-xl font-semibold mb-2">Classical Texts</h3>
                                <p className="text-gray-400">Access foundational works of Marxist theory</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const NavLink = ({children, active }) => (
    <button
        className={`${
            active ? 'text-red-500' : 'text-white'
        } hover:text-red-400 transition-colors text-sm tracking-wide`}
    >
        {children}
    </button>
);

const FeaturedCard = ({ title, excerpt, category }) => (
    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-black/40 transition-colors border border-red-900/30">
        <div className="text-red-500 text-sm mb-4">{category}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <button className="text-red-500 hover:text-red-400 transition-colors text-sm">
            Read More →
        </button>
    </div>
);

export default App;

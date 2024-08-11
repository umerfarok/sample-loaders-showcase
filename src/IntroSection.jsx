import React, { useState, useEffect } from 'react';
import { Heart, Github, Package, Code, ExternalLink } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'; 

const OrganizationIntro = () => {
    const [downloadData, setDownloadData] = useState([]);
    const [starData, setStarData] = useState([]);

    useEffect(() => {
        const fetchNpmData = async () => {
            try {
                const response = await axios.get('https://api.npmjs.org/downloads/range/last-month/vibrant-loaders');
                const formattedData = response.data.downloads.map(item => ({
                    name: new Date(item.day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    downloads: item.downloads
                }));
                setDownloadData(formattedData);
            } catch (error) {
                console.error('Error fetching npm data:', error);
            }
        };

        // Fetch GitHub star data
        const fetchGithubData = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/umerfarok/vibrant-loaders');
                const starCount = response.data.stargazers_count;
                setStarData([{ name: 'Current', stars: starCount }]);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchNpmData();
        fetchGithubData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 font-['Poppins',sans-serif]">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center text-center px-4">
                <div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        Welcome to NextShines
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-700 mb-8">
                        Innovating web solutions with passion and creativity
                    </p>
                    <a
                        href="#about"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
                        About Us
                    </h2>
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 transform hover:scale-105 transition duration-300">
                        <p className="text-xl text-gray-600 mb-8">
                            NextShines is an innovative organization dedicated to creating beautiful and performant web solutions.
                            We're passionate about pushing the boundaries of web development and design, constantly striving to
                            deliver cutting-edge experiences that delight users and empower businesses.
                        </p>
                        <a
                            href="https://nextshines.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out"
                        >
                            Visit NextShines <ExternalLink className="ml-2" size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Vibrant Loaders Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
                        Vibrant Loaders
                    </h2>
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 transform hover:scale-105 transition duration-300">
                        <p className="text-xl text-gray-600 mb-8">
                            Introducing our npm package, vibrant-loaders: a collection of beautiful and customizable
                            loading animations for your web projects. Elevate your user experience with our
                            eye-catching and performant loaders.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="https://www.npmjs.com/package/vibrant-loaders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 transition duration-300 ease-in-out"
                            >
                                <Package className="mr-2" size={24} />
                                NPM Package
                            </a>
                            <a
                                href="https://github.com/umerfarok/vibrant-loaders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gray-800 hover:bg-gray-900 transition duration-300 ease-in-out"
                            >
                                <Github className="mr-2" size={24} />
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
                        Package Stats
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">NPM Downloads</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={downloadData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="downloads" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">GitHub Stars</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={starData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="stars" stroke="#82ca9d" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contribute Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
                        Contribute
                    </h2>
                    <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 transform hover:scale-105 transition duration-300">
                        <p className="text-xl text-gray-600 mb-8">
                            We welcome contributions! If you'd like to improve vibrant-loaders or add new features,
                            please check out our GitHub repository. Your ideas and code can help make this package
                            even more amazing for developers around the world.
                        </p>
                        <div className="text-center">
                            <a
                                href="https://github.com/umerfarok/vibrant-loaders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out"
                            >
                                <Code className="mr-2" size={24} />
                                Contribute Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 bg-gray-200">
                <p className="flex items-center justify-center text-lg">
                    Built with love <Heart className="mx-2 text-red-500" size={24} /> by{" "}
                    <a
                        href="https://github.com/umerfarok/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-purple-600 hover:text-purple-800 transition duration-150 ease-in-out"
                    >
                        umerfarok
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default OrganizationIntro;
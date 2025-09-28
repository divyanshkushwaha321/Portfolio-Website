// components/Hero.jsx
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import SocialLink from './SocialLink';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <div className="mb-8 transform animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Divyansh Kushwaha
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Aspiring Full Stack Developer passionate about building modern web applications and learning cutting-edge technologies.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <SocialLink href="https://github.com/divyanshkushwaha321" icon={Github} />
            <SocialLink href="https://www.linkedin.com/in/divyansh-kushwaha-0b5470233/" icon={Linkedin} />
            <SocialLink  icon={Mail} />
          </div>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
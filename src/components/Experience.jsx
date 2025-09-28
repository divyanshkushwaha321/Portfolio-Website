import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Reagles Media Pvt Ltd",
      location: "Bhopal, Madhya Pradesh",
      duration: "Aug 2025 - Sept 2025",
      type: "Full-time",
      // description: "Leading a team of 5 developers in building scalable web applications. Architected microservices handling 1M+ daily users.",
      achievements: [
        "Developed responsive web applications using React.js, JavaScript/TypeScript, TailwindCSS.",
        "Collaborated with backend developers to integrate REST APIs.",
        "Built reusable UI components and implemented state management (Context API/Redux) for maintainable code.",
        "Optimized performance with lazy loading, bundle size reduction, and cross-browser/mobile compatibility.",
        "Contributed to Git/GitHub workflows, including feature branches and pull requests."
      ],
      
    },
    {
      title: "Frontend Developer Intern",
      company: "Wyreflow Technologies",
      location: "Hybrid",
      duration: "March 2025 - May 2025",
      type: "Internship",
      // description: "Developed the core product from MVP to production, serving 100K+ active users. Built both frontend and backend systems.",
      achievements: [
        "Designed and implemented reusable UI components to ensure scalability and consistency across the application.",
        "Optimized frontend performance and improved cross-browser/mobile compatibility for a seamless user experience.",
        "Collaborated with backend developers to integrate REST APIs"
      ],
      
    },
    
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader 
          title="Professional Experience" 
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
// components/Projects.jsx
import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Fit Tracker",
      description: "Fit Tracker is a smart fitness and diet tracking app designed to help users stay on top of their health goals. It allows you to log workouts, monitor calorie intake, and analyze progress in real-time.",
      tech: ["React", "Node.js", "Express.js", "MongoDB" ,"JWT"],
      image: "/fitness.jpg",
      link: "#",
      github: "https://github.com/divyanshkushwaha321/fit-tracker"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
      image: "/task.jpg",
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts using modern APIs.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS Grid"],
      image: "/weather.jpg",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Here are some of my recent projects that showcase my skills and experience"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
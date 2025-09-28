// components/About.jsx
import React from 'react';
import { Code, Zap, Palette } from 'lucide-react';
import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';

const About = () => {
  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "JavaScript","Next.js", "Tailwind CSS"] },
    { name: "Backend", icon: Zap, items: ["Node.js", "Express", "MongoDB"] },
    { name: "Tools", icon: Palette, items: ["Git", "VS Code"] }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Computer Science and Engineering graduate (2025 batch) with a strong interest in building a career in the tech field. I have worked full-time as a Frontend Developer and also gained hands-on experience during a 2-month internship, where I contributed to creating responsive and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about learning modern technologies, I aim to grow as a developer and contribute to impactful projects in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

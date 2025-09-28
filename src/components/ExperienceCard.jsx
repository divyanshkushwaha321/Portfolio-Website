// components/ExperienceCard.jsx
import React from 'react';
import { Building, MapPin, Calendar, Award } from 'lucide-react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <Building className="w-5 h-5 mr-2 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
          </div>
          <div className="flex items-center text-blue-300 mb-2">
            <span className="text-lg font-semibold">{experience.company}</span>
            <span className="mx-2">•</span>
            <span className="text-sm bg-blue-500/20 px-2 py-1 rounded">{experience.type}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="mr-4">{experience.location}</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>{experience.duration}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {experience.description}
      </p>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3 flex items-center">
          <Award className="w-4 h-4 mr-2 text-green-400" />
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-green-400 mr-2 mt-1">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
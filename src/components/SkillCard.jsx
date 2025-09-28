import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center mb-4">
        <skill.icon className="w-6 h-6 mr-3 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span key={item} className="px-3 py-1 bg-slate-600/50 text-gray-300 rounded-md text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
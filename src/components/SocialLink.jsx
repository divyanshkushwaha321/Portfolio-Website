// components/SocialLink.jsx
import React from 'react';

const SocialLink = ({ href, icon: Icon }) => {
  return (
    <a href={href} className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110">
      <Icon size={24} />
    </a>
  );
};

export default SocialLink;
// components/ContactInfo.jsx
import React from 'react';

const ContactInfo = ({ icon: Icon, title, info }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
      <Icon className="w-6 h-6 text-blue-400" />
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{info}</p>
      </div>
    </div>
  );
};

export default ContactInfo;

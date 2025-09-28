// components/Contact.jsx
import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="I'm always open to discussing new opportunities and interesting projects"
        />

        <div className="flex justify-center">
          <div className="space-y-6">
            <ContactInfo 
              icon={Mail} 
              title="Email" 
              info="divyanshkushwaha69@gmail.com" 
            />
            <ContactInfo 
              icon={Linkedin} 
              title="LinkedIn" 
              info="https://www.linkedin.com/in/divyansh-kushwaha-0b5470233/" 
            />
            <ContactInfo 
              icon={Github} 
              title="GitHub" 
              info="https://github.com/divyanshkushwaha321" 
            />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
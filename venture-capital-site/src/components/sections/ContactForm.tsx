"use client";

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `C10D Contact Form: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:darshah@unc.edu?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 bg-black snap-start">
      <div className="container-custom">
        <h2 className="text-3xl font-light text-blue-300 text-center mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border border-gray-800 text-white text-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border border-gray-800 text-white text-sm"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Type your message here..." 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-transparent border border-gray-800 text-white text-sm min-h-[150px]"
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full p-3 bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
          {/* Right column - Team image */}
          <div className="relative min-h-[300px]">
            {/* Placeholder for team image */}
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <span className="text-gray-700">Team Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactForm;
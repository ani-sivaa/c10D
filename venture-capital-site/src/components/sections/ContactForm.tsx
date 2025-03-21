"use client";

import { useState, FormEvent } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = `C10D Contact Form: ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0A%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:darshah@unc.edu?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open the default email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Your email client has been opened with the message. Thank you for reaching out!'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error opening your email client. Please try again or email us directly at darshah@unc.edu'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden snap-start">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-black/80 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"></div>
      
      {/* Futuristic grid accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-white mb-2 text-center">
            <span className="text-cyan-400">Get</span> in Touch
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Have questions about C10D? We&apos;re here to help. Reach out to us below.
          </p>
          
          <div className="bg-black/40 backdrop-blur-md border border-blue-900/20 rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Form column */}
              <div className="p-8 md:p-10 col-span-3 relative">
                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded ${
                    submitStatus.type === 'success' ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative group">
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none p-3 text-white transition-all duration-300 placeholder-transparent"
                    />
                    <label 
                      htmlFor="name"
                      className={`absolute left-3 transition-all duration-300 ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2.5 text-xs text-cyan-400' 
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Your Name
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none p-3 text-white transition-all duration-300 placeholder-transparent"
                    />
                    <label 
                      htmlFor="email"
                      className={`absolute left-3 transition-all duration-300 ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2.5 text-xs text-cyan-400' 
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Email Address
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      name="message"
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none p-3 text-white transition-all duration-300 placeholder-transparent min-h-[120px] resize-none"
                    />
                    <label 
                      htmlFor="message"
                      className={`absolute left-3 transition-all duration-300 ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs text-cyan-400' 
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Your Message
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`group relative overflow-hidden rounded-md px-6 py-4 bg-black border border-blue-600/40 text-white font-medium transition-all hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-400/20 w-full ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ease-out group-hover:w-full"></div>
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Image column with overlay */}
              <div className="col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10 md:bg-gradient-to-l"></div>
                <Image
                  src="/images/team-photo.jpg"
                  alt="C10D Team"
                  fill
                  className="object-cover h-full w-full rotate-[-90deg]"
                  priority
                />
                
                {/* Inspirational message overlay instead of contact info */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <div className="text-white space-y-6">
                    <h3 className="text-xl font-light text-cyan-400">Let&apos;s Connect
                    </h3>
                    <p className="text-sm text-gray-300">Have a question or want to join C10D? We&apos;re excited to hear from you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


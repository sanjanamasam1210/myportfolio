'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="flex items-center justify-center px-4"> {/* Center everything in the middle */}
      <div className="flex flex-col my-28 md:flex-row items-center justify-between w-full max-w-6xl space-y-10 md:space-y-0 md:space-x-16">
        {/* Heading */}
        <h1 className="text-8xl md:text-9xl text-center font-clash-display-bold ">
          Let's Get in Touch
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="FULL NAME"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-b-2 border-black bg-[#f8f8f8] text-md pb-2"
              required
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <input
                type="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b-2 border-black bg-[#f8f8f8] text-md pb-2"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="PHONE"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border-b-2 border-black bg-[#f8f8f8] text-md pb-2"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <input
              placeholder="MESSAGE"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-b-2 border-black bg-[#f8f8f8] text-md pb-2"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-[#111111] text-[#f8f8f8] font-light hover:bg-slate-900 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

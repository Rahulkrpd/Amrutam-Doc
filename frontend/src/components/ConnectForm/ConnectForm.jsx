import React, { useState } from 'react';

const ConnectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-[#FFF7E2] py-36 px-6 md:px-20">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#3A643C]">Let’s Connect</h2>
                <p className="text-[#333333] mt-4 text-base md:text-lg max-w-3xl mx-auto">
                    We’re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.
                </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
                {/* Left Image */}
                <div className="w-full md:w-1/3">
                    <img
                        src="./contentImage.svg"
                        alt="Herbal Contact"
                        className="rounded-xl w-full object-cover h-full max-h-[500px]"
                    />
                </div>

                {/* Right Form */}
                <div className="w-full md:w-1/2 bg-[#FFF7E2] p-6 md:p-10 rounded-xl shadow border border-[#C2C2C2]">
                    {/* Name and Contact Row */}
                    <div className="flex flex-col md:flex-row gap-10 mb-6">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-[#3A643C] mb-10">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Vikas Kumar"
                                className="w-full border-b border-gray-400 focus:outline-none py-1 mt-3 text-gray-700 
                                placeholder:text-[#7E7E7E] placeholder:font-dm   
                                placeholder:opacity-60 
                                placeholder:text-xl"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium text-[#3A643C]">Your Contact Number</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="8743414476"
                                className="w-full border-b border-gray-400 focus:outline-none py-1 mt-3 text-gray-700 
                                placeholder:text-[#7E7E7E] placeholder:font-dm   
                                placeholder:opacity-50 
                                placeholder:text-xl"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label className="text-sm font-medium text-[#3A643C]">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="vikass@gmail.com"
                            className="w-full border-b border-gray-400 focus:outline-none py-1 mt-3 text-gray-700 
                                placeholder:text-[#7E7E7E] placeholder:font-dm   
                                placeholder:opacity-50 
                                placeholder:text-xl"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                        <label className="text-sm font-medium text-[#3A643C]">Message (Optional)</label>
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="I want to On-board as a Doctor"
                            className="w-full border-b border-gray-400 focus:outline-none py-5 mt-3 text-gray-700 
                                placeholder:text-[#7E7E7E] placeholder:font-dm   
                                placeholder:opacity-50 
                                placeholder:text-xl"
                        />
                    </div>

                    {/* Button */}
                    <button
                        className="bg-[#3A643C] text-white px-6 py-3 rounded-md hover:bg-[#2f5232] transition"
                        onClick={() => console.log(formData)}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConnectForm;

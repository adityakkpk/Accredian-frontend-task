import React, { useState } from 'react';
import { Gift, Users, DollarSign } from 'lucide-react';

const ReferAndEarn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseInterest: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = 'Required';
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Invalid email';
    }
    if (!formData.refereeName) newErrors.refereeName = 'Required';
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Invalid email';
    }
    if (!formData.courseInterest) newErrors.courseInterest = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      setIsModalOpen(false);
      setFormData({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        courseInterest: ''
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Refer & Earn Rewards
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share the gift of learning with your friends and family. 
            Earn exciting rewards for every successful referral!
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Refer Now
          </button>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
            <p className="text-gray-600">Get exciting rewards for each successful referral</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Help Friends Learn</h3>
            <p className="text-gray-600">Share valuable learning opportunities with your network</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Both Win</h3>
            <p className="text-gray-600">Your friends get discounts while you earn rewards</p>
          </div>
        </div>
      </div>

      {/* Referral Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Refer a Friend</h2>
              <p className="text-gray-600">Fill in the details below to refer your friend and earn rewards!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleInputChange}
                  className={`block w-full px-3 py-2 border ${errors.referrerName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.referrerName && (
                  <p className="text-red-500 text-sm">{errors.referrerName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  id="referrerEmail"
                  name="referrerEmail"
                  type="email"
                  value={formData.referrerEmail}
                  onChange={handleInputChange}
                  className={`block w-full px-3 py-2 border ${errors.referrerEmail ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.referrerEmail && (
                  <p className="text-red-500 text-sm">{errors.referrerEmail}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Friend's Name</label>
                <input
                  id="refereeName"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleInputChange}
                  className={`block w-full px-3 py-2 border ${errors.refereeName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.refereeName && (
                  <p className="text-red-500 text-sm">{errors.refereeName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Friend's Email</label>
                <input
                  id="refereeEmail"
                  name="refereeEmail"
                  type="email"
                  value={formData.refereeEmail}
                  onChange={handleInputChange}
                  className={`block w-full px-3 py-2 border ${errors.refereeEmail ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.refereeEmail && (
                  <p className="text-red-500 text-sm">{errors.refereeEmail}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700">Course of Interest</label>
                <input
                  id="courseInterest"
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  className={`block w-full px-3 py-2 border ${errors.courseInterest ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.courseInterest && (
                  <p className="text-red-500 text-sm">{errors.courseInterest}</p>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                >
                  Submit Referral
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferAndEarn;
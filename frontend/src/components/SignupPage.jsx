import React, { useState } from 'react';
import apiService from '../apiService';

const getCSRFToken = () => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, 10) === 'csrftoken=') {
          cookieValue = decodeURIComponent(cookie.substring(10));
          break;
        }
      }
    }
    return cookieValue;
  };
  
  export const SignupPage = () => {
    const [formData, setFormData] = useState({
      username: '',
      password1: '',
      password2: '',
      email: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const csrfToken = getCSRFToken();
      apiService.signup(formData, csrfToken)
        .then(data => {
          console.log('Signup successful:', data);
        })
        .catch(error => {
            console.log(csrfToken);
          console.error('There was an error signing up!', error);
        });
    };

  return (
    <div>
      <nav className="w-full shadow-md h-25 bg-orange-100 sticky top-0 z-50">
        <div className="container mx-auto flex flex-row items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-gray-800">Fashionista</div>
        </div>
      </nav>
      <main className="flex flex-row h-screen">
        <div className="flex items-center justify-center w-5/12 bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
            <p className="text-center text-gray-600 mb-6">
              Sign up to explore sustainable, AI-powered fashion insights.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"  // Added name attribute
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"  // Added name attribute
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password1"  // Added name attribute
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Password"
                  value={formData.password1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="password2"  // Added name attribute
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Confirm Password"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-brown-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
        <div className="w-7/12">
          <img
            src="signupcover.jpg"
            className="object-cover w-full h-full"
            alt="Signup Cover"
          />
        </div>
      </main>
    </div>
  );
};

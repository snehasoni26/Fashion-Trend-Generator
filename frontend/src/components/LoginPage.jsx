import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <nav className="w-full shadow-md h-25 bg-orange-100 sticky top-0 z-50">
        <div className="container mx-auto flex flex-row items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Fashionista</div>
        </div>
      </nav>
      <main className="flex flex-row h-screen">
        <div className="flex items-center justify-center w-5/12 bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
            <p className="text-center text-gray-600 mb-6">
              Log in to keep exploring sustainable, AI-powered fashion insights.
            </p>
            <form className="space-y-6">
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Email address"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-brown-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
                >
                  Log In
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <div className="w-7/12">
          <img
            src="logincover2.jpg"
            className="object-cover w-full h-full"
            alt="Login Cover"
          />
        </div>
      </main>
    </div>
  );
};

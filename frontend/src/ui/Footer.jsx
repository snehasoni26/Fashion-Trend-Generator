import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-orange-100 text-black py-3">
      <div className="flex md:flex-row px-4 ml-5 items-center">
        <div className="w-1/3 ml-10 ">
          <h2 className="text-2xl font-bold mb-5">T-Fashion</h2>
          <p className="text-sm">
            With Fashionista's AI-powered trend forecasting platform, grasp trend dynamics through billions of interactions taking place online.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
        <div className='m-1/3 ml-10'>
          <h3 className="text-xl font-semibold">Toronto</h3>
          <p className="text-sm">
            100 King St. West, Suite 1600, Toronto, ON/Canada
          </p>

          <h3 className="text-xl font-semibold mb-4">Paris</h3>
          <p className="text-sm">
            18-24 Quai de la Marne, 75019, Paris/France
          </p>

          <h3 className="text-xl font-semibold mb-4">Istanbul</h3>
          <p className="text-sm">
            Ayazağa Mah. Vadi İstanbul Park Sitesi 7A Blok:7B Kat:2 No:4 Saryer/Istanbul
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us!</h3>
          <p className="text-sm mb-6">hello@tfashion.ai</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-sm">
        <p>© 2023, All Rights Reserved</p>
        <p>
          <a href="#" className="underline">Privacy Policy</a>, <a href="#" className="underline">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

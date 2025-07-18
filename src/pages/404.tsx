// React imports
import React from "react";
// Components imports
import { Button } from "../components/Button";
// Hooks import
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen vintage-texture bg-gradient-to-b from-amber-50/95 to-yellow-50/95 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <i className="fas fa-bicycle text-8xl text-amber-800 animate-bounce"></i>
        </div>
        <h1
          className="text-6xl font-bold text-amber-900 mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          404
        </h1>
        <h2
          className="text-3xl font-bold text-amber-800 mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Page Not Found
        </h2>
        <p
          className="text-xl text-amber-700 mb-8"
          style={{ fontFamily: "Crimson Text, serif" }}
        >
          Looks like you've taken a wrong turn on your cycling journey. Let's
          get you back on track.
        </p>
        <Button
          className="!rounded-button whitespace-nowrap bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 vintage-shadow"
          text="Return Home"
          color="amber"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default NotFound;

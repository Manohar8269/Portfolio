import { useState } from "react";

export default function Footer() {
  const [showQR, setShowQR] = useState(false);

  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="flex justify-center space-x-8">
        <a href="https://www.facebook.com/profile.php?id=100028025951053" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">
          FACEBOOK
        </a>
        <button
          onClick={() => setShowQR(true)}
          className="text-lg font-bold hover:underline"
        >
          INSTAGRAM
        </button>
        <a href="https://www.linkedin.com/in/manohar-singh-thakur-a65b6b2b6" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">
          LINKEDIN
        </a>
        <a href="https://github.com/Manohar8269" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">
          GITHUB
        </a>
      </div>

      {showQR && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg text-center">
            <img src="/m._s._thakur___qr.png" alt="Instagram QR Code" className="w-64 h-64 mx-auto" />
            <button
              onClick={() => setShowQR(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

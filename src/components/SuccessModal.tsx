// React imports

export const SuccessModal: React.FC = () => {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center transform">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-4xl text-green-600 animate-pulse"></i>
            </div>
            <h3
              className="text-2xl font-bold text-amber-900 mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Thank You! 🎉
            </h3>
            <p
              className="text-amber-700"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Your message has been sent successfully! We'll contact you soon.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-amber-600">
            <i className="fas fa-home"></i>
            <span style={{ fontFamily: "Crimson Text, serif" }}>
              Redirecting to home...
            </span>
          </div>
          <div className="mt-4">
            <div className="w-full bg-amber-200 rounded-full h-2">
              <div
                className="bg-amber-600 h-2 rounded-full animate-pulse"
                style={{ width: "100%", animation: "progress 3s linear" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
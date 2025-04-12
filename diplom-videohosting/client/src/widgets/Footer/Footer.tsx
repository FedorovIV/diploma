const Footer = () => {
    return (
      <footer className="w-full py-3 bg-gradient-to-t from-gray-300 to-gray-500 mt-3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold">Partnership</h2>
              <p>
                For partnership inquiries, please email us at:{" "}
                <a href="mailto:partnership@example.com" className="text-blue-600 underline">
                  partnership@example.com
                </a>
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold">Support</h2>
              <p>
                If you need technical support, contact us at:{" "}
                <a href="mailto:support@example.com" className="text-blue-600 underline">
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
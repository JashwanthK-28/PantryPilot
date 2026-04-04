import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import "./footer.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "PantryPilot",
  description: "Your smart kitchen assistant",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
    >
      <body className={inter.className}>
        <ClerkProvider allowedClockSkewInMs={100000}>
          <div className="layout-wrapper">
            <Header />
          <main className="main-content">
            {children}
          </main>
          <footer className="premium-footer">
            <div className="footer-glow"></div>
            <div className="footer-content">
              <div className="footer-section">
                <h2 className="footer-brand">PantryPilot</h2>
                <p className="footer-description">
                  Elevate your culinary journey. Your smart kitchen assistant that helps you track inventory, discover recipes, and reduce food waste.
                </p>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-heading">Features</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Smart Inventory</a></li>
                  <li><a href="#" className="footer-link">Recipe Suggestions</a></li>
                  <li><a href="#" className="footer-link">Meal Planning</a></li>
                  <li><a href="#" className="footer-link">Waste Reduction</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-heading">Company</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">About Us</a></li>
                  <li><a href="#" className="footer-link">Contact</a></li>
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-copyright">
                © {new Date().getFullYear()} PantryPilot. All rights reserved.
              </div>
              <div className="footer-socials">
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" className="social-icon" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
        </ClerkProvider>
      </body>
    </html> 
  );
}

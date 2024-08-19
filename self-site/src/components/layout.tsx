import React, { ReactNode } from 'react';
import { Navbar } from './Navbar'; 
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-light-cream">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import Navbar from './Navbar';
import FooterComp from './FooterComp';
import 'react-toastify/dist/ReactToastify.css';
type ReactNode = {
  children: React.ReactNode;
};

const Layout = ({ children }: ReactNode) => {
  return (
    <div className="p-0 m-0 overflow-hidden">
      <header className="fixed top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-[2px] md:py-2 w-full">
        <Navbar />
      </header>
      <main className="min-h-screen bg-red">{children}</main>
      <footer className="bg-primary dark:bg-slate-600 p-2 fixed bottom-0 z-50 w-full text-white min-h-[20px]">
        <FooterComp />
      </footer>
    </div>
  );
};

export default Layout;

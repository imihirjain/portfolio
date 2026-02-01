"use client";

import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import LatestWork from "./components/LatestWork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Header />
      <About />
      <Experience/>
      {/* <Services /> */}
      <LatestWork />
      <Contact />
      <Footer />
    </>
  );
}

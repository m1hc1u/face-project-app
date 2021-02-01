import React from 'react';
import Preheader from './components/Preheader';
import Header from "./components/Header";
import Moreinfo from "./components/Moreinfo";
import Resdev from "./components/Resdev";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
// import Images from "./components/Images";

function Main() {
  return (
    <div className="container">
    <Preheader />
    <Header />
    <Moreinfo />
    <Resdev />
    <Feedback />
    <Footer />
    </div>
  );
}

export default Main;


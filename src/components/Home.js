import React from "react";
import Header from "./Header";
import MoreInfo from "./MoreInfo";
import ResDev from "./ResDev";
import Feedback from "./Feedback";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <MoreInfo />
            <ResDev />
            <Feedback />
            <Footer />
        </div>
    );
}

export default Home;
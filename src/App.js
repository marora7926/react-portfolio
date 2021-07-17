import React from "react";
import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";
import "./styles/ContentContainer.css"

const App = () => {
    return (
        <div className="box-sizing">
            <Header />
            <ContentContainer />
            <Footer />
        </div>
    );
}

export default App;
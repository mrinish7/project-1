import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
    return(
        <div>
            <Navbar />
            <Card name="Making Decisions" page="/Making" />
            <Card name="Thinking Laterally" page="/Thinking" />
            <Card name="Influencing & Negotiating" page="/Influencing" />
            <Card name="Managing Conflict" page="/Managing" />
            <Card name="Driving Results" page="/Driving" />
        </div>
    )
}

export default Home
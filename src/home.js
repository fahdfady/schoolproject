import useFetch from "./hooks/useFetch";
import Banner from "./components/banner";
import Events from "./components/events";
import Phases from "./components/Phases";
import React from 'react';
import ReactWOW from 'react-wow';
import Services from "./components/Services";

const Home = () => {
    const { data: events, isPending, error } = useFetch("events");
    const { data: services } = useFetch("services");

    return (
        <div className="home">

            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            <Banner />

            <Phases />

            { services && <Services services={ services } /> }

            { events && <Events events={ events } /> }
        </div>
    )
}

export default Home;
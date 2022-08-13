import useFetch from "./hooks/useFetch";
import Banner from "./components/banner";
import Events from "./components/events";
import Phases from "./components/Phases";

const Home = () => {
    const { data: events, isPending, error } = useFetch("events");

    return (
        <div className="home">

            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            <Banner />

            <Phases />

            { events && <Events events={ events } /> }
        </div>
    )
}

export default Home;
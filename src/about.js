import Blog from "./components/blog";
import Reasons from "./components/reasons";
import Videos from "./components/videos";
import useFetch from "./hooks/useFetch";

const About = () => {

    const { data: blogs, isPending, error } = useFetch("blogs");

    return (
        <div className="about">

            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            { blogs && <Blog blogs={ blogs } /> }

            <Reasons />

            <Videos />
            
        </div>
    )
}

export default About;
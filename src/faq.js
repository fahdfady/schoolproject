import FAQS from "./components/faqs";
import useFetch from "./hooks/useFetch";

const FAQ = () => {
    
    const { data: faqs, isPending, error } = useFetch("faqs");

    return (
        <div className="faq">
            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            { faqs && <FAQS faqs={ faqs } /> }
        </div>
    )
}

export default FAQ;
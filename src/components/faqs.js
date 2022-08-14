const FAQS = ({ faqs }) => {

    function qwe() {
        const question = document.querySelector(".question");

        const answer = document.querySelector(".answer");

        answer.classList.toggle("show");
    }

    return (
        <div className="faq-container">
            { faqs.map((faq) => (
                <div className="qa-wrapper" key={ faq.id }>
                    <a className="question" onClick={ qwe }>
                        { faq.q }
                        <i className="fa-solid fa-caret-down"></i>
                    </a>
                    <div className="answer-wrapper">
                        <div className="answer">
                            { faq.a }
                        </div>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default FAQS;
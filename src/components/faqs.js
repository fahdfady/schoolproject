const FAQS = ({ faqs }) => {

    function qwe() {
        const question = document.querySelectorAll(".question");

        const answer = document.querySelectorAll(".answer");
        for (let i = 0; i < answer.length; i++) {
            question[i].onclick = function () {
                answer[i].classList.toggle("show");
            };
        };
    }

    return (
        <div className="faq-container container">
            { faqs.map((faq) => (
                <div className="qa-wrapper" key={ faq.id }>
                    <a className="question">
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
            { qwe() }
        </div>
    )
}

export default FAQS;
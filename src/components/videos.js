const Videos = () => {
    return (
        <section className="videos">
            <div className="section-title">
                <h2>
                    videos about <span>digital transformation</span>
                </h2>
                <p>some short videos about digital transformation to help the clarification of the point </p>
            </div>

            <div className="videos-container container">
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/jDs0x6GTZMg" title="السيسي عن «التحول الرقمي»: «هقدر أشوف حال الناس بالذكاء الاصطناعي»" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe src="https://www.youtube.com/embed/y8x0lIW9P6k" title="خبيرة تحول رقمي تشرح بالتفصيل ما هو التحول الرقمي لكل القطاعات؟" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                    <iframe width="1029" height="579" src="https://www.youtube.com/embed/H1OmwWcaKhk" title="من مصر| الجمهورية الجديدة.. التحول الرقمي يقود مسيرة التنمية بتكنولوجيا حديثة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </section>
    )
}

export default Videos;
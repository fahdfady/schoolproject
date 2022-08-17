const Services = ({ services }) => {
    return (
        <section className="services">
            <div className="shape-wrapper">
                
                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob1" alt="blob" />
                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob2" alt="blob" />

            </div>
            <div className="section-title">
                <h2>
                    our <span> services </span>
                </h2>

                <p className="section-subtitle">
                    reasons why you should choose us
                </p>
            </div>

            <div className="services-container container">
                { services.map((service) => (
                    <div className="service">
                        <div className="service-icon">
                            <i className={ service.icon }></i>
                        </div>
                        <h3 className="service-title">
                            { service.title }
                        </h3>
                        <p>
                            { service.description }
                        </p>
                    </div>
                )) }
            </div>
        </section>

    )
}

export default Services;
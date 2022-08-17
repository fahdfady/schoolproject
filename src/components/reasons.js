const Reasons = () => {
    return (
        <section className="reasons">
            <div className="shape-wrapper">

                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob1" alt="blob" />
                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob2" alt="blob" />

            </div>
            <div className="section-title">
                <h2>
                    the strategic program for <span> digital transformation </span> in Egypt
                </h2>

                <p className="section-subtitle">
                    In line with Egypt’s Vision 2030 and Egypt’s strategy to achieve digital transformation, the Ministry of Communications and Information Technology has embarked on building a digital Egypt. To start this transformation into a digital society and build a strong digital economy, building a digital Egypt is based on three main axes:
                </p>
            </div>

            <div className="reasons-container container">
                <div className="reason">
                    <div className="reason-icon">
                        <i class="fa-solid fa-city"></i>
                    </div>
                    <div className="reason-title">
                        Electronic Services
                    </div>
                    <p>
                        Improving the quality of life of citizens by improving their living conditions and providing multiple electronic services through all digital and non-digital outlets
                    </p>
                </div>

                <div className="reason">
                    <div className="reason-icon">
                        <i class="fa-solid fa-landmark"></i>
                    </div>
                    <div className="reason-title">
                        digital government
                    </div>
                    <p>
                        Transforming the government into a digitally interconnected government by linking government digital systems and improving work within the state’s administrative apparatus to operate efficiently and effectively
                    </p>
                </div>

                <div className="reason">
                    <div className="reason-icon">
                        <i class="fa-solid fa-network-wired"></i>
                    </div>
                    <div className="reason-title">
                        controling
                    </div>
                    <p>
                        Empowering the country with the digital government and enhancing the values of transparency, accountability and control of all the work through interaction and partnership between the various elements of society, including universities, the private sector, civil society, and others
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Reasons;
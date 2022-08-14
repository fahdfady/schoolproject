import RegForm from "./components/regform";

const Register = () => {
    return (
        <div className="register">
            <div className="register-wrap col-9 col-md-7 col-lg-5">

                <div className="shape-wrapper">
                    <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob1" alt="blob" />
                    <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob2" alt="blob" />

                </div>

                <div className="icon">
                    <i className="fa-solid fa-user-large"></i>
                </div>

                <div className="section-title">
                    <h2>registeration</h2>
                </div>
                <RegForm />
            </div>
        </div>
    )
}

export default Register;
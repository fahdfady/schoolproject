import blob from "./assets/blob.svg"
import blob2 from "./assets/blob2.svg"

const Register = () => {
    return (
        <div className="register">
            <div className="register-wrap">

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
                <form action="" method="post" className="register-form">
                    <div className="form-group two-inputs">

                        <div className="text">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="first name" required></input>
                        </div>
                        <div className="text">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="second name" required></input>
                        </div>

                    </div>

                    <div className="form-group">

                        <div className="text">
                            <i className="fa-solid fa-at"></i>
                            <input type="email" placeholder="E-mail" required></input>
                        </div>

                    </div>

                    <div className="form-group">
                        <div className="text">
                            <i className="fa-solid fa-at"></i>
                            <input type="email" placeholder="confirm E-mail" required></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="text">
                            <i className="fa-solid fa-key"></i>
                            <input type="password" placeholder="password" required></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="text">
                            <i className="fa-solid fa-key"></i>
                            <input type="password" placeholder="confirm password" required></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="text">
                            <i class="fa-solid fa-id-card"></i>
                            <input type="text" placeholder="National ID" required></input>
                        </div>
                    </div>

                    <div class="form-group form-submit">
                        <button type="submit" class="btn submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
const RegForm = () => {
    return (
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
                    <i className="fa-solid fa-id-card"></i>
                    <input type="text" placeholder="National ID" required></input>
                </div>
            </div>

            <div className="form-group form-submit">
                <button type="submit" className="btn submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default RegForm;
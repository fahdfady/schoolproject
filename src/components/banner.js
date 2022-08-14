import blob from "../assets/blob.svg"
import blob2 from "../assets/blob2.svg"

const Banner = () => {

    const bannerImage = document.querySelectorAll(".shape-wrapper *");

    function eqwe() {

        onmousemove = (MouseEvent) => {
            let divide = 10;

            let x = MouseEvent.clientX / divide;
            let y = MouseEvent.clientY / divide;

            let x2 = - MouseEvent.clientX / divide;
            let y2 = - MouseEvent.clientY / divide;

            for (let i = 0; i < bannerImage.length; i++) {
            };
            bannerImage[0].style.transform = "translate3d(" + x + 'px,' + y + 'px, 0px)';
            bannerImage[1].style.transform = "translate3d(" + x + 'px,' + y + 'px, 0px)';
            bannerImage[2].style.transform = "translate3d(" + x2 + 'px,' + y + 'px, 0px)';
            bannerImage[3].style.transform = "translate3d(" + x + 'px,' + y2 + 'px, 0px)';
            bannerImage[4].style.transform = "translate3d(" + x2 + 'px,' + y2 + 'px, 0px)';
        }

    };

    return (
        <section className="banner">

            <img src="https://i.ibb.co/hYZvJkN/cdc-GDok-EYn-Ofn-E-unsplash-1.jpg" alt="boy" className="banner-image01" />

            <img src="https://i.ibb.co/2kVh2TB/jerry-wang-jfn-UC7s3iuw-unsplash-1.jpg" alt="girl" className="banner-image02" />

            <img src="https://i.ibb.co/S08m4Bj/andrea-buccelli-Aq-Fetk-Kj-CC8-unsp.jpg" alt="girl" className="banner-image03" />

            <img src="https://i.ibb.co/bFCM6ZG/ben-white-q-DY9ahp0-Mto-unsplash-1.jpg" alt="boy" className="banner-image04" />

            <div className="shape-wrapper">
                <img src={ blob } className="blob1" alt="blob" />

                <img src={ blob2 } className="blob2" alt="blob" />

                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob3" alt="blob" />

                <div className="circle blob4" alt="blob" ></div>

                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob5" alt="blob" />

            </div>
            { bannerImage && eqwe() }
            <div className="layer">
                <h2 className="banner-title">
                    Learn Something <span> New </span> Today
                </h2>
            </div>

            {/* { eqwe() } */ }

        </section>
    );
}

export default Banner;
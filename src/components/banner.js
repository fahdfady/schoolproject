import blob from "../assets/blob.svg"
import blob2 from "../assets/blob2.svg"

const Banner = () => {

    const bannerImage = document.querySelectorAll(".shape-wrapper img");

    function eqwe() {

        console.log(bannerImage)
        console.log("worked");

        onmousemove = (MouseEvent) => {
            console.log("worked");

            let x = MouseEvent.clientX;
            let y = MouseEvent.clientY;

            let x2 = - MouseEvent.clientX
            let y2 = -MouseEvent.clientY;

            for (let i = 0; i < bannerImage.length; i++) {
            };
            bannerImage[0].style.transform = "translate3d(" + x / 10 + 'px,' + y / 10 + 'px, 0px)';
            bannerImage[1].style.transform = "translate3d(" + x / 10 + 'px,' + y / 10 + 'px, 0px)';
            bannerImage[2].style.transform = "translate3d(" + x2 / 10 + 'px,' + y / 10 + 'px, 0px)';


        }

    };


    return (
        <section className="banner">

            <img src="https://i.ibb.co/hYZvJkN/cdc-GDok-EYn-Ofn-E-unsplash-1.jpg" alt="boy" className="banner-image01" />

            <img src="https://i.ibb.co/2kVh2TB/jerry-wang-jfn-UC7s3iuw-unsplash-1.jpg" alt="girl" className="banner-image02" />

            <img src="https://i.ibb.co/S08m4Bj/andrea-buccelli-Aq-Fetk-Kj-CC8-unsp.jpg" alt="girl" className="banner-image03" />

            <div className="shape-wrapper">
                <img src={ blob } className="blob1" alt="blob" />

                <img src={ blob2 } className="blob2" alt="blob" />

                <img src="https://htmldemo.net/edumall/edumall/assets/images/shape/edumall-shape-01.png" className="blob3" alt="blob" />
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
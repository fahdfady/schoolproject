import blob from "../assets/blob.svg"
import blob2 from "../assets/blob2.svg"

const Banner = () => {

    function eqwe() {
        let bannerImage = document.querySelectorAll(".shape-wrapper img");

        if (bannerImage && document.querySelector(".shape-wrapper")) {

            onmousemove = (MouseEvent) => {
                let x = MouseEvent.clientX;
                let y = MouseEvent.clientY;
                for (let i = 0; i < bannerImage.length; i++) {
                    console.log(bannerImage[i]);
                    bannerImage[i].style.transform = "translate3d(" + x / 10 + 'px,' + y / 10 + 'px, 0px)';
                }
            };
        }
    };

    return (
        <section className="banner">
            <img src="https://htmldemo.net/edumall/edumall/assets/images/home-03-hero-image-02.jpg" alt="image" className="banner-image01" />


            { eqwe() }
            <div className="shape-wrapper">
                <img src={ blob } className="blob1" alt="blob" />

                <img src={ blob2 } className="blob2" alt="blob" />
            </div>
            <div className="layer">
                <h2 className="banner-title">
                    Learn Something <span> New </span> Today
                </h2>
            </div>
        </section>
    );
}

export default Banner;
import { useState } from "react";

const Phases = () => {


    return (
        <section className="phases">
            <div className="section-title">
                <h2>
                    Welcome to the
                    <span> e-learning platform </span>
                </h2>
            </div>
            <a href="#0" className="phase">
                <div className="icon">
                    <i className="fa-solid fa-child-reaching"></i>
                </div>
                <div className="phase-title">
                    Kindergarten
                </div>

                <p className="phase-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, similique facilis, dignissimos dolorem non explicabo, consequuntur molestiae quam ipsam nesciunt exercitationem iure officia illo! Veritatis debitis a ratione quod magni!
                </p>
            </a>

            <a href="#0" className="phase">
                <div className="icon">
                    <i className="fa-solid fa-book-open-reader"></i>
                </div>
                <div className="phase-title">
                    Elementary
                </div>

                <p className="phase-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam impedit odit, harum illum deleniti nobis, fuga libero minus eligendi dolorum temporibus quia tempora voluptates atque magnam recusandae, hic qui.
                </p>
            </a>

            <a href="#0" className="phase">
                <div className="icon">
                    <i className="fa-solid fa-school"></i>
                </div>
                <div className="phase-title">
                    middle School
                </div>

                <p className="phase-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio vero natus quia nobis possimus tenetur. Laborum voluptatum accusantium, eveniet quibusdam ullam commodi ea perspiciatis vitae aut neque! Beatae, magni?
                </p>
            </a>

            <a href="#0" className="phase">
                <div className="icon">
                    <i className="fa-solid fa-user-graduate"></i>
                </div>
                <div className="phase-title">
                    High school
                </div>

                <p className="phase-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima, nobis omnis vitae perspiciatis voluptatum, ipsa impedit laudantium est nisi perferendis unde, officia non asperiores itaque commodi iste ullam minus.
                </p>
            </a>

        </section>
    )
}

export default Phases;
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Events = ({ events }) => {
    return (
        <section className="events">
            <div className="section-title">
                <h2>
                    Upcoming
                    <span> Events </span>
                </h2>
                <p className="section-subtitle">
                    You can show all events here to let people take the chances to get involve.
                </p>
            </div>
            <Swiper
                spaceBetween={ 50 }
                slidesPerView={ 3 }
            >
                { events.map((event) => (
                    <SwiperSlide key={ event.id }>
                        <div className="card">
                            <a href="#0" className="image-container">
                                <img src={ event.image } alt={ event.eventname } />
                            </a>
                            <h3 className="date">
                                { event.date }
                            </h3>

                            <a href="#0" className="event-name">
                                { event.eventname }
                            </a>

                            <p className="location">
                                <i className="fa-solid fa-location-dot"></i>
                                { event.location }
                            </p>
                        </div>
                    </SwiperSlide>
                )) }
            </Swiper>
        </section>
    )
}

export default Events;
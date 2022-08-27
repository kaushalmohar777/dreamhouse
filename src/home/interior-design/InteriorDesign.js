import './InteriorDesign.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { Link } from "react-router-dom";



class InteriorDesign extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/wp-json/wp/v2/service_category/?parent=41')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true
                })
            });
    };

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (
                <div className='loader'></div>
            );
        } else {
            return (
                <section className='interior-design-main'>
                    <h3>Interior Design</h3>
                    <div className='interior-design-slider'>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={4}
                            spaceBetween={35}
                            className="interiorDesignSwiper">

                            {items.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className='interior-design-inner' key={data.id}>
                                        <Link to={`/category/interior-design/${data.slug}`}>
                                            <div className='interior-d-img'><img src={data.acf.category_image} /></div>
                                            <h3>{data.name} </h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                            ))}

                        </Swiper>
                    </div>
                </section>
            );
        }
    }
}


export default InteriorDesign;
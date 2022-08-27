import './Categories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import React from 'react';
import { Link } from 'react-router-dom';



class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/wp-json/wp/v2/service_category/?parent=0')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true
                })
            });
            
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return (
                <div className='loader'></div>
            );
        } else {
            return (
                <section className='categories-main'>
                    <h3 className='categories-title-p'>Categories</h3>
                    <div className='categories-slider'>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={40}

                            className="categoriesSwiper">
                            {items.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className='categories-inner'>
                                        <Link to={data.acf.custom_url}>
                                            <div className='categories-img' id={data.id} ><img src={data.acf.category_image} /></div>
                                            <h3>{data.name}</h3>
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


export default Categories;
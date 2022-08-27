import './Interior.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";


class Interior extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/interior_slider?_embed')
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
                <section className='interior-main'>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}

                        className="myInterior">

                        {items.map((data, i) => (
                            <SwiperSlide key={i}>
                                <div className='interior-inner'>
                                    <div className='interior-bgImg'>
                                        <img src={data._embedded['wp:featuredmedia']['0'].source_url} />
                                    </div>
                                    <div className='interior-content'>
                                        <h2>{data.acf.top_title}</h2>
                                        <h3>{data.title.rendered}</h3>
                                        <a href={data.acf.url}>View More</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            );
        }
    }
}


export default Interior;

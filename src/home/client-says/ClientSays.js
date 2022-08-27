import './ClientSays.css';
import React from 'react';
import codeImg from "./images/code-img.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";


class ClientSays extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/client_says')
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
        const regex = /(<([^>]+)>)/ig;
        if (!isLoaded) {
            return (
                <div className='loader'></div>
            );
        } else {
            return (
                <section className='client-says-main'>
                    <div className='client-says-size'>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}

                            className="mySwiper">

                            { items.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className='client-says-inner'>
                                        <img src={codeImg} />
                                        <h3>Client Says</h3>
                                        <p>{data.title.rendered}</p>
                                        <h4>{data.content.rendered.replace(regex, '')}</h4>
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

export default ClientSays;
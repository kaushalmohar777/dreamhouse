import './ProjectCompleted.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";


class ProjectCompleted extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/project_completed?_embed')
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
                <section className='project-completed-main'>
                    <div className='completed-title'>
                        <h3>Project Completed in PAN India</h3>
                    </div>
                    <div className='project-completed-size'>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={6}
                            spaceBetween={40}

                            className="completedSwiper">
                            {items.map((data, i) => (
                                <SwiperSlide key={i}>
                                    <div className='completed-inner'>
                                        <div className='completed-img'><img src={data._embedded['wp:featuredmedia']['0'].source_url} /></div>
                                        <h3>{data.title.rendered}</h3>
                                        <p>{data.acf.total_projects_number} Projects</p>
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


export default ProjectCompleted;
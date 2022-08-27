import React, { useState, useEffect } from 'react';
import './Elevation.css';
import BannerImg from "./images/about-banner.jpg";
import { Link } from "react-router-dom";
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from '../fancybox';

export default function Elevation() {

    if (localStorage.getItem("Elevation-Simplex") == null) {
        var user = [];
        localStorage.setItem('Elevation-Simplex', JSON.stringify(user));
    }

    if (localStorage.getItem("Elevation-Duplex") == null) {
        var user = [];
        localStorage.setItem('Elevation-Duplex', JSON.stringify(user));
    }

    if (localStorage.getItem("Elevation-Triplex") == null) {
        var user = [];
        localStorage.setItem('Elevation-Triplex', JSON.stringify(user));
    }

    const [SimplexData, SimplexDetails] = useState(JSON.parse(localStorage.getItem('Elevation-Simplex')));
    const [DuplexData, DuplexDetails] = useState(JSON.parse(localStorage.getItem('Elevation-Duplex')));
    const [TriplexData, TriplexDetails] = useState(JSON.parse(localStorage.getItem('Elevation-Triplex')));

    const getSimplexData = () => {
        // Simplex
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=53&per_page=3`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('Elevation-Simplex', JSON.stringify(res));
                SimplexDetails(JSON.parse(localStorage.getItem('Elevation-Simplex')));
            });

        // Duplex
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=52&per_page=3`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('Elevation-Duplex', JSON.stringify(res));
                DuplexDetails(JSON.parse(localStorage.getItem('Elevation-Duplex')));
            });

        // Triplex
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=51&per_page=3`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('Elevation-Triplex', JSON.stringify(res));
                TriplexDetails(JSON.parse(localStorage.getItem('Elevation-Triplex')));
            })
    }

    useEffect(() => {
        getSimplexData()
    }, [])


    return (
        <>
            <section className='about-banner-main'>
                <div className='about-banner-sec'>
                    <img src={BannerImg} />
                </div>
            </section>

            <section className='elevations-section'>
                <div className='container-size'>
                    <div className='heading-plan'>
                        <h2>ELEVATIONS</h2>
                        <p>Who won’t love to look and feel at their ‘Dream House’ model?</p>
                        <p>With our 3D Elevation model, you can actually visualize how amazing your space is going to look. Just after the completion of your floor plan, we will prepare your 3D view to your imagination that will help you to feel and live your dream home before it gets ready. It will give you a realistic view of your imagination. With the help of our 3D elevations, you can connect with your place even more. So, Let your home exterior be the topic of talks amongst your near ones.</p>
                    </div>

                    <div className='row'>
                        <div className='elevations-box'>
                            <div className="cat-name">Simplex</div>
                            <Fancybox>
                                {SimplexData.map((item, i) => {
                                    return <div className='col-grid' key={i}>
                                        <div className="inner-ele-box">
                                            <a data-fancybox="gallery" href={item.featured_url} ><img src={item.featured_url} /></a>
                                        </div>
                                    </div>
                                })}
                            </Fancybox>
                            <div className="btn-view-more">
                                <Link to="/elevation/simplex" className="btn">View More</Link>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='elevations-box'>
                            <div className="cat-name">Duplex</div>
                            <Fancybox>
                                {DuplexData.map((item, i) => {
                                    return <div className='col-grid' key={i}>
                                        <div className="inner-ele-box">
                                            <a data-fancybox="gallery" href={item.featured_url} ><img src={item.featured_url} /></a>
                                        </div>
                                    </div>
                                })}
                            </Fancybox>
                            <div className="btn-view-more">
                                <Link to="/elevation/duplex" className="btn">View More</Link>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='elevations-box'>
                            <div className="cat-name">Triplex</div>
                            <Fancybox>
                                {TriplexData.map((item, i) => {
                                    return <div className='col-grid' key={i}>
                                        <div className="inner-ele-box">
                                            <a data-fancybox="gallery" href={item.featured_url} ><img src={item.featured_url} /></a>
                                        </div>
                                    </div>
                                })}
                            </Fancybox>
                            <div className="btn-view-more">
                                <Link to="/elevation/triplex" className="btn">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
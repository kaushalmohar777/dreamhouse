import React, { useState, useEffect } from 'react';
import './Interiors.css'
import BannerImg from "./images/about-banner.jpg";
import { Link } from "react-router-dom";


export default function Interiors() {


    if (localStorage.getItem("InteriorsPage") == null) {
        var user = [];
        localStorage.setItem('InteriorsPage', JSON.stringify(user));
    }
    const [InteriorsData, InteriorsDetails] = useState(JSON.parse(localStorage.getItem('InteriorsPage')));

    const getInteriorsData = () => {
        
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/service_category/?parent=41`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('InteriorsPage', JSON.stringify(res));
                InteriorsDetails(JSON.parse(localStorage.getItem('InteriorsPage')));
              
            })
    }

    useEffect(() => {
        getInteriorsData()
    }, [])

    return (
        <>
            <section className='about-banner-main'>
                <div className='about-banner-sec '>
                    <img src={BannerImg} />
                </div>
            </section>
            <section className="interiors-list-sec">
                <h1 className="interiors-title">Interiors</h1>
                <div className="container-size">
                    <div className="interiors-list-inner">
                        {InteriorsData.map((item, i) => {
                            return <div className="interiors-list-box" key={i}>
                                <div className="interiors-list-img"> <Link to={`/category/interior-design/${item.slug}`}><img src={item.acf.category_image} /></Link></div>
                                <h3><Link to={`/category/interior-design/${item.slug}`}>{item.name}</Link></h3>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
import React, { useState, useEffect } from 'react';
import BannerImg from "../plans/plans-banner/images/about-banner.jpg";
import square from "../plans/plans-banner/images/square-feet.png";
import east from "../plans/plans-banner/images/east-direction.png";
import squirearea from "../plans/plans-banner/images/squire-area.png";
import { Link } from 'react-router-dom';

function Under1500SqaureFeetPlan() {


    if (localStorage.getItem("Under1500sqftPage") == null) {
        var user = [];
        localStorage.setItem('Under1500sqftPage', JSON.stringify(user));
    }
    const [Under1500sqft, u1500sqft] = useState(JSON.parse(localStorage.getItem('Under1500sqftPage')))
    const getUnder1500sqft = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=60`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('Under1500sqftPage', JSON.stringify(res));
                u1500sqft(JSON.parse(localStorage.getItem('Under1500sqftPage')));
            })
    }

    useEffect(() => {
        getUnder1500sqft()
    }, [])


    return (
        <>
            <section className='about-banner-main'>
                <div className='about-banner-sec'>
                    <img src={BannerImg} />
                </div>
            </section>
            <section className='plan-section'>
                <div className='container-size'>
                    <div className='plan-inner'>
                        <div className='heading-plan'>
                            <h2> 1200-1500 Square Feet Plan</h2>
                            <p>The floor plan is the basic structure of your success. We render the best floor plan services to you.
                                Our expert team specializes in handling the raw data and modifying it in the best manner.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='plan-section'>
                <div className='container-size'>
                    <div className='row'>
                        <div className='list-category-box list-category-box-main'>
                            {Under1500sqft.map((item, i) => {
                                return <div className='cate-area-box' key={i}>
                                    <div className='cate-area-left'>
                                        <Link to={`/plans/${item.slug}`}><img src={item.featured_url} /></Link>
                                    </div>
                                    <div className='cate-list-right'>
                                        <div className='cate-inner-top'>
                                            <div className='code-area'>
                                                <p>DESIGN CODE</p>
                                                <h4>{item.acf.code}</h4>
                                            </div>
                                            <ul>
                                                <li><img src={squirearea} /><span>{item.acf.plot_size}</span></li>
                                                <li><img src={square} /><span>{item.acf.area}</span></li>
                                                <li><img src={east} /><span> {item.acf.plot_facing}</span></li>
                                            </ul>
                                            <h3>Simplex House Plan</h3>
                                        </div>
                                        <div className='cate-inner-bottome'>
                                            <Link className="btn" type="button" to={`/plans/${item.slug}`}>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Under1500SqaureFeetPlan;
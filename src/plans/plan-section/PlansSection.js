import React, { useState, useEffect } from 'react';
import './PlansSection.css';
import square from "../plans-banner/images/square-feet.png";
import east from "../plans-banner/images/east-direction.png";
import squirearea from "../plans-banner/images/squire-area.png";
import { Link } from 'react-router-dom';


function PlansSection() {

    // Floor Plan - Under 1000 sqft

    if (localStorage.getItem("Under1000sqft") == null) {
        var user = [];
        localStorage.setItem('Under1000sqft', JSON.stringify(user));
    }
    const [Under1000sqft, u1000sqft] = useState(JSON.parse(localStorage.getItem('Under1000sqft')))
    const getUnder1000sqft = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=59&per_page=6`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('Under1000sqft', JSON.stringify(res));
                u1000sqft(JSON.parse(localStorage.getItem('Under1000sqft')));
            })
    }

    useEffect(() => {
        getUnder1000sqft()
    }, [])


    // Floor Plan - 1000 To 1200 sqft

    if (localStorage.getItem("1000-1200-sqaure-feet-plan") == null) {
        var user = [];
        localStorage.setItem('1000-1200-sqaure-feet-plan', JSON.stringify(user));
    }
    const [Under1200sqft, u1200sqft] = useState(JSON.parse(localStorage.getItem('1000-1200-sqaure-feet-plan')))
    const Under1000to1200sqft = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=58&per_page=6`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('1000-1200-sqaure-feet-plan', JSON.stringify(res));
                u1200sqft(JSON.parse(localStorage.getItem('1000-1200-sqaure-feet-plan')));
            })
    }

    useEffect(() => {
        Under1000to1200sqft()
    }, [])

    // Floor Plan - 1200 To 1500 sqft

    if (localStorage.getItem("1200-1500-square-feet-plan") == null) {
        var user = [];
        localStorage.setItem('1200-1500-square-feet-plan', JSON.stringify(user));
    }
    const [Under1500sqft, u1500sqft] = useState(JSON.parse(localStorage.getItem('1200-1500-square-feet-plan')))
    const Under1200to1500sqft = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=60&per_page=6`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('1200-1500-square-feet-plan', JSON.stringify(res));
                u1500sqft(JSON.parse(localStorage.getItem('1200-1500-square-feet-plan')));
            })
    }

    useEffect(() => {
        Under1200to1500sqft()
    }, [])

    // Floor Plan - 1500 To 2000 sqft

    if (localStorage.getItem("1500-2000-square-feet-plan") == null) {
        var user = [];
        localStorage.setItem('1500-2000-square-feet-plan', JSON.stringify(user));
    }
    const [Under2000sqft, u2000sqft] = useState(JSON.parse(localStorage.getItem('1500-2000-square-feet-plan')))
    const Under1500to2000sqft = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=57&per_page=6`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('1500-2000-square-feet-plan', JSON.stringify(res));
                u2000sqft(JSON.parse(localStorage.getItem('1500-2000-square-feet-plan')));
            })
    }

    useEffect(() => {
        Under1500to2000sqft()
    }, [])

    // Floor Plan - 2000 To 3000 sqft

    if (localStorage.getItem("2000-3000-square-feet-plan") == null) {
        var user = [];
        localStorage.setItem('2000-3000-square-feet-plan', JSON.stringify(user));
    }
    const [Under3000sqft, u3000sqft] = useState(JSON.parse(localStorage.getItem('2000-3000-square-feet-plan')))
    const Under2000to3000sqft = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=56&per_page=6`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('2000-3000-square-feet-plan', JSON.stringify(res));
                u3000sqft(JSON.parse(localStorage.getItem('2000-3000-square-feet-plan')));
            })
    }
    useEffect(() => {
        Under2000to3000sqft()
    }, [])

    //Floor Plan - Above 3000 sqft

    if (localStorage.getItem("above-3000-sqaure-feet-plan") == null) {
        var user = [];
        localStorage.setItem('above-3000-sqaure-feet-plan', JSON.stringify(user));
    }
    const [Above_3000_Sqaure, above3000sqft] = useState(JSON.parse(localStorage.getItem('above-3000-sqaure-feet-plan')))
    const Above3000sqaure = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=55&per_page=6`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('above-3000-sqaure-feet-plan', JSON.stringify(res));
                above3000sqft(JSON.parse(localStorage.getItem('above-3000-sqaure-feet-plan')));
            })
    }
    useEffect(() => {
        Above3000sqaure()
    }, [])



    return (
        <>
            <section className='plan-section'>
                <div className='container-size'>
                    <div className='plan-inner'>
                        <div className='heading-plan'>
                            <h2>FLOOR PLAN</h2>
                            <p>The floor plan is the basic structure of your success. We render the best floor plan services to you.
                                Our expert team specializes in handling the raw data and modifying it in the best manner.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='plan-section plan-main-sec'>
                <div className='container-size'>
                    <div className='row'>
                        <div className='list-category-box'>
                            <div className="cat-name">Floor Plan - Under 1000 sqft</div>
                            {Under1000sqft.map((item, i) => {
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
                            <div className="btn-view-more">
                                <Link className="btn" type="button" to="/services/under-1000-sqaure-feet-plan">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='list-category-box'>
                            <div className="cat-name">Floor Plan - 1000 To 1200 sqft</div>
                            {Under1200sqft.map((item, i) => {
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
                            <div className="btn-view-more">
                                <Link className="btn" type="button" to='/services/1000-1200-sqaure-feet-plan'>View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='list-category-box'>
                            <div className="cat-name">Floor Plan - 1200 To 1500 sqft</div>
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
                            <div className="btn-view-more">
                                <Link className="btn" type="button" to='/services/1200-1500-square-feet-plan'>View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='list-category-box'>
                            <div className="cat-name">Floor Plan - 1500 To 2000 sqft</div>
                            {Under2000sqft.map((item, i) => {
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
                            <div className="btn-view-more">
                                <Link className="btn" type="button" to='/services/1500-2000-square-feet-plan'>View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='list-category-box'>
                            <div className="cat-name">Floor Plan - 2000 To 3000 sqft</div>
                            {Under3000sqft.map((item, i) => {
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
                            <div className="btn-view-more">
                                <Link className="btn" type="button" to='/services/2000-3000-square-feet-plan'>View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='list-category-box'>
                            <div className="cat-name">Floor Plan - Above 3000 sqft</div>

                            {Above_3000_Sqaure.map((item, i) => {
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
                            <div className="btn-view-more">
                                <Link className="btn" type="button" to='/services/above-3000-sqaure-feet-plan'>View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PlansSection;

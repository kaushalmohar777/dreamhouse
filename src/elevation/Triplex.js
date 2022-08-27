import React, { useState, useEffect } from 'react';
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from '../fancybox';

function Triplex() {

    if (localStorage.getItem("TriplexPage") == null) {
        var user = [];
        localStorage.setItem('TriplexPage', JSON.stringify(user));
    }
    const [TriplexData, TriplexDetails] = useState(JSON.parse(localStorage.getItem('TriplexPage')))
    const getTriplexData = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=51`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('TriplexPage', JSON.stringify(res));
                TriplexDetails(JSON.parse(localStorage.getItem('TriplexPage')));
            })
    }

    useEffect(() => {
        getTriplexData()
    }, [])


    return (
        <>
            <section className='elevations-section'>
                <div className='container-size'>
                    <div className='row'>
                        <div className='row'>
                            <div className='elevations-box elevations-cat-list'>
                                <div className="cat-name"><h1>Triplex</h1></div>
                                <Fancybox>
                                    {TriplexData.map((item, i) => {
                                        return <div className='col-grid' key={i}>
                                            <div className="inner-ele-box">
                                                <a data-fancybox="gallery" href={item.featured_url} ><img src={item.featured_url} /></a>
                                            </div>
                                        </div>
                                    })}
                                </Fancybox>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Triplex;
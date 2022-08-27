import React, { useState, useEffect } from 'react';
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from '../fancybox';

function Duplex() {

    if (localStorage.getItem("DuplexPage") == null) {
        var user = [];
        localStorage.setItem('DuplexPage', JSON.stringify(user));
    }
    const [DuplexData, DuplexDetails] = useState(JSON.parse(localStorage.getItem('DuplexPage')))
    const getDuplexData = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=52`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('DuplexPage', JSON.stringify(res));
                DuplexDetails(JSON.parse(localStorage.getItem('DuplexPage')));
            })
    }

    useEffect(() => {
        getDuplexData()
    }, [])


    return (
        <>
            <section className='elevations-section'>
                <div className='container-size'>
                    <div className='row'>
                        <div className='row'>
                            <div className='elevations-box elevations-cat-list'>
                                <div className="cat-name"><h1>Duplex</h1></div>
                                <Fancybox>
                                    {DuplexData.map((item, i) => {
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

export default Duplex;
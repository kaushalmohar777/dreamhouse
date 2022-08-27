import React, { useState, useEffect } from 'react';
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from '../fancybox';

function Simplex() {

    if (localStorage.getItem("SimplexPage") == null) {
        var user = [];
        localStorage.setItem('SimplexPage', JSON.stringify(user));
    }
    const [SimplexData, SimplexDetails] = useState(JSON.parse(localStorage.getItem('SimplexPage')))
    const getSimplexData = () => {
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?service_category=53`)
            .then(async (res) => res.json())
            .then((res) => {
                localStorage.setItem('SimplexPage', JSON.stringify(res));
                SimplexDetails(JSON.parse(localStorage.getItem('SimplexPage')));
            })
    }

    useEffect(() => {
        getSimplexData()
    }, [])


    return (
        <>
            <section className='elevations-section'>
                <div className='container-size'>
                    <div className='row'>
                        <div className='row'>
                            <div className='elevations-box elevations-cat-list'>
                                <div className="cat-name"><h1>Simplex</h1></div>
                                <Fancybox>
                                    {SimplexData.map((item, i) => {
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

export default Simplex;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InteriorDesignCategory.css';
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from '../fancybox';


function InteriorDesignCategory() {
    const params = useParams();
    const { slug } = params;
    //console.warn(slug);

    const [Users, fetchUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true);
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services/?filter[service_category]=${slug}`)
            .then((res) => res.json())
            .then((res) => {
                //console.log(res)
                fetchUsers(res)
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {isLoading ? <div class="loader-spinner-p" > <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> :
                <>
                    <section className='interior-design-main'>
                        <h3>{`${slug}`}</h3>
                        <div className='interior-design-slider'>
                            <ul className='postimg-list'>
                                <Fancybox>
                                    {Users.map((item, i) => {
                                        return (
                                            <li key={i}><a data-fancybox="gallery" href={item.featured_url} ><img src={item.featured_url} /></a> </li>
                                        )
                                    })}
                                </Fancybox>
                            </ul>
                        </div>
                    </section>
                </>
            }
        </>
    );
}
export default InteriorDesignCategory;




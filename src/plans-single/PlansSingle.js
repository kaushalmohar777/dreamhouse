import React, { useState, useEffect } from 'react';
import './PlansSingle.css'
import square from "./images/square-feet.png";
import east from "./images/east-direction.png";
import squirearea from "./images/squire-area.png";
import { useParams } from 'react-router-dom';
import "@fancyapps/ui/dist/fancybox.css";
import Fancybox from '../fancybox';


export default function PlansSingle() {

    const params = useParams();
    const { slug } = params;
    console.warn(slug)

    const [Users, fetchUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true);
        fetch(`https://dreamhousemakerz.com/production/wp-json/wp/v2/services?slug=${slug}`)
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('Singlepost', JSON.stringify(res));
                fetchUsers(JSON.parse(localStorage.getItem('Singlepost')));
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {isLoading ? <div class="loader-spinner-p"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> :
                <>
                    <section className='plan-section plan-signle-page'>
                        <div className='container-size'>
                            <div className='plan-inner'>
                                <div className='heading-plan'>
                                {Users.map((item, i) => {
                                            return <h2 key={i}>{item.title.rendered}</h2>
                                })}
                                </div>
                            </div>
                            <div className='row plan-signle-inner'>
                                <div className='model-area-sn'>
                                    <Fancybox>
                                        {Users.map((item, i) => {
                                            return <div className='popup-area' key={i}>
                                                <a data-fancybox="gallery" href={item.featured_url} ><img src={item.featured_url} /></a>
                                            </div>
                                        })}
                                    </Fancybox>
                                </div>
                                <div className='details-sn'>
                                    <h2>PLOT DETAILS</h2>
                                    <div className='cate-inner-top'>
                                        <ul>
                                            {Users.map((item, i) => {
                                                return <> <li key={i}><img src={square} /><span> {item.acf.plot_size}</span></li>
                                                    <li key={i}><img src={east} /><span> {item.acf.area}</span></li>
                                                    <li key={i}><img src={squirearea} /><span> {item.acf.plot_facing} Facing</span></li>
                                                    <li key={i}><img src={squirearea} /><span> {item.acf.name} </span></li>
                                                    <li key={i}><img src={squirearea} /><span> {item.acf.location} </span></li>
                                                    <li key={i}><img src={squirearea} /><span> {item.acf.code} </span></li>
                                                </>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section><section className='sn-form-plans' id='sn-form-plans'>
                        <div className='container-size'>
                            <div className='row'>
                                <div className='form-plans'>

                                    <h3>POST YOUR QUERY</h3>
                                    <form>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label>* NAME</label>
                                                <input type="name" className="form-control" placeholder="Name"></input>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>* MOBILE NUMBER</label>
                                                <input type="mobile" className="form-control" placeholder="Your Mobile"></input>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label>* EMAIL ADDRESS</label>
                                                <input type="email" className="form-control" placeholder="Email Address"></input>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>CITY</label>
                                                <input type="City" className="form-control" placeholder="City"></input>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <label>* REQUIREMENTS</label>
                                                <input type="Requirment" className="form-control" placeholder="Requirment"></input>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <label>* PLOT SIZE </label>
                                                <textarea type="text" rows="4" className="form-control" placeholder="Plot Size"></textarea>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <button type='button'>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    );
}
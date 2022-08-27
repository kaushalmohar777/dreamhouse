import './CompleteCustomized.css';
import React from 'react';
import { Link } from 'react-router-dom';

class CompleteCustomized extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://dreamhousemakerz.com/production/index.php/wp-json/wp/v2/pages/10/')
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
                <section className='complete-customized-main' style={{backgroundImage: `url('${items.acf.complete_customized.bg_images}')`}}>
                    <div className='complete-customized-inner'>
                        <h3><strong> {items.acf.complete_customized.title}</strong><br />{items.acf.complete_customized.sub_title}</h3>
                        <div className="customized-btn">
                            <div className="customized-btn-left">
                                <Link to='/contact'>{items.acf.complete_customized.button_title_1}</Link>
                            </div>
                            <div className="customized-btn-right">
                                <Link to='/contact'>{items.acf.complete_customized.button_title_2}</Link>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
}

export default CompleteCustomized;
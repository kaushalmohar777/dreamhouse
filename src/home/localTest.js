import React from "react";

export class Hometest extends React.Component {

    state = {
        comment: []
    }
    componentDidMount() {
        var comment = JSON.parse(localStorage.getItem('sites'));
        this.state = {
            comments: comment
        };
        console.log("comment retrieve :", comment); 
    }



    render() {

        return (
            <section className='home-banner-main'>
                <div className='home-banner-inner'>
                    {
                        this.state.comment
                            .map(person =>
                                <>
                                    <p>{person.acf.banner_section.top_title}</p>
                                    <h1>{person.acf.banner_section.banner_title}</h1>
                                    <h2>{person.acf.banner_section.sub_title}</h2>
                                    <a href={person.acf.banner_section.button_url}>{person.acf.banner_section.button_title}</a>
                                </>
                            )
                    }
                </div>
            </section>
        )

    }
}
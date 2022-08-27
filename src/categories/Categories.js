import React, { useState, useEffect } from "react";
import './Categories.css';
import axios from 'axios';


const cateurl = axios.create({
    baseURL: "https://dreamhousemakerz.com/production/wp-json/wp/v2/service_category/" 
});



const Categories = () => {
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
        cateurl.get('?_limit=10').then((response) => {
          setPosts(response.data);
            console.log(response.data);

       });
    }, []);
 
    return (
    <div className="app">
        <h2>All Posts </h2>
        {posts.map((post) => {
           return (
              <div className="post-card" key={post.id}>
                <img src={post.acf.category_image} />
                 <h2 className="post-title">{post.name}</h2>
                 <div className="button">
                    <div className="delete-btn">Delete</div>
                 </div>
              </div>
           );
        })}
      </div>


    );
 };
 
 export default Categories;


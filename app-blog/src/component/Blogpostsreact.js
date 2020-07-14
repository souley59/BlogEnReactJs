import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Bloguserreact() {

    const usersStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'spaceAround'

    }

    const [tabposts, setTabposts] = useState([]);

    async function fetchPosts() {
        const result = await fetch('http://localhost:3000/posts/userid/' + recupValues('userid'));
        const data = await result.json();
        setTabposts(data);

    }
    useEffect(() => {
        fetchPosts();
    }, []);

    function recupValues(sVar) {
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }
    const listPosts = () => {

        console.log(tabposts);
        return tabposts.map((item, i) => {

           // if (item.userId == recupValues('userId')) {

                return (
                    <div className="posts row-fluid list-group-item list-group-item-action list-group-item-light " key={i} ><br />
                        <div className="col-sm-12">
                            <br/>
                            <Link title="click to move on comments" to={"/comments/?postId=" + item.id}><span> Title:</span> {item.title}</Link><br /><br />
                            <p><span> Body:</span><span id="MAIL"> {item.body}</span></p>
                        </div>

                    </div>

                );
            }
       // }
        );


    }


    return (



        <div id="containerUsers" className="container-fluid" >
            <div id="ligneTitre" className="row-fluid">
                <h1 id="Titre" className="animated jackInTheBox col-xm-12">BLOG Posts</h1>
            </div><br /><br/>
            <div className="row-fluid" >
                <div style={usersStyle} className="row-fluid">{listPosts()}</div>
            </div>
        </div>

    );
}
export default Bloguserreact;
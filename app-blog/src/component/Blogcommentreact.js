import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Bloguserreact() {

    const usersStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'spaceAround'


    }


    const [tabcomments, setTabcomments] = useState([]);

    async function fetchComments() {
        const result = await fetch('http://localhost:3000/comments/postid/'+ recupValues('postid'));
        const data = await result.json();
        setTabcomments(data);

    }
    useEffect(() => {
        fetchComments();
    }, []);

    function recupValues(sVar) {
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }
    const listComments = () => {

        console.log(tabcomments);
        return tabcomments.map((item, i) => {

            //if (item.postId == recupValues('postId')) {

                return (
                    
                    <div className="posts row-fluid list-group-item list-group-item-action list-group-item-light " key={i} ><br />
                        <div className="col-sm-12">
                            <br />
                            <Link title="click to move on users" to={"/"}><span> Mail:</span> {item.email}</Link><br /><br />
                            <p><span> Name:</span><span id="MAIL"> {item.name}</span></p>
                            <p><span> Body:</span><span id="MAIL"> {item.body}</span></p>
                        </div>

                    </div>
                );
            }
        //}
        );


    }


    return (


        <div id="containerUsers" className="container-fluid" >
            <div id="ligneTitre" className="row-fluid">
                <h1 id="Titre" className="animated flipInX slower col-xm-12">BLOG Comments</h1>
            </div><br /><br/>
            <div className="row-fluid" >
                <div style={usersStyle} className="row-fluid">{listComments()}</div>
            </div>
        </div>





    );
}
export default Bloguserreact;
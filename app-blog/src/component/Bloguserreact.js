import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Bloguserreact() {

    const usersStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justyContent: 'spaceAround',

    }
    const idStyle ={
        color:'red'
    }
    const [tabusers, setTabusers] = useState([]);

    async function fetchUsers() {
        const result = await fetch('http://localhost:3000/users');
        const data = await result.json();
        setTabusers(data);

    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const listUsers = () => {
        console.log(tabusers);
        return tabusers.map((item, i) => {
            return (
                <div className="users row-fluid list-group-item list-group-item-action list-group-item-light " key={i} ><br/>
                    <div className="infos col-sm-9">
                        <p style={idStyle}><span> User Id:</span> {item.id}</p>
                        <Link title="click to move on posts" to={"/posts/?userId=" + item.id}><span> User:</span> {item.name}</Link><br /><br />
                        <p><span> Mail:</span><span id="MAIL"> {item.email}</span></p>
                    </div>
                    <div className=" image col-sm-3">
                        <img src={"https:/picsum.photos/100/100?random=" + item.id}/>
                    </div>
                </div>
            );
        });
    }


    return (

        <div id="containerUsers" className="container-fluid" >
            <div id="ligneTitre" className="row-fluid">
                <h1 id="Titre" className="animated zoomIn slower col-xm-12">BLOG Users</h1>
            </div><br /><br/>
            <div className="row-fluid" >
                <div style={usersStyle} className="row-fluid">{listUsers()}</div>
            </div>
        </div>






    );
}
export default Bloguserreact;
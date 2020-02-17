import React from 'react';


export default function Search({displayMatches}) {
    return (
        <div>
            <input onChange={displayMatches} style={style.search} placeholder="Search"/>
        </div>
    );
};

const style = {
    search: {
        width: '100%',
        marginTop: "3vh",
        marginBottom: "5vh",
        boxShadow: "0px 2px 30px -2px rgba(214,214,214,1)",
        padding: '10px 15px',
        border: '1px solid #ccc',
        color: '#A0A0A0'
    }
};

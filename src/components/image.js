import React from "react";

export default function Image({src}) {
    return (
        <div>
            {src ? <img style={style} src={src} alt="pokemon"/> : <p style={style}>No Image Found</p>}
        </div>);
}

const style = {
    height: '100px',
    width: '100px',
    margin: '30px'
};
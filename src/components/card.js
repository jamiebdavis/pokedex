import React from "react";

export default function Card({name, height, weight, ability}) {
    return (
        <div style={style.card}>
            <div style={style.container}>
                <div>
                    <p style={style.name}>
                        {name}
                    </p>
                    <p>Weight: {weight} Kg</p>
                    <p>Height: {height} cm</p>
                </div>

                <div style={style.abilities}>
                    <p>Abilities</p>
                    {ability}
                </div>
            </div>
        </div>
    );
}

const style = {
    card: {
        display: "initial",
        color: "black",
        height: "180px",
        width: "500px",
        marginBottom: "0.5em",
        marginTop: "0.5em",
        marginLeft: "50px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 11px 30px -2px rgba(130,127,130,1)"
    },
    container: {
        display: "flex",
        justifyContent: "space-around"
    },
    name: {
        textTransform: "capitalize",
        fontWeight: 'bold'
    },
    data: {
        width: "130px",
        margin: '10px',
    },
    abilities: {
        width: "200px"
    },
    ability: {
        backgroundColor: "lightgrey",
        borderRadius: '50px',
        color: 'black'
    }
};

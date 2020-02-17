import React from "react";

export default function ListItem({name, showInfo}) {
    return (
        <div>
            <div onClick={() => showInfo(name)} style={style.item}>{name}</div>
        </div>

    )
}

const style = {
    item: {
        color: "black",
        height: "6vh",
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: "3px",
        fontWeight: "bold",
        textTransform: "capitalize",
        textAlign: 'center',
        margin: "0 auto 8px",
        paddingTop: "10px"
    }
};

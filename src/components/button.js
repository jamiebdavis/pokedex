import React from "react";

export default function Button({postsPerPage, totalPosts, nextPage, prevPage, currentPage}) {
    const pageCount = Math.ceil(totalPosts / postsPerPage);

    return (
        <div style={style.buttons}>
            <div>
                {currentPage !== 1 ? <button onClick={prevPage} style={style.previous}>PREV</button> : null}
            </div>
            <div>
                {currentPage !== pageCount ? <button onClick={nextPage}  style={style.next}>NEXT</button> : null }
            </div>
        </div>
    );
}

const style = {
    buttons: {
        display: "flex",
        justifyContent: "space-between"
    },
    previous: {
        backgroundColor: "tomato",
        padding: "15px 20px",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        margin: "20px",
        border: "none"
    },
    next: {
        backgroundColor: "tomato",
        padding: "15px 20px",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        margin: "20px",
        border: "none"
    }
};

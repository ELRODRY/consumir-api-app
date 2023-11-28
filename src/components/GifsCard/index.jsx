import React from "react";
import "./gifCardStyles.css";
function GifsCard({ data }) {
    return (
        <div className="testCard">
            <div className="imgContainer">
                <img
                    className="image"
                    src={data.url.url}
                    alt={data.title}
                    key={data.id}
                />
            </div>
            <div className="pieDeGifs">
                <p className="nameContainer">{data.title}</p>
                <a href={data.url.url} target="_blank" >Click aqui Fuente del enlace</a>
            </div>
        </div>

    );
}

export default GifsCard;

import React from "react";
import "./gifCardStyles.css";
function GifsCard({ data }) {
    return (
        <div className="testCard" style={{ back: "1px solid red" }}>
            <div className="imgContainer">
                <img
                    className="image"
                    src={data.url.url}
                    alt={data.title}
                    key={data.id}
                />
            </div>

            <p className="nameContainer">{data.title}</p>
        </div>
    );
}

export default GifsCard;

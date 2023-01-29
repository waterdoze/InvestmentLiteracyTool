import React from "react";

function Resources({revealNews}) {
    return (
        <div className="resources-component">
            <button className="news-button" onClick={revealNews}>
                <i className="fa-solid fa-newspaper" />
            </button>
            <a className="resource-link" href="https://www.investopedia.com/">Investopedia</a>
        </div>
    )
}

export default Resources;
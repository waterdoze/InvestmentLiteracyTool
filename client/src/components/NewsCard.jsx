import React from "react";

function NewsCard({news}) {
    return (Object.keys(news).length !== 0) ? 
    (
        <div className="news-card">
            <h1 className="news-card-headline">{news.headline}</h1>
            <p className="news-card-summary">{news.summary}</p>
        </div>
    )
    : <div />;
}

export default NewsCard;
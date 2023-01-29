import React from "react";
import NewsCard from "./NewsCard";

function NewsPane({newsList}) {
    return (
        <div id="NewsPane">
            {newsList.map((news) => (
                <NewsCard news={news} />
            ))}
        </div>
    );
}

export default NewsPane;
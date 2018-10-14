import React from 'react';

export default function Article(props){
    const article = props.article;
        return (
            <div>
                <h1>{article.title}</h1>
                <section>{article.text}</section>
            </div>
        );
}

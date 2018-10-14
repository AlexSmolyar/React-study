import React from 'react';
import './App.css';
import Article from './Article'
import Comment from "./Comment";

export default function ArticleList(props) {
    const articles = props.articles;
    const ArticleElements = articles.map((article) => <li key = {article.id}><Article article = {article}/>
        <Comment article = {article}/></li>);
        return (
            <ul>
                    {ArticleElements}
            </ul>
        );
}

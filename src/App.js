import React, { Component } from 'react';
import './App.css';
import mock from './api/mock'
import ArticleList from "./ArticleList";

class App extends Component {
  render() {
    return (
      <ArticleList articles = {mock.articles}/>
    );
  }
}

export default App;

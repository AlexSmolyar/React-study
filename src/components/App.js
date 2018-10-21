import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import {articles} from "../fixtures";
import UserForm from "./UserForm";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const highlighted = {
            from: new Date(2018, 9, 18),
            to: new Date(2018, 9, 20)
        };

        return (
            <div>
                <DayPicker fromMonth={new Date(2018, 8)}
                           toMonth={new Date(2018, 11)}/>
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id} />
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App
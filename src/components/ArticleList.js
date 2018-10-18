import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from "prop-types";

class ArticleList extends Component {


    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })).isRequired,
         openArticleId: PropTypes.oneOfType([
             PropTypes.string,
             PropTypes.instanceOf(null)
         ]),
         toggleOpenArticle: PropTypes.func.isRequired
    };

    render() {
        console.log(this.props)
        const {articles,openArticleId, toggleOpenArticle} = this.props;
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpenArticle(article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)
import React, {Component} from 'react';

export default class Comment extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    render() {
        const {isOpen} = this.state;
        return (
            <section>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody(isOpen)}
            </section>
        );
    }

    getBody(isOpen) {
        const article = this.props.article;
        return isOpen ? <section>{article.comments}</section> : null;
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

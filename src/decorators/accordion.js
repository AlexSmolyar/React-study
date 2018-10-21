import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    constructor(props) {
        super(props);
        this.state = {
            openItemId: props.defaultOpenId
        }
    }
    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }

    toggleOpenArticle = openItemId => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        if (openItemId === this.state.openItemId) {
            this.setState({openItemId: null})
        }
        else {
            this.setState({openItemId})
        }
    }
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        text: ''
    };

    render() {
        return (
            <form onChange = {this.handleUserChange}>
                Name: <input name='name' type = 'text' value = {this.state.username}  />
                Text: <input name='text' type = 'text' value = {this.state.text}  />
            </form>
        )
    }


    handleUserChange = (ev) => {
        console.log(ev);
        if (ev.target.value.length > 10) return

        this.setState({
            username: ev.target.value
        })
    }

}

export default UserForm
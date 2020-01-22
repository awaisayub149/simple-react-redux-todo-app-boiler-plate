import React from "react";
import { login } from "../helpers/auth"
import { TODO_LIST, TO_HOME } from "../helpers/constants";

const styles = {
    facebookBtn: {
        backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
        textAlign: 'center'
    }
}
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            username: ''
        }
    }
    handleChange(e) {
        //on change of text field
        this.setState({
            username: e.target.value
        })
    }
    handleOnSubmit(e) {
        e.preventDefault();
        if(this.state.username){
            login(this.state.username) //set in session storage
            this.props.history.push(TO_HOME) //redrict to list
        }else{
            alert('Login Required') //unauth
        }
    };
    render() {
        return (
            <form style={styles.form} onSubmit={this.handleOnSubmit}>
                <h4>Welcome Back!</h4>
                <div className='form-group row'>
                    <div className="col-lg-4 col-lg-offset-4">
                        <input className='input form-control' type='text' naem="username" onChange={this.handleChange} placeholder='Username' />
                    </div>
                </div>
                <div className='form-group row'>
                    <button className='btn' type='submit'>Log In</button>
                </div>
            </form>

        )
    }
}

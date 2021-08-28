import React, { Component } from 'react'
class Input extends Component {

    render() {
        return (
            <div className="container card mt-4 p-3 login bg-dark text-light">
                <form onSubmit={this.props.btnclick}>
                    <h1 className="text-center mb-3">Sign Up</h1>
                    Name : <input type="text" className="form-control" name="username" required /> <br />
                    E-mail : <input type="email" className="form-control" name="usermail" required /><br />
                    Password :

                    <input type="password" className="form-control" name="userpassword" required />

                    <br />

                    <div className="text-center">
                        <button className="btn btn-light" >Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Input;

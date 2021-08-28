import './App.css';
import Output from './Components/Output';
import Input from './Components/Input';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      showtable: false,
      uname: null,
      mail: null,
      password: null,
      dict: []
    }
  }

  btnclick = (event) => {
    const dict = this.state.dict;
    event.preventDefault();
    dict.push({ uname: event.target.username.value, mail: event.target.usermail.value, password: event.target.userpassword.value });

    event.target.username.value = "";
    event.target.usermail.value = "";
    event.target.userpassword.value = "";
    this.setState({
      showtable: true,
      dict
    });
  }



  ondelete = (event) => {
    var newdict = this.state.dict.filter(item => {
      return item !== event
    })
    this.setState({
      dict: newdict
    })
  }



  onedit = (eventname) => {
    const editableRow = eventname
    this.setState({
      edit: true,
      editableRow
    })

  }


  onupdate = (event) => {
    event.preventDefault();
    const editableRow = this.state.editableRow;
    editableRow.uname = event.target.uuname.value;
    editableRow.mail = event.target.uumail.value;
    editableRow.password = event.target.uupassword.value;
    this.setState({
      edit: false
    })
  }

  render() {
    return (
      <div>
        <Input btnclick={this.btnclick}></Input>
        {
          (this.state.showtable) ?
            <Output dict={this.state.dict} ondelete={this.ondelete} onedit={this.onedit}></Output>
            : null
        }
        {this.state.edit ?
          <form className="text-center mt-3" onSubmit={this.onupdate}>
            <input type="text" name="uuname" placeholder="User Name"></input>
            <input type="mail" name="uumail" placeholder="User Email"></input>
            <input type="password" name="uupassword" placeholder="User Password" ></input>
            <button >Update</button>
          </form>
          : null
        }
      </div>
    )
  }
}
export default App;

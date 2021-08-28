import React, { Component } from 'react'

class Output extends Component {

  render() {
    const dict = this.props.dict;
    return (
      <div id="Table" className="container card text-center mt-3" >

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {dict.map((item, index) => {
              return (
                <tr key={index}>
                  <td >{item.uname}</td>
                  <td >{item.mail}</td>
                  <td >{item.password}</td>
                  <td >
                    <button onClick={this.props.onedit.bind(null, item)}>Edit</button>
                    <button onClick={this.props.ondelete.bind(null, item)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Output;
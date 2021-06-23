import React, { Component } from "react";

import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <User age="30">Jhon</User>
        <User age="40">Jimmy</User>
        <User age="50">Piter</User>
      </div>
    );
  }
}

export default Users;

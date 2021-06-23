import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div> Welcome Pritom</div>;
  }
}

export default UserGreeting;

// conditional Rendering

// 1. if/else:-
// render() {
//     if (this.state.isLoggedIn) {
//       return (
//         <div>
//           <div>Welcome Pritom</div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <div>Welcome Guest</div>
//         </div>
//       );
//     }
//   }
// }

// 2. Element veriable

// render() {
//     let message;
//     if (this.state.isLoggedIn) {
//       message = <div>Welcome Pritom</div>;
//     } else {
//       message = <div>Wekcome guest</div>;
//     }
//     return <div>{message} </div>;
//   }

// 3. Ternary Conditional operator
// {this.state.isLoggedIn ? (
//     <div>Welcome Pritom</div>
//   ) : (
//     <div>Welcome Guest</div>
//   )}

// 4. Short circuit operator
// render() {
//     return this.state.isLoggedIn && <div> Welcome Pritom</div>;
//   }

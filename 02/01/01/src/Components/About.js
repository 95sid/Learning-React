import React from "react";
import ProfileComponent from "./ProfileClass";
import UserContext from "../utils/userContext";

// const Aboutus = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <p> This is Chapter 07 - Creating About us page</p>
//       <Profile />
//       <ProfileComponent name={"Siddhant"}/>
//     </div>
//   );
// };

class About extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  async componentDidMount(){

  }
  render(){
    return (
      <div>
        <h1>About us</h1>
        <UserContext.Consumer>
          {
            ({user}) => <h4 className="font-bold p-4">{user.name}-{user.email}</h4>
          }
        </UserContext.Consumer>
        <p> This is Chapter 07 - Creating About us page</p>
        <ProfileComponent />
      </div>
    );
  }
}


export default About;

/**
  Parent constructor
  Parent render
  - Child1 constructor
  - Child1 render
  - Child2 constructor
  - Child2 render
  - Child1 componentDidMount
  - Child2 componentDidMount
  Parent componentDidMount
 */

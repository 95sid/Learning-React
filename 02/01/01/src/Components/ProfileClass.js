import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "dummyName",
        public_repos: "0"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/95Sid");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>This is the Profile Component</h2>
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>Public-Repos: {this.state.userInfo.public_repos}</h2>
      </div>
    );
  }
}

export default Profile;

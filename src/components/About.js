import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent constructor");
  }

  componentDidMount() {
    //console.log("Parent component did mount");
  }
  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is About page</h2>
        <UserClass name={"Anju Bhagat"} location={"Chhattisgarh"} />
      </div>
    );
  }
}

export default About;

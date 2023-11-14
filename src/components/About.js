import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";



class About extends Component {
    constructor(props){
        super(props);

        //console.log("Parent constructor");
    }

    componentDidMount(){
        //console.log("Parent component did mount");
    }
    render() {

        //console.log("Parent render");
        return (
            <div>
             <h1>About Class Component</h1>
             <h2>This is About page</h2>
             <UserClass name={"Anju Bhagat"} location={"Chhattisgarh"}/>
            </div>
         ); 
    }
}


export default About;
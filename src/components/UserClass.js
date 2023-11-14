import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0x4_w9-CatIBlVx3uRkVnHwiORBYj8rThkg&usqp=CAU",
            }
        };
       
        //console.log("Child contructor");
    }

    async componentDidMount(){
        //console.log("Child Component did mount");

        const data =  await fetch("https://api.github.com/users/anju2210");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }
   

    render() {
        //console.log("Child render");
        const {name,location,avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0x4_w9-CatIBlVx3uRkVnHwiORBYj8rThkg&usqp=CAU" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: anjubhagat124@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;
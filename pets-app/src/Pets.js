import React, { Component } from 'react';
import Dogs from './Dogs.js';



class Pets extends Component{
    constructor(props){
        super(props);
        this.state = {
            favDog: "my dog",
            leastFavDog: "chihuahua"
        }
    }
    componentDidMount(){
        console.log("The component Pet did mount");
        this.setState({favDog:"your dog"})
        this.setState({leastFavDog:"Golden Retriever"})

    }
    render(){
        return(
            <div>
            <h1>List of Pets</h1>
            <Dogs/>
            <h3> My favorite dog is {this.state.favDog}</h3>
            <h3>My least favorite dog is a {this.state.leastFavDog}</h3>
            </div>
        );
        }
}

export default Pets;
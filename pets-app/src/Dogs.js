import React, {Component} from 'react';

class Dogs extends Component{
    render(){
        let dogBreeds = ["poodle", "yorkie","beagle"];
        
        return(
            <div>
            <h1>Dogs</h1>
            {
                dogBreeds.map((el,index) =>{
                    return <p key ={index}>{el}</p>
                })
            }
            </div>
        );
        }
    
}
export default Dogs;
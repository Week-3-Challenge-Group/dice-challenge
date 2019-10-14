  
import React, {Component} from 'react'

class RollList extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>Prevous Spins</h2>

                <ul>
                    {this.props.listComponent.map((element, index)=>{
                        return(<li key = {index}> {element}</li>)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default RollList
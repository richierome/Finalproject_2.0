import React, { Component } from 'react';
import './wrapper.css';
 
class Wrapper extends Component { 

    render(){
        return(
            <div className="space-wrapper row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 "> 

{/* col-sm-9 col-md-6 col-lg-8 col-xl-12 */}

                <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  {this.props.cardCharacters}
                </div> 
            </div>
        )
    }
}
  

export default Wrapper;
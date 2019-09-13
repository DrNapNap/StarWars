import React, { Component } from 'react';
import axios from 'axios'



class tist extends Component {
    state = {
        nap:[]
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/')
        .then(res =>{
            this.setState({
                nap:res.data.results
            })
            
        });
    }

    render() {
        const{nap} = this.state.nap;
        const Drnapnap = nap.length ? (
            nap.map(naps => {       
        return (
            <div key={naps.id}>
           <div>
               <link/>
               <h1>{naps.title}</h1>
               <p>{naps.body}</p>
           </div>
            </div>

                )
            })
            ) : (
                            <div>NAPpost yet</div>

        )
            

     return(
         <div>
             <h1>reqwrwq</h1>
         {Drnapnap}
         </div>
     )

    }
}

export default tist

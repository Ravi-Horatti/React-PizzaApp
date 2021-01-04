import {Component} from 'react'
import axios from 'axios'
export default class Order extends Component{
    constructor(){
        super();
         this.state = {
             username: null,
                      
           }

    axios.get("http://localhost:3300/getpizza")
        .then((response)=>{
          this.setState({
              posts: (response.data)
          })
          console.log(this.state.username.name)

           
        })
        .catch((error)=>{
            console.log("There is error")
        })
       
    }
  
 
    render(){
        return(
          <div>
            
              {this.state.posts ? (
                    <div  style={{ backgroundColor:'bisque'}}>
                    <h1></h1>
                    <div style={{paddingLeft:220}}>
                    <table border="3" cellPadding="3" cellSpacing="3" style={{width:'80%'}}>
                        <tr>
                            <th>Picture</th><th>Name</th>
                            <th>Price</th><th>Type</th>
                            <th>Toppings</th>
                            
                           
                        </tr>
                        {this.state.posts.map((p) => (
                            <tr  style={{textAlign:'center',color: "red" }}>
                                 <td> <img src={p.image} width='135' ></img></td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                        <td  >{p.type}</td>
                        <td>{p.topping.toString()}</td>
                              
                            </tr>
                            
                        ))}
                       </table>

                    </div>
               
                </div>
                ) : (
                    <div>Still Loading...</div>
                )}

          </div>
        )
    }
}
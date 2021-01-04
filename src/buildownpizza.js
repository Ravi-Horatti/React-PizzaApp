import {Component} from 'react'
import axios from 'axios'
export default class Build extends Component{
    constructor(){
        super();
         this.state = {
             username: null,
             toppingsprice:0,                      
           }
    
        this.addIngredient=this.addIngredient.bind(this); 



    axios.get("http://localhost:3300/getingredients")
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
    addIngredient(name,price){
       
       if(this.price > 0){
           this.setState({
               toppingsprice:this.toppingsprice + price
           })
       }
      }
    render(){
        return(
          <div>
            
              {this.state.posts ? (
                    <div  style={{ backgroundColor:'bisque'}}>
                    <h1></h1>
                    <div style={{paddingLeft:220}}>
                    <table border="5" cellPadding="7" cellSpacing="15"  style={{textAlign:'center',color: "red" ,width:'75%'}}>
                        <tr  style={{textAlign:'right',color: "green" }}>
                            <th>Name</th><th>Price</th>
                            <th>Select</th>    
                        </tr>
                        {this.state.posts.map((p) => (
                            

                            <tr  style={{textAlign:'center',color: "red" }}>
                                <td>{p.tname}</td>
                               
                                <td>{p.price}</td>

                                <td ><input type="checkbox" onChange={()=>this.addIngredient(p.tname,p.price)} value={p.price}/> Add  </td>

                            </tr>
                            
                        ))}
                       </table>
                       <h3 id="sum" style={{color:'rebeccapurple',textAlign:'center'}}>Total $ {this.state.toppingsprice}</h3>
                    
                    </div>
               
                </div>
                ) : (
                    <div>Still Loading...</div>
                )}

          </div>
        )
    }
}
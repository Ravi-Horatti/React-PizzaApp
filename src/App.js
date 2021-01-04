
import './App.css';

import {Link} from 'react-router-dom'




function App() {
  return (
    <div className="App">
   
   <div className="App">
            <header>
            <div class="navbar navbar-inverse">
              <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li><a class="navbar-brand">Pizzeria</a></li>
                  <li><Link to="/about"><img src="https://images.app.goo.gl/A86Xpw6ALoGaGu6R8" alt="Logo" height="55" width="80"/></Link></li> 
                  <li><Link to="/Order">Order Pizza</Link></li>
                  <li><Link to="/build">Build Ur Pizza</Link></li>
               </ul>
               <ul class="nav navbar-nav navbar-right">
                 <li><Link to="/register">Register</Link></li>
                 <li><Link to="/login">Login</Link></li>
                 <li><Link to="/cart"><button routerLink="/cart" class="btn btn-warning"><span class="glyphicon glyphicon-shopping-cart"></span>Shopping cart</button></Link></li>
                </ul>
              </div>
            </div>
           </header>
          </div>
   
     
    </div>
  );
}

export default App;

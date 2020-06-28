import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import fire from '../auth/fire';


class Navbar extends Component{

  constructor(props){
    super(props)

    this.logout=this.logout.bind(this);        
        this.state={
          user:{},      
    }
}

  componentDidMount() {
    this.authListner();
  }

  authListner(){
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({user})
        }
        else{
            this.setState({user:null})
        }
    })
}

  logout(){
    fire.auth().signOut();
  }


render(){
  return(
    <header className="App__header">
      <h1 className="App__title">Beans Love Beers</h1>
      <nav className="App__nav">
        <ul className="menu-list">
          <li className="menu-list__item">
            <NavLink className="menu-list__link" exact to="/">Home</NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink className="menu-list__link" to="/favourites">Favourites</NavLink>
          </li>
          <div>
          {this.state.user ? 
            <li className="menu-list__item">
              <li className="menu-list__link" >
                <button className="logOutButton"  onClick={this.logout}>Logout</button>
              </li>
            </li>
            :
            <li/>
          }
          </div>
        </ul>
      </nav>
    </header>
  );
        }
}

export default Navbar;
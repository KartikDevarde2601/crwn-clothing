import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils';



class  App extends React.Component {

  constructor(){
    super();
   

    this.state = {
    currentUser:null
    }
  };

   unsubscribefromAuth=null;

  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged( async UserAuth=>{
      
    if(UserAuth) {
    const UserRef = await CreateUserProfileDocument(UserAuth)

    UserRef.onSnapshot(Snapshot=>{
      this.setState({
        currentUser:{
          id:Snapshot.id,
          ...Snapshot.data()
        }
      })
    })
    
  }
  this.setState({currentUser:UserAuth})
})
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){ 
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
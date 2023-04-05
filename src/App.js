import React from 'react';
import { Switch, Route ,Redirect} from 'react-router-dom';

import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class  App extends React.Component {

   unsubscribefromAuth=null;

  componentDidMount(){

    const {setCurrentUser}=this.props

    this.unsubscribefromAuth = auth.onAuthStateChanged( async UserAuth=>{
      
    if(UserAuth) {
    const UserRef = await createUserProfileDocument(UserAuth)

    UserRef.onSnapshot(Snapshot=>{
     
      setCurrentUser({
          id:Snapshot.id,
          ...Snapshot.data()
        })
    })
    
  }
  setCurrentUser(UserAuth)
})
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  render(){ 
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/' />):(<SignInAndSignUpPage/>)} />
        </Switch> 
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)) //user his payload                                                          //
  };                                                        // setCurrentUser his a fuction that create action 
};

const mapStatetoProps=({user})=>({
  currentUser:user.currentUser
});

export default connect(mapStatetoProps,mapDispatchToProps)(App);
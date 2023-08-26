import React from 'react';
//import {  Routes, Route } from 'react-router-dom';
import {Switch , Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'; 
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth ,createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component{

  unsubscribeFromAuth = null;



  componentDidMount(){

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{ 
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setCurrentUser(userAuth);
      
      //createUserProfileDocument(user);
      //this.setState({currentUser: user}); >>>when testing
      // console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header  />
        <Switch>
          
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            {/* if user signin we dont want to show sign in page and if user not sign we show signin page*/}
            <Route exact path='/signin' render={()=> this.props.currentuser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
  
        </Switch> 
      </div>  
    );

  }

}
//function App(  return(<div/>)  ) {} we used class method cuz we want to user log and get thire state

//REDUX_________________________________
const mapStateToProps = ({user})=>({
  currentuser:user.currentuser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);

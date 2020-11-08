import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import Checkout from './pages/checkout/checkout';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchtopProps = (dispath) => ({
  setCurrentUser: (user) => dispath(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchtopProps)(App);

import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeBody from './HomebodyComponent';
import AboutusBody from './AboutusBodyComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import Project from './ProjectComponent';

 



class Main extends Component {
    constructor(props){
        super(props);
        
    }  
        
    render() { 
        const HomePage = () => {
            return (
                <HomeBody />
            );
            }

    
        
       
        
        
        return (
            <>
            <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/aboutus' component={AboutusBody} />
                    <Route path='/projects' component={Project} />
                    <Route path='/contactus' component={Contact} />

                    <Redirect to="/home" />
                </Switch>
          
            <Footer/>
            </>
         );
    }
}

 
export default Main;
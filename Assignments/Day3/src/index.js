import React from 'react';
import ReactDOM from 'react-dom';
//import './a2_app.css';
//import App from './a2_app';
import './app.css';
import App from './app';

const root=document.getElementById("root");

ReactDOM.render(<App/>,root);

/*
//const component =<h1>Hello JSX World</h1>;

//const component1 =React.createElement("h1",null,"Hello World");
const styles={
    header:{
        background:'lightgreen'
    }
}


const SiteHeader=function(args){ //anything can be used insted of term 'args' but industry convention is that we use term 'props'
   
   const titleStyle={color:args.color||"black"}; 

    return(
    <div className="header">
        <h1><a href="/">ReactApp</a></h1>
        <u1 className="nav">
                <li><a href="https://react.js.org">Docs</a></li>
                <li><a href="/about">About</a></li>
        </u1>
    </div>
    );
};


//Two ways of creating a componenet to render

//1. Creating a Constant and use function as subcomponent
const app=(
    <div>
        <SiteHeader/>
        <div className="container">
            <h1>HomePage</h1>
            <p>Welcome to React Web Application</p>
        </div>
    </div>
)

//2. Creating a Class and render a class
class App extends React.Component{
    render(){
        return(
            <div>
                <SiteHeader> title="Tic Tac Toe" color="purple" size={20}</SiteHeader>
                <div className="container">
                    <h1>Home Page - App</h1>
                    <p>Welcome to React Web Application</p>
                </div>
            </div>
        );
    }
}

//for 1
ReactDOM.render(app,root);

//for 2
//ReactDOM.render(<App/>,root);

*/
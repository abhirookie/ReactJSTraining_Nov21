const div=document.getElementById("head_title");

const headerStyle={
    color:"blue",
    borderTopColor:"red",
    borderTopWidth:2, 
    borderTopStyle:"solid",
    borderLeftColor:"red",
    borderLeftWidth:2, 
    borderLeftStyle:"solid",
    borderRightColor:"red",
    borderRightWidth:2, 
    borderRightStyle:"solid",
    paddingBottom:'2%',
    paddingTop:'1%',
    paddingLeft:'3%',
    width:'95%',
    height:'20%',
    left:'1%',
    top:'0%',
    font:'Calibri',
    fontWeight:'Normal',
    fontSize:'2vmax',
    position:'fixed',
    zIndex:1
}

const headbutton1={
    color:"lightred",
    textDecoration:"underline",
    width:'6%',
    height:'2%',
    left:'78%',
    top:'6.75%',
    font:'Calibri',
    fontWeight:'Normal',
    fontSize:'1vmax',
    position:'fixed',
    zIndex:2
}

const headbutton2={
    color:"lightred",
    textDecoration:"underline",
    width:'3.3%',
    height:'2%',
    left:'85%',
    top:'6.75%',
    font:'Calibri',
    fontWeight:'Normal',
    fontSize:'1vmax',
    position:'fixed',
    zIndex:2
}

const titleStyle={
    color:"black",
    borderColor:"blue",
    borderWidth:2, 
    borderStyle:"solid",
    paddingBottom:'2%',
    paddingTop:'2%',
    paddingLeft:'3%',
    width:'95%',
    height:'80%',
    left:'1%',
    top:'7%',
    font:'Calibri',
    fontWeight:'Normal',
    fontSize:'2.5vmax',
    position:'fixed',
    zIndex:4
}

const title_textStyle={
    color:"black",
    paddingTop:'2%',
    paddingLeft:'3%',
    width:'95%',
    height:'10%',
    left:'1%',
    top:'15.5%',
    font:'Calibri',
    fontWeight:'Normal',
    fontSize:'1.5vmax',
    position:'fixed',
    zIndex:3
}
const head_title=React.createElement("h1",{style:headerStyle},"Welcome to React");
const head_button1 = React.createElement('a',{href:"https://reactjs.org/docs/getting-started.html",target:"_blank",rel:"noopener noreferrer",style:headbutton1},'React Docs');
const head_button2 = React.createElement('a',{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",style:headbutton2},'About');
const title_body = React.createElement('h1',{style:titleStyle},'Home Page');
const title_text = React.createElement('p',{style:title_textStyle},'Welcome to React Web Application!');
const final_arr=[head_title,head_button1,head_button2,title_body,title_text]
ReactDOM.render(final_arr,div);
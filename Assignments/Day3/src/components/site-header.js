import React from 'react';
import {SiteTitle} from './site-title';

const SiteHeader=function(props){ //anything can be used insted of term 'args' but industry convention is that we use term 'props'
   
    const titleStyle={color:props.color||"black"}; 
 
     return(
     <div className="header">
         <SiteTitle>{props.title}</SiteTitle>
         {/* <h1><a href="/" style={titleStyle}>{props.title}</a></h1> */}
         {/* <u1 className="nav">
                 <li><a href="https://react.js.org">Docs</a></li>
                 <li><a href="/about">About</a></li>
         </u1> */}
     </div>
     );
 };

 export default SiteHeader;
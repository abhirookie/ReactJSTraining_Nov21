import React from 'react';
//var n=1
//var p=1
//const h=110
 



const TTTGame=function(props){ 
    //var posStyle={left:props.left+h*n+3,top:props.top+h*p}
    

     return(
     <div className="ttt-game">
         <st>Next Move : O </st>
         <bo>
            <ce></ce>
            <ce style={{left:240,top:195}}></ce>
            <ce style={{left:350,top:195}}></ce>
            <ce style={{left:130,top:302}}></ce>
            <ce style={{left:240,top:302}}></ce>
            <ce style={{left:350,top:302}}></ce>
            <ce style={{left:130,top:409}}></ce>
            <ce style={{left:240,top:409}}></ce>
            <ce style={{left:350,top:409}}></ce>
         </bo>
         <rs>Reset</rs>
     </div>
     );
 };

 export default TTTGame;
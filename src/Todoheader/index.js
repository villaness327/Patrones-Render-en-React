import React from 'react';


function Todoheader({children,loading}){

   return(
        <header>
             
         {/*children*/}
           
          {React.Children.toArray(children).map(child=> React.cloneElement(child,{loading}))}

        </header>
    );
}


export {Todoheader};
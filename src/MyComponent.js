import React,{Component} from 'react';
import List from './list';
import Data from "./Data";

class MyComponent extends Component
{
     render()
    {
        return (
           <div className="MyComp">
                 <Data>
                     </Data>
                  <List>
                      </List>   
               </div> 
        );
    }
}
export default MyComponent ;

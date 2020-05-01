import React ,{Component} from 'react';
import Header from './Header';
import MyComponent from "./MyComponent";

class MainComponent extends Component
{
    render()
    {
        return (
           <div >
               <Header>
                   </Header>
                <MyComponent>
                    </MyComponent>   
               </div> 
        );
    }
}
export default MainComponent;
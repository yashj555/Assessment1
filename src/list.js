import React,{Component} from 'react';
import {connect} from "react-redux";
class List extends Component
{   
    constructor(props)
   {
        super(props);
        console.log(props);
   }
     render()
    {   
        const data1 = this.props.Portugal;
        const data2 = this.props.Nicaragua;
        const data3 = this.props.MarshallIslands;
        console.log(data1.length);
         var  isData = false;
        if(data1.length>0||data2.length>0||data3.length>0)
          isData = true;
         var rend ; 
          if(!isData)
         {
          return (
            <div className="list">
                {   
                    <h1 className="listlabel">No Value Selected</h1>
                }
                  
                </div> 
                );
         } 
        else
        {   
            var item1 = [];
            if(data1.length>0)
            {
              for(var i=0;i<data1.length;i++)
              {  
                
                if(i==0)
                   {
                    item1.push(<label>Portugal</label>);
                    item1.push(<br></br>);
                    item1.push(<br></br>);
                   }
                   item1.push(<div className="listContent"><div className="listText">{data1[i]}</div><div className="cross">&times;</div></div>);
                   item1.push(<br></br>);  
              }
            }
            if(data2.length>0)
            {
              for(var j=0;j<data2.length;j++)
              {
                if(j==0)
                {
                 item1.push(<label>Nicaragua</label>);
                 item1.push(<br></br>);
                 item1.push(<br></br>);
                }
                item1.push(<div className="listContent"><div className="listText">{data2[j]}</div><div className="cross">&times;</div></div>);
                item1.push(<br></br>);     
              }
            }
            if(data3.length>0)
            {
              for(var j=0;j<data3.length;j++)
              {
                if(j==0)
                {
                 item1.push(<label>MarshallIslands</label>);
                 item1.push(<br></br>);
                 item1.push(<br></br>);
                }
                item1.push(<div className="listContent"><div className="listText">{data3[j]}</div><div className="cross">&times;</div></div>);
                item1.push(<br></br>);     
              }
            }
            return (
              <div className="list">
                    <div>
                     {
                       item1
                     }
                    </div>
                  </div> 
           );
        }  
      
    }
}
const mapStateToProps =(state)=>
{
  return {
      Portugal:state.Portugal,
      Nicaragua:state.Nicaragua,
      MarshallIslands:state.MarshallIslands
  }
}
export default connect(mapStateToProps)(List) ;
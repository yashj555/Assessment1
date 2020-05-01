import React,{Component} from 'react';

class Data extends Component
{   
    dataPassed()
    {
        console.log("data is passed");
    }
     render()
    {
        return (
           <div className="data">
                 <div>
                    <label>Portugal</label>
                    <br></br>
                    <br></br>
                    <input type="checkbox"  name="Portugal" value="Ronaldo" onChange={this.dataPassed.bind(this)}/>
                    <label for="Portugal">Ronaldo</label>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="Portugal" value="Kaka"/>
                    <label for="Portugal">Kaka</label>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="Portugal" value="Cargo"/>
                    <label for="Portugal">Cargo</label>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="Portugal" value="Russel"/>
                    <label for="Portugal">Russel</label>
                 </div>
                 <br></br>
                 <br></br>
                 <br></br>
                 <div>
                 <label>Nicaragua</label>
                 <br></br>
                    <br></br>
                    <input type="checkbox"  name="vehicle1" value="Christine"/>
                    <label for="Nicaragua">Christine</label>
                    <br></br>
                    <input type="checkbox"  name="vehicle1" value="Summer Ray"/>
                    <label for="Nicaragua">Summer Ray</label>
                    <br></br>
                    <input type="checkbox"  name="vehicle1" value="Kevin Nash"/>
                    <label for="Nicaragua">Kevin Nash</label>
                    <br></br>
                    <input type="checkbox"  name="vehicle1" value="Mick Foley"/>
                    <label for="Nicaragua">Mick Foley</label>
                 </div>
                 <br></br>
                 <br></br>
                 <br></br>
                 <div>
                 <label>Marshall Islands</label>
                 <br></br>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Damon"/>
                    <label for="Marshall Islands">Damon</label>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Matt Jorge"/>
                    <label for="Marshall Islands">Matt Jorge</label>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Russel Tyson"/>
                    <label for="Marshall Islands">Russel Tyson</label>
                    <br></br>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Robert Guava"/>
                    <label for="Marshall Islands">Robert Guava</label>
                 </div>
                 
                 
               </div> 
        );
    }
}
export default Data ;
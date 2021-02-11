import React from 'react'
import bg from '../Images/mg.jpg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Ns extends React.Component{
   
    render(props){
        return(
            <div className="ct-nl" style={{"backgroundImage":"url(" + bg + ")"}}>    
                <p  className="d-flex justify-content-center align-items-center ct-nlsize" style={{'color':'white','fontFamily':'Open Sans','height':'20vh'}}>
                    <b>Subscribe To Our NewsLetter</b>
                </p>
            <div className="row text-center ct-ipro">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                   <div className="row">
                <div className="col-lg-3 col-10 offset-lg-0 offset-1"><input type="text" class="form-control"  placeholder="Enter Your Name*" style={{'fontSize':'12px'}}/><br/></div>
                <div className="col-lg-3 col-10 offset-lg-0 offset-1"> <input type="email" class="form-control"  placeholder="Enter Your E-mail id" style={{'fontSize':'12px'}}/><br/></div>
                <div className="col-lg-3 col-10 offset-lg-0 offset-1"><input type="number" class="form-control"  placeholder="Enter Your Number" style={{'fontSize':'12px'}}/><br/></div>  
                <div className="col-lg-3 col-10 offset-lg-0 offset-1"><select class="custom-select" style={{'fontSize':'12px'}} >
                                            <option selected>Areas Of Interest</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select><br/></div>
                   </div>
                </div>
                <div className="col-lg-3"></div>
           </div>
           <br/>
           <div className="row d-flex justify-content-center" style={{'marginTop':'-10px'}}>
               <button className="btn btn-info" type="button" style={{'color':'white'}}>Subscribe</button>
              
           </div> <br/>
                </div>
           
        )
    }
}

export default Ns;
import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Images/img1.png'
    
const textArray = ['Your Partner In Professional Learning', 'Explore Executive Education Programs to Match Your Learning Needs', '1-Click Comparison for Multiple Programs to Facilitate Decision Making', 'Profile Based Program Recommendations',];
class Info extends React.Component{
    constructor() {
        super();
        this.state = { textIdx: 0 };
      }

    componentDidMount() {
        this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: currentIdx + 1 });
        }, 1500);
      }
    render(){
        let textThatChanges = textArray[this.state.textIdx % textArray.length];
        return(
            <React.Fragment>
               <div className="ct-imgsize" style={{'backgroundImage':'url('+ img +')'}}>
                   <div className="centered text-center">
                   <p  style={{'fontFamily':'Open Sans'}}>
                       {textThatChanges==='Your Partner In Professional Learning'?
                            <text><span className="ct-txts">Your Partner in</span> <br/><span className="ct-txtm">Professional Learning</span></text> 
                       :textThatChanges==='Explore Executive Education Programs to Match Your Learning Needs'?
                            <text><span className="ct-txtm">Explore Executive Education Programs</span> <br/><span className="ct-txts">to Match Your Learning Needs</span></text> 
                       :textThatChanges==='1-Click Comparison for Multiple Programs to Facilitate Decision Making'?
                            <text><span className="ct-txtm">1-Click Comparison  </span> <span className="ct-txts"> for Multiple Programs </span> <br/><span className="ct-txts">to Facilitate Decision Making</span></text> 
                       :textThatChanges==='Profile Based Program Recommendations'?
                            <text><span className="ct-txts">Profile-based</span> <br/><span className="ct-txtm">Program Recommendations</span></text> 
                       :null}
                    </p>
                   </div>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   {/*<div className="mx-auto ct-bg" style={{'backgroundColor':'#012447'}}>
                        <input className="centered ct-search" type="search" placeholder="Search for Courser / Programs"></input>
                        <button className="btn btn-info ct-button" type="button" style={{"float":"right"}}>Search</button>
                        <div className="ct-advs"><a href="/" style={{'color':'white'}}>Advanced Search</a></div>
                        
        </div>*/}
                   <div className="container mx-auto ct-bg" style={{'backgroundColor':'#012447'}}>
                        <div className="row">
                        <input className=" ct-search" type="search" placeholder="Search for Courser / Programs"></input>
                        </div>
                        <div className="row">
                        <button className="btn btn-info ct-button" type="button">Search</button>
                        </div>
                        <div className="row">
                            <div className="ct-advs">
                            <a  href="/" style={{'color':'white'}}>
                            Advanced Search</a>
                            </div>
                            </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Info
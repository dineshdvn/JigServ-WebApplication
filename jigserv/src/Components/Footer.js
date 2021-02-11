import React from 'react'
import logo from '../Images/logo.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="ct-ftsize" style={{'backgroundColor':'#16516c'}}>
                <br/>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        {this.props.s.width>=783?
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-2 col-md-2"><p style={{'color':'white'}}>Home</p></div>
                        <div className="col-lg-2 col-md-2"><p style={{'color':'white'}}>About</p></div>
                        <div className="col-lg-2 col-md-2"><p style={{'color':'white'}}>Contact Us</p></div>
                        <div className="col-lg-3 col-md-2"><p style={{'color':'white'}}>Privacy Policy</p></div>
                        <div className="col-lg-3 col-md-2"><p style={{'color':'white'}}>Terms And Conditions</p></div>
                        </div>
                        :
                        <React.Fragment>
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-2 col-3"><p style={{'color':'white'}}>Home</p></div>
                        <div className="col-lg-2 col-3"><p style={{'color':'white'}}>About</p></div>
                        <div className="col-lg-2 col-3"><p style={{'color':'white'}}>Contact Us</p></div>
                        </div>
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-3 col-4"><p style={{'color':'white','float':'right'}}>Privacy Policy</p></div>
                        <div className="col-lg-3 col-6"><p style={{'color':'white'}}>Terms And Conditions</p></div>
                        </div>
                        </React.Fragment>
                        }
                        
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <hr style={{'backgroundColor':'white'}}/>
                <div className="row d-flex justify-content-center ">
                        <div className="d-flex justify-content-center ct-ftimgsize">
                        <img  src={logo} alt="/"/>
                        </div>
                </div>
                <br/>
                <div className="row d-flex justify-content-center ">
                    <div className="d-flex justify-content-center">
                        <p style={{'color':'white'}}>Follow us: &nbsp;  
                                        <FacebookIcon style={{'color':'white'}}/>&nbsp;
                                        <TwitterIcon style={{'color':'white'}}/> &nbsp;
                                        <InstagramIcon style={{'color':'white'}}/> &nbsp;
                                        <LinkedInIcon style={{'color':'white'}}/> &nbsp;
                                        <YouTubeIcon style={{'color':'white'}}/> &nbsp;
                                        <WhatsAppIcon style={{'color':'white'}}/> </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <p style={{'color':'white'}}>©2021 Jigserv Digital Pvt. Ltd. | All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer
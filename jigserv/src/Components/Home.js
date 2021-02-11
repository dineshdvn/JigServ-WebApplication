import React from "react";
import Info from './Info'
import Ep from './EducativePrgms'
import Ns from './Newsletter'
import Programs from './Programs'
import logo from '../Images/logo.svg'
import Footer from './Footer'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from "@material-ui/icons/Menu";



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : props.s,
            list : ['All Categories','Innovation','Digital Transformation','Finance & Fintech','Business Analytics','Operations',
            'Leadership/HRM','Marketing','Strategy','Technology','General Management']
        }
    }
    
    render(){
        if(window.innerWidth < 812){
            var categories = 
            <div class="nav-item dropdown">
                <a className="nav-link dropdown-toggle ct-cat" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{'color':'white'}}>
                Categories
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{'height':'400px','overflow-y': 'scroll'}} >
                {this.state.list.map((l)=>{
                                        return( <React.Fragment><a class="dropdown-item" href="/">{l}</a>
                                                <div class="dropdown-divider"></div></React.Fragment>)
                                    })}
                </div>
            </div>
        }
        var ep = <div><Ep s={this.props.s}/></div>

        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light" style={{"backgroundColor":"#012447"}}>
                    <a class="navbar-brand log" href="/">
                        <img className="log-size" src={logo} alt="/"/>           
                    </a>
                    {categories}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuIcon style={{'color':'white'}} />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{'color':'white'}}>
                                Categories
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown"  style={{'height':'400px','overflow-y': 'scroll'}}>
                                    {this.state.list.map((l)=>{
                                        return( <React.Fragment><a class="dropdown-item" href="/">{l}</a>
                                                <div class="dropdown-divider"></div></React.Fragment>)
                                    })}
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{'color':'white'}}>
                                Universities
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{'height':'400px','overflow-y': 'scroll'}} >
                                {this.state.list.map((l)=>{
                                        return( <React.Fragment><a class="dropdown-item" href="/">{l}</a>
                                                <div class="dropdown-divider"></div></React.Fragment>)
                                    })}
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/" style={{'color':'white'}}>Course Recommendation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"style={{'color':'white'}}>For Organiztion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/"style={{'color':'white'}}>Discussion Forum</a>
                            </li>
                            <li class="nav-item spacing">
                                <a class="nav-link" href="/"style={{'color':'white'}}>Blog</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <div ><Info/></div>
                <br/><br/><br/><br/>
        <div>{ep}</div>
        <br/>
        <div><Ns/></div>
        <div><Programs/></div>
        <div><Footer s={this.props.s}/></div>
            </React.Fragment>
        )
    }
}

export default Home



import React,{useEffect} from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import {allcategories, innovation, digitaltransformation, financefintech} from '../action/index'
import { useSelector, useDispatch } from 'react-redux'


function  Ep(props){
    const data = ['All Categories','Innovation','Digital Transformation','Finance & Fintech','Business Analytics','Operations',
                    'Leadership/HRM','Marketing','Strategy','Technology','General Management']
    
    const cardData = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(cardData.length===0)
        dispatch(allcategories())
    })
   
    function handleChange(e){
        if(e.target.value==='All Categories'){
            dispatch(allcategories())
        }
        if(e.target.value==='Innovation'){
            dispatch(innovation())
        }
        if(e.target.value==='Digital Transformation') dispatch(digitaltransformation())
        if(e.target.value==='Finance & Fintech') dispatch(financefintech())
        if(e.target.value==='Business Analytics') dispatch(innovation())
        if(e.target.value==='Operations')dispatch(digitaltransformation())
        if(e.target.value==='Leadership/HRM') dispatch(financefintech())
        if(e.target.value==='Marketing')  dispatch(innovation())
        if(e.target.value==='Strategy') dispatch(allcategories())
        if(e.target.value==='Technology') dispatch(financefintech())
        if(e.target.value==='General Management') dispatch(digitaltransformation())
    }
    
        return (
            <div className="container-fluid" style={{'backgroundColor':'#efefef'}}>
                <div className="row ct-head">
                    <div className="col-12 col-lg-7">
                    <p ><b>Explore Programs by Category</b></p>
                    </div>
                </div>
                <div className="row ct-subhead">
                    <div className="col-12 col-lg-9">
                    <p>Explore Executive Education Programs to match your learning needs</p>
                    </div>
                </div>
                <div className="row ct-subhead">
                    <div className="col-12 col-lg-9">
                    <p><b>Choose from 438 programs</b></p>
                    </div>
                </div>
                <div className="row ct-prg">
                    <div className="col-12 col-lg-3">
                    <Card >
                        <CardHeader
                            
                            title="Programs Categories"
                            style={{ backgroundColor: "#012447",'color':'white','textAlign  ':'center','textAlignLast':'center' }}
                        />
                        <div className="ct-prgsize">
                        <CardContent  style={{'overflow-y': 'scroll'}}>
                        <List style={{'margin-top':'-18px'}}>
                            {props.s.width<=783?
                            <div>
                                <select className=" ct-pad" style={{'backgroundColor':'#b3d4fc','color':'white','textAlignLast':'center'}} onChange={handleChange} >
                                    {data.map((d)=>{
                                        return (  
                                        <option value={d}>{d}</option>
                                        )
                                    })}
                                </select> 
                            </div>
                            :
                            data.length>0?
                            data.map((value)=>{
                                return (
                                    <React.Fragment>
                                        <ListItem button  >
                                        <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        {value==='All Categories'?
                                        <ListItemText primary={value} onClick={()=>dispatch(allcategories())} />
                                        :value==='Innovation'?
                                        <ListItemText primary={value} onClick={()=>dispatch(innovation())} />
                                        :value==='Digital Transformation'?
                                        <ListItemText primary={value} onClick={()=>dispatch(digitaltransformation())} />
                                        :value==='Finance & Fintech'?
                                        <ListItemText primary={value} onClick={()=>dispatch(financefintech())} />
                                        :value==='Business Analytics'?
                                        <ListItemText primary={value} onClick={()=>dispatch(innovation())} />
                                        :value==='Operations'?
                                        <ListItemText primary={value} onClick={()=>dispatch(financefintech())} />
                                        :value==='Leadership/HRM'?
                                        <ListItemText primary={value} onClick={()=>dispatch(innovation())} />
                                        :value==='Marketing'?
                                        <ListItemText primary={value} onClick={()=>dispatch(allcategories())} />
                                        :value==='Strategy'?
                                        <ListItemText primary={value} onClick={()=>dispatch(innovation())} />
                                        :value==='Technology'?
                                        <ListItemText primary={value} onClick={()=>dispatch(digitaltransformation())} />
                                        :value==='General Management'?
                                        <ListItemText primary={value} onClick={()=>dispatch(financefintech())} />
                                        :<ListItemText primary={value} />}
                                        
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    </React.Fragment>
                                    
                                )
                            })
                            :null}
                        </List>
                        </CardContent>
                        </div>
                  </Card>
                    </div>

                    {cardData.length>0 && props.s.width > 783?
                    <div className="col-lg-9">
                        {props.s.width<=783?<br/>:null}
                    <div className="container-fluid">  
                    <div className="row">
                    <div className="col-12 col-lg-5">
                        <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[0].image} alt="Snow"/>
                                {/*style={{'width':'130px','height':'100px'}} subimage size */}
                                {cardData[0].subImage?
                                     <img className="ct-olimg" src={cardData[0].subImage} alt="/" ></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[0].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[0].type}</p> 
                                </div>
                                <div className="ct-amount" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[0].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[0].title}</b></h5>
                                <p className="card-text text-center">{cardData[0].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-6 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[0].date}</p>
                                    </div>
                                    <div className="col-lg-6 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[0].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                    <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[1].image} alt="Snow"/>
                                {cardData[1].subImage?
                                     <img className="ct-olimg" src={cardData[1].subImage} alt="/"></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[1].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[1].type}</p> 
                                </div>
                                <div className="ct-amount text-center" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[1].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[1].title}</b></h5>
                                <p className="card-text text-center">{cardData[1].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-7 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[1].date}</p>
                                    </div>
                                    <div className="col-lg-5 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[1].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 col-lg-5">
                    <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[2].image} alt="Snow"/>
                                {cardData[1].subImage?
                                     <img className="ct-olimg" src={cardData[2].subImage} alt="/" style={{'width':'130px','height':'100px'}}></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[2].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[2].type}</p> 
                                </div>
                                <div className="ct-amount" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[2].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[2].title}</b></h5>
                                <p className="card-text text-center">{cardData[2].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-7 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[2].date}</p>
                                    </div>
                                    <div className="col-lg-5 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[2].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                    <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[3].image} alt="Snow"/>
                                {cardData[1].subImage?
                                     <img className="ct-olimg" src={cardData[3].subImage} alt="/" ></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[3].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[3].type}</p> 
                                </div>
                                <div className="ct-amount" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[3].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[3].title}</b></h5>
                                <p className="card-text text-center">{cardData[3].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-7 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[3].date}</p>
                                    </div>
                                    <div className="col-lg-5 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[3].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
                </div>
                    </div>
                </div>
                    :
                    
                    cardData.length > 0 && props.s.width <= 783?

                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="col-12 col-lg-5">
                        <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[0].image} alt="Snow"/>
                                {/*style={{'width':'130px','height':'100px'}} subimage size */}
                                {cardData[0].subImage?
                                     <img className="ct-olimg" src={cardData[0].subImage} alt="/" ></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[0].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[0].type}</p> 
                                </div>
                                <div className="ct-amount" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[0].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[0].title}</b></h5>
                                <p className="card-text text-center">{cardData[0].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-6 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[0].date}</p>
                                    </div>
                                    <div className="col-lg-6 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[0].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
    </div>
    <div class="carousel-item">
    <div className="col-12 col-lg-5">
                    <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[1].image} alt="Snow"/>
                                {cardData[1].subImage?
                                     <img className="ct-olimg" src={cardData[1].subImage} alt="/"></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[1].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[1].type}</p> 
                                </div>
                                <div className="ct-amount text-center" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[1].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[1].title}</b></h5>
                                <p className="card-text text-center">{cardData[1].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-7 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[1].date}</p>
                                    </div>
                                    <div className="col-lg-5 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[1].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
    </div>
    <div class="carousel-item">
    <div className="col-12 col-lg-5">
                    <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[2].image} alt="Snow"/>
                                {cardData[1].subImage?
                                     <img className="ct-olimg" src={cardData[2].subImage} alt="/" style={{'width':'130px','height':'100px'}}></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[2].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[2].type}</p> 
                                </div>
                                <div className="ct-amount" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[2].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[2].title}</b></h5>
                                <p className="card-text text-center">{cardData[2].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-7 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[2].date}</p>
                                    </div>
                                    <div className="col-lg-5 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[2].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
    </div>
    <div class="carousel-item">
    <div className="col-12 col-lg-5">
                    <div class="card ct-card">
                            <div class="ct-cardimg">
                                <img src={cardData[3].image} alt="Snow"/>
                                {cardData[1].subImage?
                                     <img className="ct-olimg" src={cardData[3].subImage} alt="/" ></img>
                                :null}
                                <img className="ct-logoimg" src={cardData[3].logo} alt="/" style={{'width':'130px','height':'100px'}}/>
                                <div className="ct-type" style={{'backgroundColor':'#012447','color':'white'}}>
                                    <p><LocalLibraryIcon style={{'fontSize':'15px'}}/>{cardData[3].type}</p> 
                                </div>
                                <div className="ct-amount" style={{'backgroundColor':'#012447','color':'white'}}>
                                <p><LocalAtmIcon style={{'fontSize':'15px'}}/>&nbsp;{cardData[3].price}</p>
                                </div>
                            </div>
                            <br/>
                            <div className="card-body">
                                <h5 className="card-title text-center"><b>{cardData[3].title}</b></h5>
                                <p className="card-text text-center">{cardData[3].subTitle}</p>
                                <div className="row">
                                    <div className="col-lg-7 col-6 ct-date">
                                    <p><CalendarTodayIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;{cardData[3].date}</p>
                                    </div>
                                    <div className="col-lg-5 col-6 ct-duedate">
                                    <p style={{'float':'right'}}><HourglassEmptyIcon style={{'fontSize':'15px','marginLeft':'-10px'}}/>&nbsp;Apply By: {cardData[3].dueDate}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn tex-center" type="button" style={{'width':'100%','backgroundColor':'#012447','color':'white'}}>View Details</button>

                        </div>
                    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{'backgroundColor':'black','width':'80px','height':'50px'}}></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style={{'backgroundColor':'black','width':'80px','height':'50px'}} ></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                    :<CircularProgress/>
                    }   
                </div>
            </div>
        )
    
}

export default Ep;
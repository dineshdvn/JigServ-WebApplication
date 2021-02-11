import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Programs extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-12 col-lg-4">
                <table class="table" >
                    <thead>
                        <tr style={{'borderBottomStyle':'hidden'}}>
                        <td colspan="3" className="text-center"><h3><b>Trending Programs</b></h3></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>  
                        <td  style={{'textAlign':'left'}}>Executive PG Diploma Programme in Management</td>
                        <td  style={{'textAlign':'left'}}>Digital Marketing</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>The Emerging CMO: Strategic Marketing Leadership</td>
                        <td  style={{'textAlign':'left'}}>Selling and Negotiation Skills</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Finance and Accounting for Business Managers</td>
                        <td  style={{'textAlign':'left'}}>Financial Strategies for Value Creation</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Data Science for Business Intelligence</td>
                        <td  style={{'textAlign':'left'}}>B2B Marketing (Online)</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-12 col-lg-4">
                <table class="table" >
                    <thead>
                        <tr style={{'borderBottomStyle':'hidden'}}>
                        <td colspan="3" className="text-center"><h3><b>Featured Programs</b></h3></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>  
                        <td  style={{'textAlign':'left'}}>Executive PG Diploma Programme in Management</td>
                        <td  style={{'textAlign':'left'}}>Digital Marketing</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Digital Mindset and Design Thinking</td>
                        <td  style={{'textAlign':'left'}}>Marketing Analytics: Data Driven Marketing</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-12 col-lg-4">
                <table class="table" >
                    <thead>
                        <tr style={{'borderBottomStyle':'hidden'}}>
                        <td colspan="3" className="text-center"><h3><b>Program Categories</b></h3></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>  
                        <td  style={{'textAlign':'left'}}>All Categories</td>
                        <td  style={{'textAlign':'left'}}>Innovation</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Digital Transformation</td>
                        <td  style={{'textAlign':'left'}}>Finance & FinTech</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Business Analytics</td>
                        <td  style={{'textAlign':'left'}}>Operations</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Leadership/HRM</td>
                        <td  style={{'textAlign':'left'}}>Marketing</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>Strategy</td>
                        <td  style={{'textAlign':'left'}}>Technology</td>
                        </tr>
                        <tr className="text-center" style={{'borderBottomStyle':'hidden'}}>
                        <td  style={{'textAlign':'left'}}>General Management</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Programs























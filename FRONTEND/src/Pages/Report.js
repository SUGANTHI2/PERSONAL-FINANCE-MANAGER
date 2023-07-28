import React from "react";
import { useRef } from "react";
import {Link} from 'react-router-dom';
import "./Report.css";
import { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { sizeHeight } from "@mui/system";
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Report(){
    const options = {
		// backgroundColor: '#091b2b',
            height: 500,
            width:1200,

		animationEnabled: true,
		title: {
			text: "Expense Report"
		},
		axisY: {
			title: "Expenses",
			suffix: " (Rs)"
		},
		data: [{
			type: "splineArea",
			// xValueFormatString: "MMM",
			// yValueFormatString: "#,##0.## bn kW⋅h",
			showInLegend: true,
			legendText: "Rs = Indian Rupees(INR)",
			dataPoints: [
				{ x: new Date(2008, 0), y: 0 },
				{ x: new Date(2008, 1), y: 500 },
				{ x: new Date(2008, 2), y: 1000 },
				{ x: new Date(2008, 3), y: 750 },
				{ x: new Date(2008, 4), y: 2200 },
				{ x: new Date(2008, 5), y: 890 },
				{ x: new Date(2008, 6), y: 990 },
				{ x: new Date(2008, 7), y: 2225 },
				{ x: new Date(2008, 8), y: 950 },
				{ x: new Date(2008, 9), y: 830 }
			]
		}]
	}
    const navRef = useRef();
    return(
        <>
        <div className="dh">
        <header>
        <nav>
            <h1 style={{fontFamily:'unset' ,color:'#00CED1' ,fontSize:'25px'}}>EXPENSIFY</h1>
            <div >
                <ul  id="navbar" >
                    <li><Link to="/HomePage">Home</Link></li>
                    <li><Link to='/Income'>My Income</Link></li>
                    <li><Link to ='/Expense'>Expense</Link></li>
                    <li><Link to ='/Budget'>Budget</Link></li>
                    <li><Link to ='/Debt'>Debt</Link></li>
                    <li><Link to ='/Goal'>Goal Setting</Link></li>
                </ul>
            </div>
            {/* <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div> */}
        </nav>
		</header>
        <body>
            <center>
            <div>
                <br></br>
            {/* <h3>REPORTS</h3> */}
            <br></br>
            <br></br>
            <div className="gh">

			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
            </div>
		</div>
        </center>
        <br></br>
        <Link to='/HomePage'><button id="bu1">BACK</button></Link>
        </body>
        </div>
        </>
    );
};
//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate


import React from "react";
import {useRef, useEffect} from "react";
import * as d3 from "d3";

function XAxis(props){
    const { xScale, height, width, axisLable } = props;
    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.

    const xAxisType = typeof(xScale.domain()[0]) === "number"? "linear" : "band";

    const gx = useRef();
    useEffect(()=>{
        let axis = d3.axisBottom(xScale);

        if(xAxisType === "band"){
            // set x-axis label rotate
            const svgElement = d3.select(gx.current);
            svgElement
                .selectAll('text')
                .style("text-anchor", "start")
                .attr("transform-origin", "left top")
                .attr("transform", "translate(-30 -25)rotate(75, 0, 43)");
        }
        d3.select(gx.current).call(axis);
    });

    if(xScale) {
        return (
            <g ref={gx} transform={`translate(0, ${height})`}>
                {
                    xAxisType === "linear" ?
                     ( <text 
                        style={{ textAnchor:'end', fontSize:'15px', fill: "black" }} 
                        transform={`translate(${width - 20}, -10)`}>
                            {axisLable}
                        </text>
                    ) 
                    : <></>
                   
                }
                
            </g>
        );
    }else {
        return <g></g>
    }
}

export default XAxis
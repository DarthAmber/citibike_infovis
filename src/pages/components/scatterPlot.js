import React, { use } from "react";
import {useRef, useEffect} from 'react';
import * as d3 from "d3";

import XAxis from "./xAxis";
import YAxis from "./yAxis";
import Points from "./points"

function ScatterPlot(props){
    const { 
        offsetX, offsetY, 
        data, 
        xScale, yScale, 
        height, width, 
        setSelectX, setSelectY,
        selectStation, setSelectStation } 
        = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 

    //  -------> x + offsetX
    // |
    // |
    // |
    // |
    // |y + offsetY
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <XAxis
                xScale={xScale} 
                height={height} 
                width={width} 
                axisLable={"Trip duration start from"}>
            </XAxis>

            <YAxis
                yScale={yScale} 
                height={height} 
                width={width} 
                axisLable={"Trip duration end in"}>
            </YAxis>
            
            <Points
                setSelectX={setSelectX} 
                setSelectY={setSelectY} 
                selectStation={selectStation} 
                setSelectStation={setSelectStation}
                data={data} 
                xScale={xScale} 
                yScale={yScale} 
                height={height} 
                width={width} >
            </Points>
        </g>
    );
    // return <g>
    //        {/* <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
    //        <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
    //        <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/> */}
    //     </g>
}

export default ScatterPlot
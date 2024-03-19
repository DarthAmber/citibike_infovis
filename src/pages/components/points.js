import React from'react';
import { useState } from 'react';


function Points(props) {
    const {
        data, 
        xScale, yScale, 
        height, width, 
        selectStation, setSelectStation, 
        setSelectX, setSelectY} = props;

    function getColor(selectedStation, station){
        if(selectedStation === station){
            return "red"
        }else{
            return "steelblue"
        }
    }
    
    function getRadius(selectedStation, station){
        if(selectedStation === station){
            return 10
        }else{
            return 5
        }
    }

    function handleMouseEnter(evt,ind){
        setSelectX(evt.pageX);
        setSelectY(evt.pageY);
        setSelectStation(data[ind].station); 
    }

    function handleMouseLeave(ind){
        setSelectX(null);
        setSelectY(null);
        setSelectStation('');
    }

    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    const result = data.filter((elm, ) => elm.station === selectStation);     
    
    if(data){
        return(
            <>
            <g fill="steelblue" stroke="black" strokeWidth="1.5">
                {
                    data.map((elm, ind) => 
                        (
                            <>
                                <circle 
                                    key={ind} 
                                    cx={xScale(elm.tripdurationS)} 
                                    cy={yScale(elm.tripdurationE)} 
                                    onMouseEnter = { (evt)=> handleMouseEnter(evt, ind) }
                                    onMouseOut = { ()=>handleMouseLeave(ind) }
                                    fill= { getColor(selectStation, elm.station) }
                                    r={ getRadius(selectStation, elm.station)}>
                                </circle>      
                            </>

                        )
                    )            
                }
            </g>
            {   
                selectStation && 
                <>
                    <rect 
                        fillOpacity="0.5" 
                        fill='yellow' 
                        width={width} 
                        height={height}>
                    </rect> 
                    <circle
                        key={`selected-${Date.now()}`} 
                        cx={xScale(result[0].tripdurationS)} 
                        cy={yScale(result[0].tripdurationE)} 
                        fill= { getColor(selectStation, selectStation) }
                        r={ getRadius(selectStation, selectStation)}>
                    </circle>
                </>
            }
            </>
        )
    } else {
        return <g></g>
    }
}

export default Points
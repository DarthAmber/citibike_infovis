import { useState } from "react";

function Bars(props) {
    const {data, xScale, yScale, height, selectStation, setSelectStation} = props;

    function getColor(selectedStation, station){
        if(selectedStation === station){
            return "red";
        }else{
            return "steelblue";
        }
    }

    function handleMouseEnter(ind){
        setSelectStation(data[ind].station);
    }

    function handleMouseLeave(ind){
        setSelectStation('');
    }


    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        return(
            <g>
            {
                data.map((elm, ind) => 
                    (
                        <rect 
                            key={ind} 
                            x={xScale(elm.station)} 
                            y={yScale(elm.start)}  
                            width={xScale.bandwidth()}
                            height={height - yScale(elm.start)}
                            onMouseEnter = { ()=> handleMouseEnter(ind) }
                            onMouseOut = { ()=>handleMouseLeave(ind) }
                            fill= {getColor(selectStation, elm.station)}
                            stroke="black"
                            />
                    )
                )
            }
            </g>
        );
    } else {
        return <g></g>
    }
}

export default Bars
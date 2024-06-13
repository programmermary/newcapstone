import React from "react";
import {ServicesData} from  "../Data/ServiceData";

import ServiecssCard from "../Cards/ServiecssCard"

function Services() {
  return (
    <div >
      {
        ServicesData.map((index,service)=>{
          <ServicesData data={service} key={index}/>
        })
      }
    { <ServiecssCard data={ServicesData} key={index}/> }
    </div>
  );
}
export default Services;

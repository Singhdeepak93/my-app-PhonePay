import React,{useState} from 'react';
import ServiceApi from "./Api/ServicesApi.js";

const Services = () => {
    const[servicesData , setServicesData]= useState(ServiceApi);
    return (
        <>
            <section className="services-main-container">
                <div className="container services-container">
                    <h1 className="main-heading text-center fw-bold"> How to send money</h1>
                    <div className="row">
                        {
                            servicesData.map((curElem) =>{
                                const{ id, logo,title,info}= curElem;
                                return(
                                    <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                            <i className={`fontawesome-style ${logo}`}>
                                
                            </i>
                            <h2 className="sub-heading">{title}</h2>
                            <p>{info}</p>
                        </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;

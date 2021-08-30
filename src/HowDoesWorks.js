import React,{useState} from 'react';
import WorkApi from './Api/WorkApi.js';

const HowDoesWorks = () => {
    const[workData,setWorkDtata]= useState(WorkApi);
    return (
        <>
        <section>
            <div className="work-container container">
                <h1 className="main-heading text-center"> How does it's Work</h1>
                <div className="row">
                    { workData.map((curElem) =>{
                        const{id,logo,title,info}=curElem;
                        return(
                            <>
                            <div className="col-12 col-lg-4 text-center work-container-subdiv">
                      <i class={`fontawesome-style ${logo}`}></i>
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-hero-para w-100">
                          {info}
                    </p>
                  </div>
                  </>
                        )
                    })}
                  
                </div>
            </div>
        </section>
            
        </>
    )
}

export default HowDoesWorks;

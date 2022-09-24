import React from "react";
import './Card.css';
import baguio from '../../public/img/baguio.webp';
import locIcon from '../assets/location.png';

export default function Card(props){
    return(
        <div className="card">
            <img className="card-img" src= {props.coverImg} alt="" />
            <div className="content-head">
                <div className="location-head">
                    <img className="locicon" src={locIcon} alt="" />
                    <span className="location">{props.location}</span>
                    <span >
                        <a className="gray" href= {props.link} target="_blank">View on Google Map</a>
                    </span>
                </div>
                <div className="content-body">
                    <h2>{props.site}</h2>
                    <p className="date">{props.date}</p>
                    <p className="desc">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
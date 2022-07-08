import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "./Card";
import people from "../helper/data";
import { useState,useEffect } from "react";

const ReviewList = () => {

    const [index,setIndex]=useState(0);
    const [data,setData]=useState(people);



    const next = ()=>{
        if(index==3){
            setIndex(0)
        }else{
            setIndex(index+1)
        }

    }
    const previous = ()=>{
        if(index==0){
            setIndex(people.length-1)
        }else{
            setIndex(index-1)
        }
    }
    useEffect(() => {
      let slider=setInterval(() => {
        next()
      }, 4000);

      return () => {
        clearInterval(slider)
      }
    }, [index])
    

  return (
    <div className="row container m-auto mt-5 p-2 ">
      <div className="wrapper d-flex justify-content-center align-items-center col-md-7 m-auto p-2 rounded-3">
        <button className="border-0 p-2 text-primary bg-white d-flex align-items-center justify-content-center display-4" onClick={previous} ><FiChevronLeft /></button>
        <Card data={people} index={index}/>
        <button className="border-0 p-2 text-primary bg-white d-flex align-items-center justify-content-center display-4" onClick={next}><FiChevronRight /></button>
      </div>
    </div>
  );
};

export default ReviewList;

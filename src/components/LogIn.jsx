import React, { useEffect,useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import axios from 'axios';
import Show from "./data";
import './color.css';

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

 const LogIn = () => {
  const [list,setList] =useState([])
  const [check,setCheck]= useState('')

useEffect(()=>{
axios({
  method:'get',
  url:'https://movie-fake-server.herokuapp.com/data'
}).then(res=>setList(res.data))
},[])

const handleFilter = (e)=>{
  
    setCheck(e.target.value);
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
      <option value="Documentary">Documentary</option>
        <option value="ComChildrenedy">Children</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>

      </select>
      <div className = "movies-list">
       {
       list.map((movie) => {
        return <Show key={movie.id} movie={movie}></Show>
       })
       
       }
      </div>
    </>
  );
};

export default LogIn
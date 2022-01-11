import React,{useState} from "react";
import {useDispatch} from "react-redux"
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
const dispatch=useDispatch()
const[restaurantName,setRestaurantName]=useState("")
   
function handleSubmit(e){
e.preventDefault()
dispatch(restaurantAdded(restaurantName))
setRestaurantName("")
}
  return <div><form onSubmit={handleSubmit}>
    <label>Name
      <input type="text" value={restaurantName} onChange={(e)=>setRestaurantName(e.target.value)}></input>
      <input type="submit" value="Add Restaurant"/>
    </label>
    </form></div>;
}

export default RestaurantInput;

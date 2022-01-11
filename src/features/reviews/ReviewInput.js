import React,{useState} from "react";
import Reviews from "./Reviews";
import {useDispatch} from "react-redux"
import {reviewAdded} from "./reviewsSlice"

function ReviewInput({restaurantId}) {
const dispatch=useDispatch()
const[comment,setComment]=useState("")
function handleAddReview(e){
  e.preventDefault()
  dispatch(reviewAdded({restaurantId,comment}))
}

  return <div><form onSubmit={handleAddReview}>
    <label>Comment 
      <textarea value={comment} onChange={(e)=>setComment(e.target.value)}>
        </textarea></label>
        <input type="submit" value="Add Review"/>
    </form></div>;
}

export default ReviewInput;

import React from "react";

const Search = (props) =>{
    return (
        <div className="sc col col-sm-2">
            <input 
                   className="form-control" 
                   placeholder="Movie name..." 
                   value={props.value}
                   onChange={(event)=>props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}

export default Search;
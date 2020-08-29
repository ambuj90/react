1: CSS Styling & Importing CSS Files in React JS:-

*{
    margin: 0;
    padding:0;
}
.heading {
   font-size: 36px;
   color: #000;
   margin: 70px 0;
   text-align: center;
   text-shadow: 2px 1px 4px red;
   font-weight: bold;
   text-transform: uppercase;
}
.images {
    display: flex;
    justify-content: center;
}
.images img{
    width: 250px;
    height: 300px;
    
}

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name = "Ambuj Sharma";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "http://ambujdeveloper.blogspot.com/";

ReactDOM.render(
<>
<h1 className = "heading">My name is {name}</h1>
<div className =" images">
<img src = {img1} alt = "images"/>
<img src = {img2} alt = "images"/>
<a href = {links} target = "_blank">
<img src = {img3} alt = "images"/></a>
</div>

</>,
    document.getElementById("root")
);

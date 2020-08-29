import React from 'react';
import ReactDOM from 'react-dom';

const name = "Ambuj Sharma";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "http://ambujdeveloper.blogspot.com/";

ReactDOM.render(
<>
<h1>My name is {name}</h1>
<img src = {img1} alt = "images"/>
<img src = {img2} alt = "images"/>
<a href = {links} target = "_blank">
<img src = {img3} alt = "images"/></a>


</>,
    document.getElementById("root")
);

import{m as n}from"./header-RH2cM1rY.js";import{b as c,h as i}from"./headers-C9OjJDj3.js";import{a as m}from"./authGuard-C2GFzsuy.js";async function d({title:e,body:t,tags:o,media:a}){const r={title:e,body:t,tags:o,media:a};try{(await fetch(c,{method:"POST",headers:i(),body:JSON.stringify(r)})).ok&&(alert("You created a post!"),window.location.href="/profile/")}catch{alert("Something went wrong trying to create a post!")}}async function f(e){e.preventDefault();const t=new FormData(e.target),o={url:t.get("url"),alt:t.get("alt")},a={title:t.get("title"),body:t.get("text"),tags:t.get("tags").split(" "),media:o};d(a)}const l=()=>{m();const e=document.querySelector("header");n(e),document.forms.createPost.addEventListener("submit",f)};l();
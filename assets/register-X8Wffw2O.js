import{a as s,h as n}from"./headers-C9OjJDj3.js";async function i({name:e,email:t,password:r}){const a={name:e,email:t,password:r};try{(await fetch(s,{method:"POST",headers:n(),body:JSON.stringify(a)})).ok&&(alert(`Successfully created user "${e}"`),window.location.href="/auth/login/")}catch{alert("Something went wrong trying to register an account")}}async function c(e){e.preventDefault();const t=new FormData(e.target),r={name:t.get("name"),email:t.get("email"),password:t.get("password")};i(r)}const m=document.forms.register;m.addEventListener("submit",c);
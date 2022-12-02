const pro = new Promise((resolve, reject) => {  
    resolve('ok');  
   
});
pro.then(
(res) => { 
   console.log(res);
},
(err) => { 
   console.log(err);
}
);
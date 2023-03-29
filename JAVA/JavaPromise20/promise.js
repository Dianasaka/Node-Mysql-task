//Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut 

//const pazadas = new Promise((resolve, reject) => {
   // setTimeout(() => resolve(), 5000)
  //})
  
  //pazadas.then(() => alert("Veikia"));
  
 // console.log("Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas")


// 2.  Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

//const pazadas = new Promise((resolve, reject) => {
   // const random = Math.floor(Math.random() * 5) + 1;
  
    //setTimeout(() => {
    //  if(random === 1){
       // reject();
     // }
      //else{
       // resolve();
    //  }
   // }, 5000)
  //})
  
 // pazadas
    //.then(() => alert("Veikia"))
   // .catch(() => alert("Oops, pažadas buvo atmestas"))


// Make a request for user.json
fetch('/article/promise-chaining/user.json')
  // Load it as json
  .then(response => response.json())
  // Make a request to GitHub
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)

  });
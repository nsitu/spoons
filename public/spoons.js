// get a list of current spoons from API endpoint

const getSpoons = (query) => {
    fetch('/spoons/search/'+ encodeURIComponent( query) )
    .then(response => response.json())
    .then( async spoons => { 

        document.getElementById("spoons").innerHTML = ''; // clear out any previous content 
        
        await Promise.all( spoons.results.map( render ) )

        // After rendering is finished, add spoon profiles to the page
        spoons.results.forEach( spoon => {
          document.getElementById("spoons").innerHTML += spoon.html 
        })

    })
    .catch(error => console.log(error) );
}
 

const render =  async ( spoon ) => {
 
   // console.log(spoon);

    //  Assemble a template 
    // =======
    spoon.html = '<div class="spoon">'+
      '<div class="content">' +
        '<h2>'+
            spoon.title+
        '</h2>'+
        '<img src="'+spoon.image+'">'+
        '<p>Spoonacular ID: '+spoon.id+'</p>'+
      '</div>'+
    '</div>'+
    '<hr/>'
  
}

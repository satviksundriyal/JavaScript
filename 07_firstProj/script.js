const buttons=document.querySelectorAll('.button');

const body = document.querySelector('body');
    
buttons.forEach((button)=>{
   
    button.addEventListener('mouseover', (e)=>{
      
        //console.log(e.target);  //event kidhr se aa raha hai

        if(e.target.id === 'grey')
        {
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'blue')
        {
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'yellow')
        {
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'white')
        {
            body.style.backgroundColor= e.target.id;
        }
    });
});
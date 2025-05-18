const button=document.querySelectorAll(".button")
    const body=document.querySelector('body')

    //event 
    button.forEach(function(button){
        console.log(button);
        button.addEventListener('click',function(e){
            console.log(e);
            console.log(e.target);
            if(e.target.id==='beige'){
                body.style.backgroundColor=e.target.id;
            }else if(e.target.id==='pink'){
                body.style.backgroundColor=e.target.id;
            }else if(e.target.id==='skyBlue'){
                body.style.backgroundColor=e.target.id;
            }else if(e.target.id==='yellow'){
                body.style.backgroundColor=e.target.id;
            }
        });
    });
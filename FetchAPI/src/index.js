document.addEventListener('click', e=>{
    e.preventDefault();
    
    const el=e.target;
    if(el.localName==='a'){
        const href=el.getAttribute('href');
        pushPage(href);
    }
})

async function  pushPage(href) 
{
    try{
    const page= await fetch(href);
    if(page.status!==200) throw new Error('erro nosso');

    const texto= await page.text();
    loadPage(texto);
    }
    catch(e){
        console.log(e);
    }
    
}

function loadPage(text){
    const divTexto=document.querySelector('.resultado');
    divTexto.innerHTML=text;
}
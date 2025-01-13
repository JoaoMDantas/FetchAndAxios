


document.addEventListener('click', async (e)=>{
    e.preventDefault();
    const el=e.target;
    if(el.localName==='a'){

        const response= await(fetch(el.getAttribute('href')));
        const texto=  await response.text();
        loadPage(texto);
        // fetch(el.getAttribute('href'))
        // .then(response=>{
        //     if(response.status!==200) throw new Error('erro nosso');
        //     return response.text()
        // })
        // .then(response=>loadPage(response))
        // .catch(e=>{
        //     console.log('perdão, estamos trabalhando para consertar o erro');
        // })
    }
});

function loadPage(html){
    const texto=document.querySelector('.resultado');
    texto.innerHTML=html;
}


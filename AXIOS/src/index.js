
const divText=document.querySelector('.result');
document.addEventListener("click", async (e)=>{
    const el=e.target;
    if(el.className==='btnMostrar'&& !divText.textContent){

        const response= await axios('../assets/pessoas.json');
        // const dados=await fetch('../assets/pessoas.json');
        // const text=await dados.json();
        loadData(response.data);
    }
    if(el.className==='btnHide'){
        divText.textContent='';
    }
})

function loadData(texto){

    for(let pessoa of texto){
        const li=document.createElement("li");
        li.textContent=`${pessoa.nome} ${pessoa.salario}  ${pessoa.estado}`;
        divText.appendChild(li);

        
    }
}
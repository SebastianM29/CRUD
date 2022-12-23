const options = {
   backdrop: true,
   keyboard: true
 };
const url='http://localhost:5000/api/articulos';
const contenedor = document.querySelector('tbody');
let resultados='';
const myModal = new bootstrap.Modal(document.getElementById('ModalArt'),options);
const doc=document.querySelector('form');
const desc=document.getElementById('desc');
const precio=document.getElementById('precio');
const stock=document.getElementById('stock');
const total = document.getElementById('totally')
let opcion='';



buttoncreate.addEventListener('click',()=>{
   desc.value='';
   precio.value='';
   stock.value='';
   myModal.show();
   opcion='crear';
});

const mostrar = (articulos) => {
   let totalprecios = 0
   let totalpreciosPublico = 0
   articulos.forEach(articulo=>{
      const alPublico = articulo.precio + (articulo.precio*15)/100;
      const ganancia = alPublico - articulo.precio
      const PorStock = alPublico*articulo.stock
      resultados += 
      `
      <tr id="fields">
      <td>${articulo.id}</td>
      <td>${articulo.descripcion}</td>
      <td>${articulo.precio}</td>
      <td>${alPublico}</td>
      <td>${ganancia.toFixed(2)}</td>
      <td>${articulo.stock}</td>
      <td>${PorStock}</td>
      <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
      </tr>
      
      `
      totalprecios += articulo.precio*articulo.stock;
      totalpreciosPublico += alPublico*articulo.stock;
   })
   contenedor.innerHTML=resultados
   
   console.log(contenedor)
   console.log(totalprecios)
   total.innerHTML = `<h3> Total de Costo: ${totalprecios} </h3>
   <h3> Importe total de Venta: ${totalpreciosPublico} </h3>`

}









let dataModal = async()=> {
   try {
    const resp = await fetch(url)
    const result = await resp.json();
    mostrar(result)
    
    
    
   
    
    
   } catch (error) {
    
      
    
   }

}
dataModal();

//funcionalida a los botones
const on = (element,event,selector,handler) => {

  
   element.addEventListener(event,e =>{
      if (e.target.closest(selector)) {
         handler(e)
      }
   })
   
 


}

//Borrar
 on(document,'click','.btnBorrar',e =>{
const fila = e.target.parentNode.parentNode;

let id = fila.firstElementChild.innerHTML;
console.log(id);
alertify.confirm("Desea borrar los datos?", async () => {
   const response = await fetch(`${url}/${id}`,{ method:'DELETE'});
    let final = await response.json()
   
    location.reload();
  },
  function(){
    alertify.error('Dato no borrado');
  });
})
//Editar
let idEdit=0
on(document,'click','.btnEditar',e =>{
  
   const fila = e.target.parentNode.parentNode;
   
   //capturar id de manera alternativa
   idEdit=fila.children[0].innerHTML

   const descripcion = fila.children[1].innerHTML;
   const precioF = fila.children[2].innerHTML;
   const stockF = fila.children[3].innerHTML;
  
   desc.value=descripcion;
   precio.value=precioF;
   stock.value=stockF;
   opcion='editar'
   myModal.show();
  
   
 
})
//crear
doc.addEventListener('submit',async e => {
 
   if (opcion=='crear') {
     const res = await fetch(url,{
         method: 'POST',
         headers: {
            'Content-Type':'application/json'
         },
         body: JSON.stringify({ 
            descripcion : desc.value,
            precio : precio.value,
            stock : stock.value

         })
      })
    let result = await res.json()
    let array = [];
    array.push(result);
    dataModal(array);



    };
   if (opcion=='editar') {
      
      const response = await fetch(`${url}/${idEdit}`,{
      method:'PUT',
      headers:{
         'Content-Type':'application/json'
      },
      body: JSON.stringify({ 
         descripcion : desc.value,
         precio : precio.value,
         stock : stock.value

      })
    })
    let resEditar = await response.json(); 
    console.log('reesultado',resEditar)
    location.reload()
      
      
   }
   myModal.hide()
})


/*let dataModal = async()=> {
   try {
    const resp = await fetch(url)
    const result = await resp.json();
    
    result.forEach(element => {
      let tr = document.createElement('tr')
      tr.id="fields"
      tr.innerHTML= `
      
      <td>${element.id}</td>
      <td>${element.descripcion}</td>
      <td>${element.precio}</td>
      <td>${element.stock}</td>
      <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
      
      `
      tbodyEl.appendChild(tr)
     
      
    });
    
    
   } catch (error) {
      
    
   }

}
dataModal();

Para inicializar la variable "this._config", puedes asignarle un valor en el constructor o en otra función de tu clase o objeto. Por ejemplo:

Copy code
class MyClass {
  constructor() {
    this._config = {}; // Inicializar this._config como un objeto vacío
  }
}
También podrías asignarle un valor a "this._config" en otra función de tu clase o objeto:

Copy code
class MyClass {
  myFunction() {
    this._config = {}; // Inicializar this._config como un objeto vacío
  }
}
Una vez que hayas inicializado "this._config", puedes acceder a sus propiedades como cualquier otro objeto. Por ejemplo:

Copy code
this._config.backdrop = true; // Asignar valor a la propiedad "backdrop"
console.log(this._config.backdrop); // Mostrar valor de la propiedad "backdrop" en la consola
Es importante tener en cuenta que "this._config" es una variable de instancia, lo que significa que su valor puede variar entre diferentes instancias de la clase o objeto. Asegúrate de inicializarla y asignarle un valor adecuado en cada instancia antes de intentar acceder a sus propiedades.

Espero que esto te ayude a solucionar el problema. Si tienes más preguntas o necesitas más ayuda, no dudes en preguntar.




Regenerate response




*/
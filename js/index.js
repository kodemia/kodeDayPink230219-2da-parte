

function getProductsList () {
  const listaDeProductosAsString = localStorage.getItem('listaDeProductos')
  const listaDeProductos = JSON.parse(listaDeProductosAsString)
  return listaDeProductos
}

console.log(localStorage.getItem('listaDeProductos'))

let listaDeProductos = localStorage.getItem('listaDeProductos')
  ? JSON.parse(localStorage.getItem('listaDeProductos'))
  : []

$(document).ready(function () {
  $('#boton-subir-producto').on('click', function () {
    const nombre = $('#product-name').val()
    const descripcion=  $('#product-description').val()
    const cantidad = $('#product-quantity').val()
    const precio = $('#product-price').val()
    const imagen = $('#product-image').val()

    console.log('nombre: ', nombre)
    console.log('descripcion: ', descripcion)
    console.log('cantidad: ', cantidad)
    console.log('precio: ', precio)
    console.log('imagen: ', imagen)

    const producto = {
      nombre,
      cantidad,
      descripcion,
      precio,
      imagen
    }

    listaDeProductos.push(producto)
    console.log('listaDeProductos: ', listaDeProductos)
    localStorage.setItem('listaDeProductos', JSON.stringify(listaDeProductos))
  })


})

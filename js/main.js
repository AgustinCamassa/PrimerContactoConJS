const productos = [

    {
        id: "RTX 3090",
        titulo: "RTX 3090",
        desc: "Nvidia - Zotac Gaming",
        precio: 1800,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/3090.jpg",
    },
    {
        id: "RTX 3080",
        titulo: "RTX 3080",
        desc: "Nvidia - Gigabyte OC",
        precio: 1400,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/3080.png",
    },
    {
        id: "RTX 3070 ti",
        titulo: "RTX 3070 ti",
        desc: "Nvidia - MSI Suprim X",
        precio: 900,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/3070.jfif",
    },
    {
        id: "RTX 3060 ti",
        titulo: "RTX 3060 ti",
        desc: "Nvidia - MSI Ventus 3x",
        precio: 700,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/3060.jfif",
    },
    {
        id: "RTX 3050",
        titulo: "RTX 3050",
        desc: "Nvidia - Palit Dual OC",
        precio: 400,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/3050.jpg",
    },
    {
        id: "GTX 1660 Super",
        titulo: "GTX 1660 Super",
        desc: "Nvidia - MSI Gaming X",
        precio: 250,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/1660.jpg",
    },
    {
        id: "GTX 1660 ti",
        titulo: "GTX 1660 ti",
        desc: "Nvidia - MSI Gaming X",
        precio: 200,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/1660.jpg",
    },
    {
        id: "GTX 1660",
        titulo: "GTX 1660",
        desc: "Nvidia - MSI Gaming X",
        precio: 180,
        categoria: {
            nombre: "Nvidia",
            id: "nvidia"
        },
        img: "img/1660.jpg",
    },
    {
        id: "RX 6900 XT",
        titulo: "RX 6900 XT",
        desc: "AMD - Gigabyte Aorus OC",
        precio: 1400,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/6900.jfif",
    },
    {
        id: "RX 6800 XT",
        titulo: "RX 6800 XT",
        desc: "AMD - MSI Gaming Z Trio",
        precio: 1100,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/6800.jpg",
    },
    {
        id: "RX 6700 XT",
        titulo: "RX 6700 XT",
        desc: "AMD - PowerColor HellHound",
        precio: 800,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/6700.webp",
    },
    {
        id: "RX 6600 XT",
        titulo: "RX 6600 XT",
        desc: "AMD - ROG Strix Gaming OC",
        precio: 600,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/6600.jpg",
    },
    {
        id: "RX 6500 XT",
        titulo: "RX 6500 XT",
        desc: "AMD - Pulse Gaming OC",
        precio: 350,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/6500.jpg",
    },
    {
        id: "RX 580",
        titulo: "RX 580",
        desc: "AMD - ASRock Phantom Gaming",
        precio: 200,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/580.jpg",
    },
    {
        id: "RX 570",
        titulo: "RX 570",
        desc: "AMD - ASRock Phantom Gaming",
        precio: 160,
        categoria: {
            nombre: "AMD",
            id: "amd"
        },
        img: "img/580.jpg",
    },

];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.img}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-modelo">${producto.desc}</p>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    console.log(productosEnCarrito);

}
// PRODUCTOS
const productos = [

    {
        id: 1,
        nombre: "RTX 3090",
        cantidad: 1,
        desc: "Nvidia - Zotac Gaming",
        precio: 1800,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/3090.jpg",
    },
    {
        id: 2,
        nombre: "RTX 3080",
        cantidad: 1,
        desc: "Nvidia - Gigabyte OC",
        precio: 1400,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/3080.png",
    },
    {
        id: 3,
        nombre: "RTX 3070 ti",
        cantidad: 1,
        desc: "Nvidia - MSI Suprim X",
        precio: 900,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/3070.jfif",
    },
    {
        id: 4,
        nombre: "RTX 3060 ti",
        cantidad: 1,
        desc: "Nvidia - MSI Ventus 3x",
        precio: 700,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/3060.jfif",
    },
    {
        id: 5,
        nombre: "RTX 3050",
        cantidad: 1,
        desc: "Nvidia - Palit Dual OC",
        precio: 400,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/3050.jpg",
    },
    {
        id: 5,
        nombre: "GTX 1660 Super",
        cantidad: 1,
        desc: "Nvidia - MSI Gaming X",
        precio: 250,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/1660.jpg",
    },
    {
        id: 5,
        nombre: "GTX 1660 ti",
        cantidad: 1,
        desc: "Nvidia - MSI Gaming X",
        precio: 200,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/1660.jpg",
    },
    {
        id: 5,
        nombre: "GTX 1660",
        cantidad: 1,
        desc: "Nvidia - MSI Gaming X",
        precio: 180,
        categoria: {
            nombre: "Nvidia",
            id: "Nvidia"
        },
        img: "img/1660.jpg",
    },
    {
        id: 6,
        nombre: "RX 6900 XT",
        cantidad: 1,
        desc: "AMD - Gigabyte Aorus OC",
        precio: 1400,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/6900.jfif",
    },
    {
        id: 7,
        nombre: "RX 6800 XT",
        cantidad: 1,
        desc: "AMD - MSI Gaming Z Trio",
        precio: 1100,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/6800.jpg",
    },
    {
        id: 8,
        nombre: "RX 6700 XT",
        cantidad: 1,
        desc: "AMD - PowerColor HellHound",
        precio: 800,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/6700.webp",
    },
    {
        id: 9,
        nombre: "RX 6600 XT",
        cantidad: 1,
        desc: "AMD - ROG Strix Gaming OC",
        precio: 600,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/6600.jpg",
    },
    {
        id: 10,
        nombre: "RX 6500 XT",
        cantidad: 1,
        desc: "AMD - Pulse Gaming OC",
        precio: 350,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/6500.jpg",
    },
    {
        id: 5,
        nombre: "RX 580",
        cantidad: 1,
        desc: "AMD - ASRock Phantom Gaming",
        precio: 200,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/580.jpg",
    },
    {
        id: 5,
        nombre: "RX 570",
        cantidad: 1,
        desc: "AMD - ASRock Phantom Gaming",
        precio: 160,
        categoria: {
            nombre: "AMD",
            id: "AMD"
        },
        img: "img/580.jpg",
    },

];


const contenedorProductos = document.querySelector("#contenedor-productos")

function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.img}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-modelo">${producto.desc}</p>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `

        contenedorProductos.append(div);
    })

}

cargarProductos();
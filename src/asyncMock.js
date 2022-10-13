const products =  [
    { 
        id: '1', 
        name: 'alfajor de almendras', 
        price: 400, 
        category: 'alfajores', 
        img:'https://solaccursiopasteleria.netlify.app/public/image/alfajorAlmendras.jpg', 
        stock: 20, 
        description:'Alfajor de base de nuez relleno de dulce de leche'
    },
    { 
        id: '2',
        name: 'budin de banana',
        price: 900,
        category: 'budines',
        img:'https://solaccursiopasteleria.netlify.app/public/image/budinBanana.jpg',
        stock: 10,
        description:'Budín húmedo de banana y dulce de leche.'
    },
    { 
        id: '3',
        name: 'cookies',
        price: 250,
        category: 'cookies',
        img:'https://solaccursiopasteleria.netlify.app/public/image/cookies.jpg',
        stock: 20,
        description:'Cookie con chips de chocolate'
    },
    { 
        id: '4', 
        name: 'hojaldritas', 
        price: 200, 
        category: 'facturas', 
        img:'https://solaccursiopasteleria.netlify.app/public/image/hojaldritas.jpg', 
        stock: 12, 
        description:'Base de hojaldre con crema pastelera y manzana'
    },
    { 
        id: '5',
        name: 'medialunas',
        price: 200,
        category: 'facturas',
        img:'https://solaccursiopasteleria.netlify.app/public/image/medialunas.jpg',
        stock: 24,
        description:'Medialunas artesanales'
    },
    { 
        id: '6',
        name: 'budin de naranja',
        price: 900,
        category: 'budines',
        img:'https://solaccursiopasteleria.netlify.app/public/image/budinNaranja.jpg',
        stock: 10,
        description:'Budín húmedo de naranja con crema de queso y almendras'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
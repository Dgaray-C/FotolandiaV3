/*const mockProducts = [
    {
        id: 1,
        name: 'Camara Nikon D7500',
        category: 'camaras',
        price: 1200000,
        description: 'Cámara réflex digital de alto rendimiento, ideal para fotografía profesional y entusiastas.',
        stock: 10,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/113701380_01/w=1500,h=1500,fit=pad',
        dimensions: '14 x 10 x 8 cm',
        weight: '1.2 kg',
        brand: 'Nikon',
        discount: 10
    },
    {
        id: 2,
        name: 'Drone DJI Mavic Air 2',
        category: 'drones',
        price: 850000,
        description: 'Drone compacto y potente con cámara 4K, excelente para capturar tomas aéreas de calidad.',
        stock: 5,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaRxiOTHHLaAzvuFWzvcwoW2RV8B0qmT23VvF7gsiRif0U_M1TLmwn_JUo869osdB9pxhMQ6dR7JriBeseSDj-26H45mMK3Vqqtp83WER61Qjz20h5iuFm',
        dimensions: '18 x 12 x 7 cm',
        weight: '570 g',
        brand: 'DJI',
        discount: 15
    },
    {
        id: 3,
        name: 'Lente Canon EF 50mm f/1.8',
        category: 'lentes',
        price: 125000,
        description: 'Lente fijo con apertura amplia, perfecto para retratos y fotografía con poca luz.',
        stock: 15,
        image: 'https://www.canontiendaonline.cl/wcsstore/CCHCatalogAssetStore/lens_std_ef_50mm_f18_01.jpg',
        dimensions: '6 x 6 x 4 cm',
        weight: '160 g',
        brand: 'Canon',
        discount: 5
    },
    {
        id: 4,
        name: 'Luz LED Neewer 660',
        category: 'iluminacion',
        price: 75000,
        description: 'Panel LED regulable, ideal para fotografía y grabaciones de video en interiores.',
        stock: 8,
        image: 'https://www.ebest.cl/media/catalog/product/cache/47abc4af9d81a631bd44d97ba9797770/1/0/10089057.jpg',
        dimensions: '20 x 20 x 4 cm',
        weight: '900 g',
        brand: 'Neewer',
        discount: 20
    },
    {
        id: 5,
        name: 'Camara Sony A7 III',
        category: 'camaras',
        price: 1800000,
        description: 'Cámara sin espejo con sensor full-frame y excelente calidad de imagen para profesionales.',
        stock: 7,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/123869323_01/w=1500,h=1500,fit=pad',
        dimensions: '13 x 10 x 7 cm',
        weight: '650 g',
        brand: 'Sony',
        discount: 8
    },
    {
        id: 6,
        name: 'Drone Autel Evo Lite+',
        category: 'drones',
        price: 950000,
        description: 'Drone con larga duración de batería y cámara de alta resolución para grabaciones profesionales.',
        stock: 4,
        image: 'https://kinestore.cl/wp-content/uploads/2022/03/Lite-6-600x520.jpeg',
        dimensions: '20 x 15 x 8 cm',
        weight: '820 g',
        brand: 'Autel',
        discount: 12
    },
    {
        id: 7,
        name: 'Lente Sony FE 85mm f/1.4',
        category: 'lentes',
        price: 850000,
        description: 'Lente prime de alta calidad diseñado para retratos con un hermoso efecto bokeh.',
        stock: 12,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/129974785_01/w=1500,h=1500,fit=pad',
        dimensions: '8 x 8 x 7 cm',
        weight: '820 g',
        brand: 'Sony',
        discount: 18
    },
    {
        id: 8,
        name: 'Panel LED Godox SL60W',
        category: 'iluminacion',
        price: 90000,
        description: 'Luz continua con excelente temperatura de color para estudios pequeños y medianos.',
        stock: 20,
        image: 'https://cdnx.jumpseller.com/killstore/image/47391417/label-0_c99137d8-6723-4282-a0d7-7f96fbc2282f.jpg?1718121191',
        dimensions: '22 x 22 x 5 cm',
        weight: '950 g',
        brand: 'Godox',
        discount: 25
    },
    {
        id: 9,
        name: 'Camara Canon EOS R6',
        category: 'camaras',
        price: 2200000,
        description: 'Cámara sin espejo con estabilización de imagen y enfoque rápido para resultados excepcionales.',
        stock: 3,
        image: 'https://apertura.cl/tienda/34739-large_default/canon-eos-r6-mark-ii-rf-24-105mm-f4l-is-usm.jpg',
        dimensions: '14 x 9 x 8 cm',
        weight: '1.4 kg',
        brand: 'Canon',
        discount: 7
    },
    {
        id: 10,
        name: 'Drone Parrot Anafi',
        category: 'drones',
        price: 650000,
        description: 'Drone portátil con zoom óptico y capacidad para capturar videos en 4K HDR.',
        stock: 6,
        image: 'https://http2.mlstatic.com/D_NQ_NP_621912-MLA45293472252_032021-O.webp',
        dimensions: '20 x 10 x 8 cm',
        weight: '620 g',
        brand: 'Parrot',
        discount: 10
    },
    {
        id: 11,
        name: 'Lente Tamron 28-75mm',
        category: 'lentes',
        price: 750000,
        description: 'Lente versátil con enfoque rápido y calidad óptica superior, ideal para uso diario.',
        stock: 9,
        image: 'https://cdnx.jumpseller.com/tripodes1/image/20957701/resize/300/300?1658870542',
        dimensions: '9 x 7 x 8 cm',
        weight: '600 g',
        brand: 'Tamron',
        discount: 12
    },
    {
        id: 12,
        name: 'Anillo de luz LED Andoer',
        category: 'iluminacion',
        price: 50000,
        description: 'Anillo de luz portátil, perfecto para maquilladores, streamers y vloggers.',
        stock: 25,
        image: 'https://http2.mlstatic.com/D_NQ_NP_927998-CBT49372232285_032022-O.webp',
        dimensions: '30 x 30 x 5 cm',
        weight: '1.0 kg',
        brand: 'Andoer',
        discount: 5
    },
    {
        id: 13,
        name: 'Camara Fujifilm X-T4',
        category: 'camaras',
        price: 1800000,
        description: 'Cámara compacta con estabilización de imagen y colores vibrantes para creadores de contenido.',
        stock: 10,
        image: 'https://cdnx.jumpseller.com/killstore/image/47403618/label-0_1f2c34c9-d1dc-48cd-8201-7d07a7d99da4.jpg?1718121228',
        dimensions: '13 x 9 x 8 cm',
        weight: '780 g',
        brand: 'Fujifilm',
        discount: 8
    },


    {
        id: 14,
        name: 'Drone Holy Stone HS720E',
        category: 'drones',
        price: 480000,
        description: 'Drone asequible con estabilización electrónica para tomas estables y calidad 4K.',
        stock: 7,
        image: 'https://images.versus.io/objects/holy-stone-hs720e.front.variety.1622034913471.jpg',
        dimensions: '25 x 20 x 10 cm',
        weight: '560 g',
        brand: 'Holy Stone',
        discount: 10
    },
    {
        id: 15,
        name: 'Lente Sigma 35mm f/1.4',
        category: 'lentes',
        price: 960000,
        description: 'Lente de enfoque fijo con calidad óptica profesional y bokeh suave.',
        stock: 5,
        image: 'https://www.sigmaphoto.cl/wp-content/uploads/2020/10/35mm-F1.4-Art-dgdn6.jpg',
        dimensions: '8 x 8 x 7 cm',
        weight: '665 g',
        brand: 'Sigma',
        discount: 12
    },
    {
        id: 16,
        name: 'Kit de iluminación Softbox Neewer',
        category: 'iluminacion',
        price: 65000,
        description: 'Kit de iluminación con softboxes para fotografía de estudio o grabaciones.',
        stock: 18,
        image: 'https://http2.mlstatic.com/D_NQ_NP_708824-MLC47886386108_102021-O.webp',
        dimensions: '60 x 60 x 20 cm',
        weight: '2.5 kg',
        brand: 'Neewer',
        discount: 15
    },
    {
        id: 17,
        name: 'Camara Panasonic Lumix GH5',
        category: 'camaras',
        price: 1400000,
        description: 'Cámara ideal para video con capacidades avanzadas y grabación en 4K.',
        stock: 9,
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/113695955_01/public',
        dimensions: '14 x 10 x 8 cm',
        weight: '725 g',
        brand: 'Panasonic',
        discount: 10
    },
    {
        id: 18,
        name: 'Drone Ryze Tello',
        category: 'drones',
        price: 125000,
        description: 'Drone compacto y fácil de usar, perfecto para principiantes y tomas recreativas.',
        stock: 22,
        image: 'https://http2.mlstatic.com/D_NQ_NP_817940-MLA45538604356_042021-O.webp',
        dimensions: '10 x 10 x 4 cm',
        weight: '80 g',
        brand: 'Ryze',
        discount: 8
    },
    {
        id: 19,
        name: 'Lente Nikon Z 24-70mm f/2.8',
        category: 'lentes',
        price: 1850000,
        description: 'Lente zoom profesional con excelente nitidez y rendimiento en todas las condiciones.',
        stock: 4,
        image: 'https://cdnx.jumpseller.com/horizontal/image/47987351/resize/1800/1800?1714088763',
        dimensions: '10 x 10 x 15 cm',
        weight: '805 g',
        brand: 'Nikon',
        discount: 5
    },
    {
        id: 20,
        name: 'Luz de estudio Elgato Key Light',
        category: 'iluminacion',
        price: 105000,
        description: 'Luz de estudio regulable para creadores de contenido, ideal para streams y videos.',
        stock: 14,
        image: 'https://cdnx.jumpseller.com/gameclub-store/image/40840827/resize/610/610?1697748151',
        dimensions: '45 x 30 x 10 cm',
        weight: '1.5 kg',
        brand: 'Elgato',
        discount: 10
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 1000)
    })
}

export const getProductByID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = mockProducts.find((item) => item.id === parseInt(id))
            if (product) {
                resolve(product)
            } else {
                reject('Producto no encontrado');
            }
        }, 1000)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = mockProducts.filter((item) => item.category === category)
            if (products.length > 0) {
                resolve(products)
            } else {
                reject('Categoría no encontrada')
            }
        }, 1000)
    })
}

export default mockProducts;*/
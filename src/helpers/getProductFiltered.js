
export const getProductsFiltered = (products, selectedCat='Todo',name='') => {
    
    name = name.toLocaleLowerCase().trim()

    const productsFiltered = products.filter((e) => (
        selectedCat === 'Todo'
        ? products && e.nombre.toLocaleLowerCase().includes(name)
        : e.categoria === selectedCat && e.nombre.toLocaleLowerCase().includes(name)
    ))

    return productsFiltered
}

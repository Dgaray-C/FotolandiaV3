import Item from "../Item/Item"

export default function ItemList({ products }) {
    return (
        <>
            {products.map(product => (
                <div key={product.id} className="col">
                    <Item product={product} />
                </div>
            ))}
        </>
    )
}

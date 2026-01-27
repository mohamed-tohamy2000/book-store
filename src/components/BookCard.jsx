export default function BookCard({ product }) {
    return (
        <>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img
                        src={`http://localhost:1337${product.pro_image.url}`}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.pro_name}
                        <div className="badge badge-secondary">{product.pro_price}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{product.category.cat_name}</div>
                    </div>
                    <div className="card-actions flex flex-nowrap items-center w-full">
                        <button className="btn btn-error w-full">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

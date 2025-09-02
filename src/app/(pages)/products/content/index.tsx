"use client"

import { useGetProducts } from "@/hooks"

export const ProductsContent = () => {
    const { data, isLoading, isError } = useGetProducts();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Something went wrong...</div>;

    return (
        <div>{data?.map(product => (
            <h2 key={product.id}>
                {product.name} - {product.price} {product.currency} - {product.inStock ? "In Stock" : "Out of Stock"}
            </h2>
        ))
        }</div>
    )
}

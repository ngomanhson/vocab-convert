import { productService } from "@/services/product.service";
import { IProduct } from "@/types/product";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query"

export const useGetProducts = () => {
    const fetchProducts = ({ signal }: QueryFunctionContext) => productService.getAll(signal);

    return useQuery<IProduct[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: typeof window !== "undefined",
    })
}
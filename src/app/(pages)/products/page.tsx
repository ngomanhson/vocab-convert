import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { ProductsContent } from "./content"
import { productService } from "@/services/product.service";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
    const queryClient = new QueryClient();

    await queryClient.fetchQuery({
        queryKey: ["products"],
        queryFn: () => productService.getAll()
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductsContent />
        </HydrationBoundary>
    )
}

export default ProductsPage;
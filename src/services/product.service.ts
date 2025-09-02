import { IProduct } from "@/types/product";
import { apiClient } from "./apiClient"

export const productService = {
    getAll: async (signal?: AbortSignal) => {
        const res = await apiClient.get<IProduct[]>("products", { signal });
        return res.data;
    }
}
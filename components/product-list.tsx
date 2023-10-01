import { Product } from "@/types";

import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps{
    title: string,
    items: Product[],
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    return ( 
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length === 0 &&<NoResult/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((items) =>(
                   <ProductCard key={items.id} data={items}/>

                ))}
            </div>
        </div>
     );
}
 
export default ProductList;
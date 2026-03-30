"use client"

import { useRouter } from "next/navigation";
import { Pagination} from "antd";

const ProductsPagination = ({
    page,
    total,
    limit,
}:{
    page: number;
    total: number;
    limit: number;
}) => {

    const router = useRouter()

    return(
        <div>
            <Pagination
                current={page}
                total={total}
                size="large"
                pageSize={limit || 3}
                onChange={(page, pageSize) => {
                    router.push(`/ManhShop?page=${page}&limit=${pageSize}`);
                }}
            />
        </div>
    )
}

export default ProductsPagination;
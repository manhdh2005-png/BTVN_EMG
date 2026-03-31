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
                defaultCurrent={page}
                total={total}
                size="large"
                pageSize={limit || 3}
                onChange={(page, pageSize) => {
                    router.push(`?page=${page}&limit=${pageSize}`);
                }}
            />
        </div>
    )
}

export default ProductsPagination;
import Link from "next/link";

const OrdersPage = () => {
    return (
        <div className="flex flex-row px-4">
            <div className="basis-[10%] text-center space-y-4">
                <Link href="/profile/1">My Profile</Link>
                <div className="bg-slate-200 rounded-lg">My Orders</div>
                <div>Sign Out</div>
            </div>
            <div className="basis-[90%] ml-4">
                <div className="">Contents</div>
            </div>
        </div>
    );
};

export default OrdersPage;

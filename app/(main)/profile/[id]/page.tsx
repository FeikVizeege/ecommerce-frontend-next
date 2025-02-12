import Link from "next/link";

const ProfilePage = () => {
    return (
        <div className="flex flex-row px-4">
            <div className="basis-[10%] text-center space-y-4">
                {/* I have to add mb-4 because Link tag won't work when it comes to margin top */}
                <div className="bg-slate-200 rounded-lg mb-4">My Profile</div>
                <Link href="/orders/1">My Orders</Link>
                <div>Sign Out</div>
            </div>
            <div className="basis-[90%] ml-4">
                <div className="">Contents</div>
            </div>
        </div>
    );
};

export default ProfilePage;

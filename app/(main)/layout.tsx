import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="flex justify-between items-center sticky top-0 bg-cyan-500 px-4 py-8 z-10">
                <Link href="/">Home</Link>
                <div className="flex flex-row items-center space-x-4">
                    <Link href="/products">Products</Link>
                    <Link href="/categories">Categories</Link>
                    <Form>
                        <div className="flex flex-nowrap">
                            <Input
                                type="search"
                                placeholder="Search..."
                            />
                            <Button type="submit">
                                <FaSearch />
                            </Button>
                        </div>
                    </Form>
                </div>
                <Link href="/profile/1">Profile</Link>
                {/* <div>Login</div> */}
            </div>
            {/* Content */}
            <div className="py-4">{children}</div>
            {/* Footer */}
            <div className="flex mt-auto justify-between bg-cyan-500 px-4 py-8">
                <div>Footer</div>
                <div>Footer</div>
            </div>
        </div>
    );
}

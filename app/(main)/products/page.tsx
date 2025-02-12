import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ProductsPage = () => {
    return (
        <div className="px-4">
            {/* Filter */}
            <div className="pb-4">
                <Accordion className="px-4" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-2xl">Filter</AccordionTrigger>
                        <AccordionContent>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Filter</CardTitle>
                                    <CardDescription>Desc</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Contents</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Footer</p>
                                </CardFooter>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            {/* Products */}
            <div className="grid grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Contents</p>
                    </CardContent>
                    <CardFooter>
                        <p>Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default ProductsPage;

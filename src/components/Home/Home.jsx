// import { useLoaderData } from "react-router-dom";
import PackageCategory from "../PackageCategory/PackageCategory";
import { useEffect, useState } from "react";

const Home = () => {
    // const categories = useLoaderData();
    // console.log(categories);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('wedding.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);

    return (
        <section>
            <div>
                <h1>Banner from nice page</h1>
            </div>
            <div>
                <div className="text-center">
                    <h1 className="text-5xl mb-7">ALL INCLUSIVE WEDDING PACKAGES</h1>
                    <p className="text-lg">Wedding Snapshots provides an intimate setting for your wedding ceremony and reception, all in one convenient location.</p>
                </div>
                <div className="container mx-auto grid grid-cols-3 gap-7">
                    {
                        categories.map(category => <PackageCategory key={category.id} category={category}></PackageCategory>)
                    }
                </div>
            </div>
            <div>
                <h1> full width quote</h1>
            </div>
            <div>
                <h1>the experience</h1>
            </div>
        </section>
    );
};

export default Home;
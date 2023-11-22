// import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
    const packageItems = useLoaderData();
    const { id } = useParams();
    const idNumber = +id;
    const packageItem = packageItems.find(packageItem => packageItem.id === idNumber);

    const handleOrder = () =>{
        toast.success('Successfully ordered')
    }

    return (
        <div className="container mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl my-20 mx-2">
                <figure><img src={packageItem.image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-stone-500 text-3xl sm:text-5xl font-semibold italic mb-6">{packageItem.package_name}</h2>
                    <h2 className="text-stone-400 text-xl sm:text-2xl">Package {packageItem.package_description}</h2>
                    <p><span className="text-amber-800 text-3xl">Price:</span> <span className="text-2xl text-stone-500">{packageItem.price}</span></p>
                    <div className="card-actions justify-end">
                        <button onClick={handleOrder} className="px-4 py-3 bg-[#c8b293] hover:bg-stone-600 rounded-lg text-stone-100 font-semibold text-lg">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
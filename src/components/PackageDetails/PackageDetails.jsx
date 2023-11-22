// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
    const packageItems = useLoaderData();
    const { id } = useParams();

    const idNumber = +id;

    const packageItem = packageItems.find(packageItem => packageItem.id === idNumber);


    // console.log(typeof (+id));



    // const packageItem = packageItems.find(packageItem=>packageItem.id === idNumber);
    // console.log(packageItem.id);
    // const {package_name} = packageItems;
    // console.log(package_name);
    // const packageItem =packageItems.map(x=>console.log(x))

    // console.log(packageItem.id,idNumber);
    return (
        <div>
            <h1>package coming {id}</h1>
            <p>price : {packageItem.price}</p>
        </div>
    );
};

export default PackageDetails;
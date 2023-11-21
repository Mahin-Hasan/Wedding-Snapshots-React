import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
    const packageItems = useLoaderData();
    // console.log(packageItem.id);
    const {id} = useParams();
    const idNumber = +id;
    const packageItem = packageItems.find(packageItem=>packageItem.id === idNumber);

    console.log(id);
    return (
        <div>
            <h1>package coming {packageItem.package_name}</h1>
        </div>
    );
};

export default PackageDetails;
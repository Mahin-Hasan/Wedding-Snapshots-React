import { Link } from "react-router-dom";

const PackageCategory = ({ category }) => {
    const { id, package_name, image_url } = category;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-around">
                    <h2 className="card-title">{package_name}</h2>
                    <Link to={`packagedetails/${id}`}><button className="btn btn-outline bg-[#c8b293] hover:bg-stone-500 text-white">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCategory;
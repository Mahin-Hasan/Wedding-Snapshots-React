// import { useLoaderData } from "react-router-dom";
import PackageCategory from "../PackageCategory/PackageCategory";
import { useEffect, useState } from "react";
import banner1 from '../../assets/home1.png'
import banner2 from '../../assets/home2.png'
import banner3 from '../../assets/home3.png'
import banner4 from '../../assets/home4.png'
import successImg from '../../assets/success.png'
import experience from '../../assets/experience.png'
import venue from '../../assets/venue.png'
import './Home.css'
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'

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

    useEffect(()=>{
        Aos.init({duration:1800});
    },[])

    return (
        <section className="mx-2 sm:mx-0">
            <div className="container mx-auto">
                <div className="" data-aos="fade-down">
                    <div className="flex items-center justify-between xl:justify-around flex-col sm:flex-row">
                        <div className="w-52 -left-20 sm:-left-0 lg:w-80 md:w-60 sm:w-48 border-4 border-[#b79d79] relative sm:top-10 rounded-full">
                            <img className="rounded-full" src={banner1} alt="" />
                        </div>
                        <div className="w-60 -right-16 sm:-right-0 lg:w-96 md:w-72 border-8 border-[#b79d79] sm:w-56 relative sm:-top-6 rounded-full">
                            <img className="rounded-full" src={banner2} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between flex-col sm:flex-row">
                        {/* circle */}
                        <div className="bg-[#b79d79] relative -left-28 sm:left-10 -top-10 sm:-top-0  lg:left-32 xl:left-44 rounded-full inline-block p-16">
                        </div>
                        {/* 2pic reverse in small */}
                        <div className="border-8 sm:border-[18px] w-60 sm:w-60 md:w-80 lg:w-96 xl:w-[520px] border-[#b79d79] relative -top-14 -right-14 sm:-top-20 md:left-10 lg:left-20 rounded-full">
                            <img className="block sm:hidden rounded-full" src={banner4} alt="" />
                            <img className="hidden sm:block rounded-full" src={banner3} alt="" />
                        </div>
                        <div className="border-[12px] sm:border-8 border-[#b79d79]  sm:w-44 md:w-56 lg:w-60 xl:w-96 rounded-full">
                            <img className="hidden sm:block rounded-full" src={banner4} alt="" />
                            <img className="block sm:hidden rounded-full" src={banner3} alt="" />
                        </div>
                    </div>
                </div>
                {/* banner description */}
                <div className="text-center max-w-2xl mx-auto space-y-6" data-aos="fade-up">
                    <h1 className="text-2xl mt-6 sm:text-5xl capitalize text-stone-500 font-medium leading-none sm:leading-normal">Are you dreaming of a romantic wedding?</h1>
                    <p className="text-stone-400 leading-normal">
                        Imagine waking up to a job that lifts you up and transports you to a different world. A world populated with a billion heartfelt feelings and stories etched ceremoniously in magic, love and joie de vivre. Perfect with its Disney-like happy endings, sworn vows and the promises of forever. This is our world. The Wedding Story world! <br />See our work <Link className="text-amber-700 underline font-semibold" to='/gallary'>Gallary</Link></p>
                </div>
            </div>
            {/* package section */}
            <div className="my-16" data-aos="zoom-in">
                <div className="text-center mb-10">
                    <h1 className="text-2xl sm:text-5xl capitalize text-stone-500 font-medium leading-none sm:leading-normal">all inclusive wedding packages</h1>
                    <p className="text-lg text-stone-400 leading-normal max-w-6xl mx-auto">Wedding Snapshots provides an intimate setting for your wedding ceremony and reception, all in one convenient location. Choose desired package to your choice</p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        categories.map(category => <PackageCategory key={category.id} category={category}></PackageCategory>)
                    }
                </div>
            </div>
            {/* success banner section */}
            <div style={{ backgroundImage: `url(${successImg})` }} className="bg-cover bg-center rounded-lg sm:rounded-none my-16">
                <div className="py-52 flex justify-center">
                    <div className=" inline-block bg-transparent text-center border-4 border-[#e7cca6]">
                        <h1 className="m-2 bg-white border-2 border-[#b79d79] font-mono text-lg p-4 text-stone-500">

                            &quot;I cannot express adequately how wonderful our experience was collaborating with the Wedding shots. <br /> Additionally, the inclusive pricing exceeded our expectations.&quot;
                            <br />
                            <span className="font-sans italic text-stone-400 font-bold">
                                - Chloe & Chase - <br />
                            </span>
                            &quot;Our attendees were equally impressed with the cuisine, with many describing it as the finest wedding <br /> and most elegant venue they&apos;ve ever attended.&quot;
                            <br />
                            <span className="font-sans italic text-stone-400 font-bold">
                                - Melanie & Brian -
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            {/* Experiance Section */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32" data-aos="fade-right">
                    <div className="text-stone-500 space-y-4 pr-8 ">
                        {/* info */}
                        <h1 className="text-4xl tracking-wider uppercase">the experience</h1>
                        <h3 className=" text-xl tracking-wide uppercase">all inclusive wedding packages</h3>
                        <p className="font-sans text-lg">The Wedding Snapshots provides an intimate setting for your wedding ceremony and reception, all in one convenient location.</p>
                        <p className="font-sans text-lg">The all inclusive wedding package creates a stress free experience for your perfect wedding day. The packages include a premium open bar, gourmet food prepared onsite, linens & napkins in your choice of color, candle centerpieces, wedding cake, hotel accommodations, wedding coordinator & more</p>
                        <button className="btn-lg btn-outline bg-[#c8b293] hover:bg-stone-600 text-white rounded-md">View wedding packages</button>
                    </div>
                    <div className="relative ps-10 sm:px-0">
                        <div className="bg-[#c8b293]">
                            {/* picture */}
                            {/* <div className="absolute top-20 right-20"> */}
                            <div className="relative right-10 top-10">
                                {/* wrapper div */}
                                <img src={experience} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* reversed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12" data-aos="fade-left">
                    <div className="relative pe-10 sm:px-0">
                        <div className="bg-[#c8b293]">
                            {/* picture */}
                            {/* <div className="absolute top-20 right-20"> */}
                            <div className="relative left-10 top-10">
                                {/* wrapper div */}
                                <img src={venue} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-stone-500 space-y-4 text-end pl-8 mt-10 sm:mt-0">
                        {/* info */}
                        <h1 className="text-4xl tracking-wider uppercase">the venue</h1>
                        <h3 className=" text-xl tracking-wide uppercase">beautifully restored outdoor loactions</h3>
                        <p className="font-sans text-lg">The Wedding Snapshots offers intimate indoor spaces for your event including the bright and open main terrace hall, indoor lounge and bar, dressing suites and more. Outside, a large wrap around  deck and patio overlook the gazebo bar & gardens.</p>
                        <p className="font-sans text-lg">The historical estate boasts a picturesque outdoor ceremony site underneath romantic willow trees & four acres of manicured
                            grounds and gardens</p>
                        <button className="btn-lg btn-outline bg-[#c8b293] hover:bg-stone-600 text-white rounded-md">View outdoor packages</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Home;
import toast from 'react-hot-toast';
import contact from '../../assets/contact.png'

const Contact = () => {
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        toast.success('Form submitted')
    }


    return (
        <section className="container mx-auto">
            <div className="text-center border-y-2 mb-6">
                <h1 className="text-2xl my-6 sm:text-4xl  uppercase text-stone-500 font-medium leading-none sm:leading-tight">contact us</h1>
            </div>
            <div style={{ backgroundImage: `url(${contact})` }} className="bg-cover bg-center rounded-none sm:rounded-lg my-16">
                {/* bg color */}
                <div className="py-28">
                    {/* container */}
                    <div className="bg-white border-4 border-[#b79d79] p-14 max-w-4xl mx-auto">
                        {/* white bg */}
                        <form onSubmit={handleOnSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="text-stone-500 text-lg font-medium">
                                        Address
                                    </label>
                                    <input
                                        placeholder="Your Address"
                                        type="text"
                                        id="inputPassword5"
                                        className="form-control bg-[#f2f2f2] w-full border-2 py-3"
                                        aria-describedby="passwordHelpBlock"
                                        required
                                    />
                                </div>
                                <div>
                                <label className="text-stone-500 text-lg font-medium">
                                        Name
                                    </label>
                                    <input
                                        placeholder="Enter your Name"
                                        type="text"
                                        id="inputPassword5"
                                        className="form-control bg-[#f2f2f2] w-full border-2 py-3"
                                        aria-describedby="passwordHelpBlock"
                                        required
                                    />
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                <label className="text-stone-500 text-lg font-medium">
                                        Phone
                                    </label>
                                    <input
                                        placeholder="Enter your Phone (e.g. +8801712345678)"
                                        type="number"
                                        id="inputPassword5"
                                        className="bg-[#f2f2f2] w-full border-2 py-3"
                                        aria-describedby="passwordHelpBlock"
                                        required
                                    />
                                </div>
                                <div>
                                <label className="text-stone-500 text-lg font-medium">
                                    Date
                                </label>
                                <input
                                    placeholder=""
                                    type="date"
                                    id="inputPassword5"
                                    className="bg-[#f2f2f2] w-full border-2 py-3"
                                    aria-describedby="passwordHelpBlock"
                                    required
                                />
                                </div>
                            </div>
                            <div className="">
                            <label className="text-stone-500 text-lg font-medium">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Enter your message"
                                    className="bg-[#f2f2f2] w-full border-2 py-4"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral text-lg text-stone-300">SUBMIT</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
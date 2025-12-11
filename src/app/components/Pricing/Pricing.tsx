import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// Prix des abonnements
function Pricing() {
    return (
        <section className='min-h-screen flex flex-col justify-evenly items-center max-w-2xl'>
            <h2 className='text-[1.5rem] font-thin'>Unlock More Features</h2>

            <div className='flex flex-wrap justify-center gap-12 [&_li]:flex [&_li]:items-center [&_li]:gap-1.5 [&_li]:mb-2'>
                <article className="flex flex-col gap-5 px-15 py-3 rounded-xs bg-white/8">
                    <h3 className='text-[1.2rem]'>Free</h3>
                    <ul>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Unlimited chat</span>
                        </li>
                       
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>See who visited you</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-gray-400" />
                            <span>See who liked you</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-gray-400" />
                            <span>Ad-free experience</span>
                        </li>
                    </ul>
                </article>
                <article className="flex flex-col gap-5 px-15 py-3 rounded-xs bg-white/8">
                    <h3 className='text-[1.2rem]'>Premium</h3>
                    <ul>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Unlimited chat</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>See who visited you</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>See who liked you</span>
                        </li>
                        <li>
                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                            <span>Ad-free experience</span>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Pricing
import Button from '../Button/Button';

function Slider() {

    return (

        <>
            <div className="flex justify-center items-end gap-10 pb-10 h-96 bg-cover bg-center bg-[url('/img/home/album-meet/meet1.jpg')] ">
                <Button className="border bg-white/30">Chat Now</Button>
                <Button className="border bg-white/30">Sign In</Button>
            </div>
        </>

    )
}

export default Slider;
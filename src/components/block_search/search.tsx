import rombs from "../../assets/Vectors.png"
import { BiSearch } from "react-icons/bi";

export function BlockSearch() {

    return (
        <>
            <section className="w-[1184px] h-[238px] bg-slate-800 relative top-10 m-auto">
                <h3 className="text-4xl text-white relative p-10 px-14">Блок с поиском</h3>
                <form className="block bg-white w-[591px] h-[142px] mx-[531px] -my-[74px]">
                    <BiSearch className="text-3xl relative top-[41px] left-10"/>
                    <input type="text" className="p-2 mt-1 relative w-[521px] left-14 bg-white/0 
                    outline-none pl-5 text-lg" placeholder="Товары, услуги..."/>
                <button className="px-24 bg-blue-600 text-white m-auto relative
                                  block top-2 w-[521px] h-[48px] text-xl font-thin 
                                  transition duration-300 hover:bg-blue-500">Поиск</button>
                </form>
                <img src={rombs} alt="romb" className="mx-[55px] top-8 relative"/>
            </section>
        </>
    );
}
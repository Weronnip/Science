import { InputPushDate } from "../form_input/push_date";
import img from "../../assets/Other 01.png"
import logo from "../../assets/logo.png";
import "./layout.css"

export function HeadSite() {
    return (
        <>
         <header className="w-[100%] bg-white h-24 relative">
            <ul className="flex justify-center items-center top-4 relative">
                <img src={logo} alt="logo-site" className="right-[150px] relative" />
                <li className="item">Пункт 1</li>
                <li className="item">Пункт 2</li>
                <li className="item">Пункт 3</li>
                <li className="item"><a href=" https://github.com/Weronnip" target="_blank">GitHub</a></li>
                <a href="tel:+78009999999" className="left-[150px] relative top-[5px]
                                                    text-blue-700 text-2xl">+ 7 (800) 999-99-99</a>
            </ul>
         </header>
        </>
    );
}

export function FootSite() {
    return (
        <>
         <footer className="footer">
            <img src={img} alt="img" className="img-form" />
            <InputPushDate />
         </footer>
        </>
    );
}
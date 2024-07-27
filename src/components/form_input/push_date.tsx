import { FaVk, FaYandex } from "react-icons/fa";
import "./form.css"

export function InputPushDate() {

    return (
        <>
            <div className="container">
                <h2 className="title-form">Подача заявки</h2>
                <form className="form-push">
                    <input type="text" placeholder="Имя" className="input-date" />
                    <input type="email" placeholder="Почта" className="input-date" />
                    <label className="floor"> Пол:
                        <input type="checkbox" className="gander-check" id="gCheck"/>Мужской
                        <input type="checkbox" className="gander-check" id="gCheck"/>Женский
                    </label>
                    <select className="select-choice">
                        <option className="choice-date">Выбор</option>
                    </select>
                    <button className="bth-push">Подать заявку</button>
                    <div className="log-in-other">
                        <hr className="line-to-text" />
                        <h4 className="line-title">Другой способ</h4>
                        <div className="nav-login-bth">
                            <button className="log-in-yandex"><FaYandex className="icon"/></button>
                            <button className="log-in-vk"><FaVk className="icon"/></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Login.scss";
import FormLogin from "../Auxillary_components/FormLogin";
import FormRegistry from "../Auxillary_components/FormRegistry";
import { Status } from "../../App";

function Sign({ type, handleClick }) {
    let userInfo = {};
    const getValue = (name, value) => {
        userInfo[name] = value;
    };

    const context = useContext(Status);
    const form = () => {
        /*Метод рендера формы (авторизации либо регистрации)*/

        if (type === "login") {
            return <FormLogin getValue={getValue} submit={submit} />;
        }
        return <FormRegistry getValue={getValue} submit={submit} />;
    };

    const submit = (e, form) => {
        e.preventDefault();

        if (form === "login") {
            /*Валидация формы авторизации*/
            /*Если поля формы заполнены то резолвим метод авторизации*/
            if (userInfo.loginName !== undefined && userInfo.loginPass !== undefined) {
                context.login(form, userInfo);
            } else {
                alert("Поля должны быть заполнены");
            }
        } else {
            /*Валидация формы регистрации*/
        }
    };

    const buttonForModal = () => {
        /*Метод возвращает кнопку с методом и значением в зависимости от типа формы*/

        const value = type === "login" ? "Зарегистрируйтесь" : "Войти";
        const handler = type === "login" ? handleClick("signin") : handleClick("login");

        return (
            <button className="login-descript__subtitle_prefix" onClick={handler}>
                {value}
            </button>
        );
    };

    return (
        <section className="section-login">
            <div className={`login ${type === "login" ? null : "login_registry"}`}>
                <div className="login-descript">
                    <h1 className="login-descript__title">
                        {type === "login" ? "Войти" : "Регистрация"}
                    </h1>
                    <div className="login-descript__subtitle">
                        <span>
                            {type === "login" ? "Новый пользователь? " : "Уже зарегистрирован? "}
                        </span>
                        {buttonForModal()}
                    </div>
                </div>
                {form()}
            </div>
        </section>
    );
}

Sign.propTypes = {
    type: PropTypes.oneOf(["login", "signin"]).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Sign;
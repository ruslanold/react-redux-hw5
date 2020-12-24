import React from "react";
import { connect} from "react-redux";

import "./LoginPage.css";
import screen from "./img/screen.jpg";
import apple from "./img/apple.png";
import google from "./img/google.png";
import FormErrors from "../formErrors/FormErrors";
import { login } from "../../actions"
import { NavLink } from "react-router-dom";


class LoginPage extends React.Component {

  state = {
    username: "",
    password: "",
    nameValid: false,
    passwordValid: false,
    formValid: false,
    isError: false,
    formErrors: {
      username: "",
      password: ""
    }
  }

  handlerInput = ({ target } ) => {
    target.value
      ? target.parentElement.classList.add("inputValueTrue")
      : target.parentElement.classList.remove("inputValueTrue");
  };
  
  validatorForm = async (e) => {
    e.preventDefault()

    let {
      formValid,
      username,
      password,
      formErrors,
      nameValid,
      passwordValid
    } = this.state;

    if (formValid) {
      let data = await login(username, password)
      return this.props.login(data)
    }


    let errorsText = {
      default: "Введенное вами имя пользователя или пароль не верно. Проверьте свое имя пользователя или пароль и повторите попытку."
    }
      
    formErrors.username = nameValid ? '' : errorsText.default
    formErrors.password = passwordValid ? '' : errorsText.default
    

    this.setState({
      isError: !nameValid || !passwordValid,
      formErrors
    }, this.props.login)
  }

  validateInput = (e) => {
    const { target: { name, value } } = e;
    this.setState({[name]: value}, () => this.validator(name, value))
  }

  validator = (fieldName, fieldValue) => {
    let nameValid = this.state.nameValid;
    let passwordValid = this.state.passwordValid;

    if (fieldName == "username") nameValid = !!fieldValue.length
    if(fieldName == "password") passwordValid = fieldValue.length > 7

    this.setState({
      nameValid,
      passwordValid,
      formValid: nameValid && passwordValid,
    })

  }

  render() {
    return (
      <div className="login">
        <div className="login_left">
          <div className="login_left-img">
            <img src={screen} alt="" />
          </div>
        </div>

        <div className="login_right">
          <div className="login_right_form_inner">
            <h1 className="login_right_logo">Instagram</h1>
            <div className="login_right_form">
              <form
                className=""
                id="loginForm"
                onSubmit={this.validatorForm}
              >
                <div className="login_right_form_items">
                  <div className="login_right_form-username login_right_form_item">
                    <div className="login_right_form_item_inner">
                      <label>
                        <span className="">
                          Номер телефона, имя пользователя или эл. адрес
                        </span>
                        <input
                          onKeyUp={this.handlerInput}
                          onChange={this.validateInput}
                          value={this.state.username}
                          aria-label="Номер телефона, имя пользователя или эл. адрес"
                          name="username"
                          type="text"
                          className=""
                        />
                      </label>
                      <div className=""></div>
                    </div>
                  </div>

                  <div className="login_right_form-password login_right_form_item">
                    <div className="login_right_form_item_inner">
                      <label>
                        <span className="">Пароль</span>
                        <input
                          onKeyUp={this.handlerInput}
                          onChange={this.validateInput}
                          value={this.state.password}
                          name="password"
                          type="password"
                          className=""
                        />
                      </label>
                      <div className="login_right_form_item-btn">
                        <div className="">
                          <button className="" type="button">
                            Показать
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="login_right_btnLogIn">
                    <button
                      disabled={!this.state.formValid}
                      className=""
                      type="submit"
                    >
                      <div className="">Войти</div>
                    </button>
                  </div>

                  <div className="login_right_interval_btns">
                    <div className="login_right_interval_btns-line"></div>
                    <div className="login_right_interval_btns-text">или</div>
                    <div className="login_right_interval_btns-line"></div>
                  </div>

                  <div className="login_right_btnFacebook">
                    <button className="" type="button">
                      <span className="login_right_btnFacebook-icon"></span>
                      <span className="login_right_btnFacebook-text">Войти через Facebook</span>
                    </button>
                  </div>
                </div>

                {
                  this.state.isError && <FormErrors props={this.state.formErrors} />
                }

                <NavLink className="login_right_passwordReset" to="#">
                    Забыли пароль?
                  </NavLink>
              </form>
            </div>
          </div>

          <div className="login_right_reg">
            <div className="login_right_reg_inner">
              <p className="">
                У вас ещё нет аккаунта?{" "}
                <NavLink to="#">
                  <span >Зарегистрироваться</span>
                </NavLink>
              </p>
            </div>
          </div>

          <div className="login_right_installApp">
            <p className="login_right_installApp-text">Установите приложение.</p>

            <div className="login_right_installApp-icons">
              <a
                className=""
                href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
              >
                <img
                  alt="Доступно в Магазине приложений"
                  className=""
                  src={apple}
                />
              </a>
              <a
                className=""
                href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB1212157-FD18-4A77-A752-1039E39D5632%26utm_content%3Dlo%26utm_medium%3Dbadge"
              >
                <img
                  alt="Доступно в Google Play"
                  className=" "
                  src={google}
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(data),
  }
}

export default connect(
  null,
  mapDispatchToProps)(LoginPage);

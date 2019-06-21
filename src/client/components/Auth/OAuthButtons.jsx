import React from 'react';
import pic1 from '../../public/trsvelforest.jpg';
import pic2 from '../../public/mapBiege.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OAuth extends React.Component {

    renderAuthButton() {
        if (this.props.check.isSignedInGoogle === false) {
            return (
                <button onClick={this.props.setLogin}
                    className="ui button">
                    <i className="google plus icon"></i>
                    Sign In
            </button>
            );
        } if (this.props.check.isSignedInGoogle === true) {
            return (
                <div>
                    <button onClick={this.props.setLogOut}
                        className="ui button">
                        <i className="google plus icon" />
                        Sign Out
                </button>
                </div>
            )

        } else {
            return (
                <button onClick={this.props.setLogin}
                    className="ui button">
                    <i className="google plus icon"></i>
                    Load
        </button>
            );
        }
    }

    render() {
        // console.log(this.props.check)
        return (
            <div class="ui container">
                <div class="ui four column grid">
                    <div class="two column row">
                        {/*   div with buttons   */}
                        <div class="column">
                            <div className="ui buttons">
                                <Link className="ui yellow button" to='/reg'>Sign Up</Link>
                                <div className="or"></div>
                                <div>{this.renderAuthButton()}</div>
                                <div className="or"></div>
                                <Link className="ui olive button " to='/login'>Log In</Link>
                            </div>
                        </div>
                    </div>
                    <div class="ui segment">

                        <div class="ui large circular right floated image">
                            <img src={pic1} />
                        </div>
                        <p>Путь..</p>
                        <p>Это приложение поможет вам составить свой маршрут, вдохновиться маршрутами других путешественников. А также ознакомиться с возможными препятствиями,
                            приключениями и интересными местами на пути.
                        </p>

                        <p>Если вы спросите чем это приложение отличается от других подобных, то все преимущество ощутят на себе любители походов и пешего туризма.</p>
                        <p>На данный момент,как минимум на российском рынке, нет такого приложения, где существует "тусовка" походников. Вам нужно постоянно выискивать
                            скрины карт или фото карт,где едва ли есть адеватное обьяснение маршрута.Нужно вычитывать информацию на устраевших форумах из 2000-х.
                        </p>
                        <p>Этот процесс тратит много сил и времени,более того информация которую вы найдете может быть устаревшая и неактуальная,что может не благоприятно сказаться на самом путешествии.</p>
                        <div class="ui medium circular left floated image">
                            <img src={pic2} />
                        </div>
                        <br></br>
                        <p>Данное приложение поможет вам продумать важные аспекты своего путешествия,составить план,просмотреть этапы маршрута и связаться с такими же любителями путешествий как вы.</p>
                        <p>Давайте объединяться и делиться путями вместе!</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default OAuth;

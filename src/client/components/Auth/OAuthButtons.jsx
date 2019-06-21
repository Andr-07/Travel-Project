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
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                        <div class="ui medium circular left floated image">
                            <img src={pic2} />
                        </div>
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default OAuth;

import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '272287560391-a1dv466het12goa2v3hg9uvljmmtflb3.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this. onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } 
        // else {
        //     this.props.signOut()
        // }
    };

    onSignedIn = () => {
        this.auth.signIn()
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/main' />
        }
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            this.setState({ redirect: true })
            return <div>{this.renderRedirect()}</div>

        } else {
            return (
                <button onClick={this.onSignedIn}
                 className="ui google plus button">
                <i className="google plus icon"></i>
                    Google Plus
        </button>
            );
        }
    }

    render() {
        return (

            <div>{this.renderAuthButton()}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(
    mapStateToProps, { signIn }
)(GoogleAuth);



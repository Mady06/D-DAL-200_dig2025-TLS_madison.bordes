import React from 'react';
import {
    Button,
    Jumbotron
} from 'reactstrap';
import './App.css';

interface WelcomeProps {
    isAuthenticated: boolean;
    authButtonMethod: any;
    user: any;
}

interface WelcomeState {
    isOpen: boolean;
}

function WelcomeContent(props: WelcomeProps) {
    // If authenticated, greet the user
    if (props.isAuthenticated) {
        return (
            <div>
                <h4>Welcome {props.user.displayName}!</h4>
            </div>
        );
    }

    // Not authenticated, present a sign in button
    return <div className="col-md-12 text-right">
        <Button color="info" onClick={props.authButtonMethod}>Se connecter</Button>
    </div>;
}

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    render() {
        return (
            <Jumbotron>
                <img className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/pictures/31.png`}
                    alt="logo" /><br></br>
                <h1 className="title">My digicalendar</h1>
                <img className="img"
                    src={`${process.env.PUBLIC_URL}/pictures/Bonhomme.png`}
                    alt="bonhomme" /><br></br>
                <WelcomeContent
                    isAuthenticated={this.props.isAuthenticated}
                    user={this.props.user}
                    authButtonMethod={this.props.authButtonMethod} />
            </Jumbotron>
        );
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Registration.css'

const RegistrationButton = ({path, helpText, buttonText}) => {
  return (
  <div>
    <Link className="whitebutton button" to={path}>{buttonText}</Link>
    {/*<button onClick=""><i className="fa fa-info-circle" aria-hidden="true"></i></button>*/}
  </div>
  );
}

export default class Registration extends Component {
  render() {
    return (
      <div className='Content'>
        <h2>Get Registered!</h2>
        <div className="button-group stacked">
           <RegistrationButton path="/register/individual" buttonText="Register as an Individual" helpText="Register as an individual if you haven't formed a team yet with others. You can always join or create a team later. Attend our Hackathon Social on Friday, August 11th to meet other participants and form a team."/>
           <RegistrationButton path="/registerTeam/create" buttonText="Create a Team" helpText="Create a team and the password needed for others to join it. Afterwards, you'll be prompted to register with that team."/>
           <RegistrationButton path="/registerTeam/join/join-team" buttonText="Join a Team" helpText="Is there an existing team you'd like to join? Make sure you know their password. After confirming the team name and password, you'll be prompted to register with that team."/>
        </div>
      </div>
    );
  }
}
import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="https://www.footballticketnet.com/theme/images/teams/Buy-Olympique-Marseille-Football-Tickets-FootballTicketNet.png"></img>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
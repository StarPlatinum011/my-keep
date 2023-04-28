import React from "react";

function Footer() {
    const todayDate = new Date().getFullYear();
    return(
        <footer>
            <p>&copy; Karan Pun {todayDate} </p>
        </footer> 
    )
}

export default Footer;
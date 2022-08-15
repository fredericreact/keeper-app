import React from "react";


function Footer () {

    let today = new Date();
    let yyyy = today.getFullYear();

    return(
<footer>
    <p>Copyright {yyyy}</p>
</footer>
    );
}



export default Footer;
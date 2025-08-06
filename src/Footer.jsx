import React from "react"

function Footer() {
    const updatedYear = new Date ().getFullYear();
    return  (<footer> <p> Copyright @ {updatedYear}</p>  </footer>)
}

export default Footer;
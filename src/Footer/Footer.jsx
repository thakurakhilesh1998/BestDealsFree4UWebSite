import React from "react";
import '../css/footer.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const Footer=()=>{
    return(<>
        <div className="footer bg-primary">
            <div className="copy">
                <span>Copyright &copy; 2020</span>
            </div>
            <div className="contact-us">
                <span style={{padding:"0.6rem"}}>Follow Us On</span>
                <ul className="list_social mr-auto">
                    <li><FacebookIcon/></li>     
                    <li><InstagramIcon/></li> 
                    <li><TelegramIcon/></li> 
                </ul>
            </div>
        </div>
    </>);
}

export {Footer};

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
                    <li><a href="https://www.facebook.com/Best-Deals-Free-4U-113339740523962/?ref=bookmarks" className="icon" target="_blank"><FacebookIcon/></a></li>
                    <li><a href="https://www.instagram.com/best_deals_free_4u/" className="icon" target="_blank"><InstagramIcon/></a></li> 
                    <li><a href="https://t.me/bestdelasfree4u" className="icon" target="_blank"><TelegramIcon/></a></li> 
                </ul>
            </div>
        </div>
    </>);
}

export {Footer};

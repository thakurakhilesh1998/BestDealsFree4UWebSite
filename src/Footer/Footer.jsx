import React from "react";
import '../css/footer.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const Footer=()=>{
    return(<>
        <div className="footer bg-primary">
            <span>Copyright &copy; 2020</span>
            <ul className="list_social">
                <li><a href="#"><FacebookIcon/></a></li>     
                <li><a href="#"><InstagramIcon/></a></li> 
                <li><a href="#"><TelegramIcon/></a></li> 
            </ul>

        </div>
    </>);
}

export {Footer};

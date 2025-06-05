import { FacebookIcon, InstagramIcon } from 'lucide-react'

import './../components_css/AppFooter.css'
export function AppFooter(){
    return(
        <footer>
            <div className="container">
                <div className='icons'>
                    <h2>React</h2>
                    <p>Este é sua mensal thiago em react</p>
                    <InstagramIcon/>
                    <FacebookIcon/>
                </div>
                <div className='abt'>
                    <h2>About Us</h2>
                    <p>About about about about</p>
                </div>
                <div className='cnt'>
                    <h2>Support</h2>
                    <p>Contact Us</p>
                </div>
            </div>
        </footer>
    )
}
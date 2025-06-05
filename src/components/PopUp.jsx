import { XIcon } from 'lucide-react'
import './../components_css/PopUp.css'
const PopUp = ({children}) => {
    return(
        <div>
            { children }
        </div>
    )
}

PopUp.Trigger = ({children, style, setIsOpen}) => {
    return (
        <button className={style} onClick={() => setIsOpen(true)}>{children}</button>
    )
}

PopUp.Close = ({ setIsOpen }) => {
    return (
        <button onClick={() => setIsOpen(false)} className='close_btn'><XIcon/></button>
    )
}

PopUp.Content = ({children, isOpen}) => {
    if (!isOpen) return
    
    return (
        <div className='Popup'>
            {children}
        </div>
    )
}

export { PopUp }

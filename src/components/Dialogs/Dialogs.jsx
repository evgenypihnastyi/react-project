import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
const DialogItem = (props) => {
    props.id
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


const Message = (props) => {
  return <div className={s.dialogs}>{props.message}</div>  
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                <DialogItem name = "Dimych" id="1"/>
                <DialogItem name = "Andrey" id="2"/>
                <DialogItem name = "Sveta" id="3"/>
                <DialogItem name = "Sasha" id="4"/>
                <DialogItem name = "Viktor" id="5"/>
                <DialogItem name = "Valera" id="6"/>
            </div>


            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your day going?"/>
                <Message message="You"/>
                <Message message="You"/>
                <Message message="You"/>
            </div>
        </div >
    )
}

export default Dialogs;
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = props.dialogs
    let messages = props.messages

    let dialogsElements = dialogs.map(d => <DialogItem name={dialogs.name} id={dialogs.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;
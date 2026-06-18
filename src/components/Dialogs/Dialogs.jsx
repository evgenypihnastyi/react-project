import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './Dialogitem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.state

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)

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
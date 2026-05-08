import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                <div className={s.dialog + " " + s.active}>
                    Dimych   
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sacha
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day going?</div>
                <div className={s.message}>You</div>
            </div>
        </div >
    )
}

export default Dialogs;
import styles from './profile-info.module.css';

import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileInfo() {
    return (
        <div className={`mt-30 ml-15 ${styles.profileInfo}`}>
            <Input placeholder='Имя'/>
            <EmailInput extraClass='mt-6'/>
            <PasswordInput extraClass='mt-6'/>
        </div>
    )
}

export default ProfileInfo;
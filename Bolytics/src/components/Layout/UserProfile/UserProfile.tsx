import '../../../styles/index.css'
import UserProfileIcon from '../../../assets/user_profile.svg?react';

type UserProfileProps = {
    onClick: () => void;
    className?: string;
}

function UserProfile({onClick,className}: UserProfileProps) {
    return <UserProfileIcon className={`hover:cursor-pointer ${className}`} onClick={onClick}/>
}

export default UserProfile;
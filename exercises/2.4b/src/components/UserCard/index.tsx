import './UserCard.css';

interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
}

const UserCard = (props : UserCardProps) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{props.name}</h2>
      <p className="user-age">Âge: {props.age}</p>
      <p className={props.isOnline ? "user-status online" : "user-status offline"}>
        {props.isOnline ? "En ligne" : "Hors ligne"}
      </p>
    </div>
  );
};

export default UserCard;
import UserCard from "../UserCard";

function App() {

  return (
    <div>
      <UserCard name="Alice" age={25} isOnline={true} />
      <UserCard name="Bob" age={30} isOnline={false} />
      <UserCard name="Charlie" age={23} isOnline={true} />
    </div>
  )
}

export default App

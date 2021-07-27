import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "みむ",
  email: "123@abc.com",
  address: "ADDRESS"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

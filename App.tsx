import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <Routes />
    </>
  );
}

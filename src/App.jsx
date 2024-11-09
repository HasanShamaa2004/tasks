import { Sidebar } from "./Components/SeconSidebar/SeconSidebar";
import SpecialGrid from "./components/SpecialGrid/SpecialGrid";
import img from "./components/SpecialGrid/question.svg";

function App() {
  const rows = [
    [img, "S-211", "UX Design", "UX Design", "UX Design", "UX Design", "S-211"],
    [img, "S-211", "UX Design", "UX Design", "UX Design", "UX Design", "S-211"],
  ];
  return (
    <div className="">
      <Sidebar />
      {/* <SpecialGrid rows={rows} /> */}
    </div>
  );
}

export default App;

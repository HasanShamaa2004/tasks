import SpecialGrid from "./components/SpecialGrid/SpecialGrid"
import img from "./components/SpecialGrid/question.svg"

function App() {
  
  const rows =[[img, "S-211","UX Design", "UX Design", "UX Design", "UX Design", "S-211"]
              ,[img, "S-211","UX Design", "UX Design", "UX Design", "UX Design", "S-211"]]

  return (
    
        <SpecialGrid
          rows={rows}
        />
      
      
     
  );
}

export default App;

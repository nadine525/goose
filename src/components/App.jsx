import { useThemeContext } from '../hooks/useTheme';
import Header from "../components/Header/Header";

import BarChart from "./VerticalBar/VerticalBar";

export const App = () => {
  const { theme } = useThemeContext();
  
  return (
    <>

      <Header />

        <BarChart theme={theme} />

    
      
    
      {/* <p>Hello!</p> */}
  </>

  );
};

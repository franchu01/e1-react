import './App.css';
import  GeneralWrapper  from "./Components/GeneralWrapper/GeneralWrapper";
import InputTarea from './Components/InputTarea/InputTarea';
import SmallWrapper from './Components/SmallWrapper/SmallWrapper';

function App() {
  return (
    <GeneralWrapper>
      <SmallWrapper>
        <InputTarea>HOLA</InputTarea>
      </SmallWrapper>
    </GeneralWrapper>
  )
}

export default App;

// import logo from './logo.svg';
import "./App.css";
import Index from "./components/Index";
import FancyDiv from "./components/FancyDiv";
import PersonalCard from "./components/PersonalCard";
import LightSwitch from "./components/LightSwitch";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <LightSwitch />
      <Counter counts={10} />
      <PersonalCard
        firstName="Doe"
        lastName="Jane"
        age={45}
        hairColor=" Black"
      />
      <PersonalCard
        firstName="Smith"
        lastName="John"
        age={88}
        hairColor=" Black"
      />
      <PersonalCard
        firstName="Doe"
        lastName="Jane"
        age={45}
        hairColor=" Black"
      />
      <PersonalCard
        firstName="Doe"
        lastName="Jane"
        age={45}
        hairColor=" Black"
      />
      <FancyDiv background="yellow" border="2px dashed black">
        <Index />
      </FancyDiv>
    </div>
  );
}

export default App;

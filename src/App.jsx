import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import CountdownTitle from "./components/CountdownTitle";
import SocialLinks from "./components/SocialLinks";
import bgStars from "./assets/img/bg-stars.svg";
import patternHills from "./assets/img/pattern-hills.svg";
function App() {
  return (
    <>
      <main>
        <img src={bgStars} alt="Stars" />

        <CountdownTitle />
        <CountdownTimer />
        <SocialLinks />
        <img src={patternHills} alt="Hills" />
      </main>
    </>
  );
}

export default App;

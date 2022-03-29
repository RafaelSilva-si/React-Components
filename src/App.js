import './App.css';

import InputPage from './screens/inputs/InputsPage';
import ButtonsPage from './screens/Buttons/ButtonsPage';
import JobCategory from './screens/jobCategoria/JobCategorie';

function App() {
  return (
    <div className="App">
      <ButtonsPage />
      <InputPage />
      <JobCategory />
    </div>
  );
}

export default App;

import './App.css';

import InputPage from './screens/inputs/InputsPage';
import ButtonsPage from './screens/Buttons/ButtonsPage';
import JobCategory from './screens/jobCategoria/JobCategorie';
import JobList from './screens/JobList/JobList';

function App() {
  return (
    <div className="App">
      <ButtonsPage />
      <InputPage />
      <JobCategory />
      <JobList />
    </div>
  );
}

export default App;

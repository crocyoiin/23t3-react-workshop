import { useNavigate } from 'react-router-dom';
import './ExamplePage.css'
import ExampleComponent from '../../components/ExampleComponent/ExampleComponent';
import UseStateDemo from '../../components/UseStateDemo';
import HeaderCard from '../../components/HeaderCard/HeaderCard';

const ExamplePage = () => {
  const navigate = useNavigate();

  return (
    <div id="example-page-container">
      <div id="left-grid">
        <HeaderCard/>
        <UseStateDemo/>
        <button onClick={() => navigate('/')}> Go back </button>

      </div>
      <div id="right-grid">
        <ExampleComponent/>
      </div>
    </div>
  );
}

export default ExamplePage;

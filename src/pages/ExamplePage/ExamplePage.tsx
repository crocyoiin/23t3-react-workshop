import { useNavigate } from 'react-router-dom';
import './ExamplePage.css'
import { useState } from 'react';
import ExampleComponent from '../../components/ExampleComponent/ExampleComponent';

const ExamplePage = () => {
  const navigate = useNavigate();

  // [USESTATE]
  // NOT USESTATE -------------------
  // This will update your number 'num', but will not show up in the frontend
  let num = 69;
  const updateNum = () => {
    num = num + 1;
    console.log("num: " + num);
  }

  // USING USESTATE -------------------
  // can also do cool lambda function inside div!!
  // <button onClick={() => setCount((count) => count+1)}>count is {count}</button>
  const [count, setCount] = useState<number>(0);
  const updateCount = () => {
    setCount(count + 1);
    console.log("count: " + count);
  }

  // down here you can see that 'count' is incremented on the frontend,
  // but number always remains as 69
  return (
    <div id="example-page-container">
      <p>wow very cool counter!!!!!! (useState good)</p>
      <button onClick={() => updateCount()}>count is {count}</button>
      <button onClick={() => updateNum()}>num is {num}</button>

        <ExampleComponent/>
        <button onClick={() => navigate('/')}> Go back </button>
    </div>
  );
}

export default ExamplePage;

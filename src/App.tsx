import { Person } from './components/Person';

const name: string = "Hello Type script";

function App() {

  return (
    <>
      {name}
      <Person name={"aram"} age={12} isMarried={false}/>
    </>
  )
}

export default App

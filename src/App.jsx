import './App.css'
import Header from './components/header';
import Card from './components/card';
import data from './data/data.jsx';

export default function App() {

  return (
    <>
      <Header />
      {
        data.map((data)=>{
          return(
          <Card
            {...data}
          />
          )
        })
      }
      <Card />
    </>
  )
}



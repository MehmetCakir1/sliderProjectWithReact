import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Header from './components/Header';
import ReviewList from './components/ReviewList';

const App = () => {
  return (
    <div>
      <Header/>
      <ReviewList/>
    </div>
  )
}

export default App
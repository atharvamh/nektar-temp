import Layout from "./components/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
      <Layout />
      <ToastContainer />
    </div>
  );
}

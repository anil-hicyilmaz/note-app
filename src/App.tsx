import './App.css'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
import { Counter } from './components/Counter';
import Calculator from './components/Calculator';
import TicTacToe from './components/TicTacToe';
import ConditionalStateVisualizer from './components/ConditionalStateVisualizer';

function App() {
  const [selectedProject, setSelectedProject] = useState('');

  const renderProject = () => {
    switch (selectedProject) {
      case 'Counter':
        return <Counter></Counter>
      case 'Calculator':
        return <Calculator></Calculator>
      case 'TicTacToe':
        return <TicTacToe></TicTacToe>
      case 'Conditional State Visualizer':
        return <ConditionalStateVisualizer></ConditionalStateVisualizer>
      default:
        return <p>Lütfen bir proje seçin</p>;
    }
  };
  return (
    <>
      <Sidebar  setSelectedProject={setSelectedProject}></Sidebar>
      <div>
        {renderProject()}
        {<h2>{selectedProject} Projesi</h2>}
      </div>
    </>
  )
}

export default App

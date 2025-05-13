import './App.css'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
import { Counter } from './components/Counter';
import Calculator from './components/Calculator';
import TicTacToe from './components/TicTacToe';
import ConditionalStateVisualizer from './components/ConditionalStateVisualizer';
import ListingAndComponentComposition from './components/ListingAndComponentComposition';

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
      case 'Listing and Component Composition':
        return <ListingAndComponentComposition></ListingAndComponentComposition>;
      default:
        return <p>Please select a project</p>;
    }
  };
  return (
    <>
      <Sidebar  setSelectedProject={setSelectedProject}></Sidebar>
      <div>
        {renderProject()}
        {selectedProject === '' ? null : <h2>{selectedProject} Project</h2>}
      </div>
    </>
  )
}

export default App

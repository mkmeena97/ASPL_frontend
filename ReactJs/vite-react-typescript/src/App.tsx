
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
    <ThemeProvider>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1> Mahendra's React Playground</h1>
        <ThemeToggle />
        <hr style={{ margin: '1rem 0' }} />
        <TodoList />
      </main>
    </ThemeProvider>

    </>
  )
}

export default App

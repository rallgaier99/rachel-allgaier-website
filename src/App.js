import './App.css';
import NavBar from './NavigationBar/NavBar'
import './NavigationBar/styles.css'
import projects from './Pages/Projects/projects'
import experience from './Pages/Experience/experience'


function App() {

    let Component
    switch(window.location.pathname) {
        case '/':
            Component = App
            break
        case '/projects':
            Component = projects
            break
        case '/experience':
            Component = experience
            break
        default:
            Component = App
    }

    return (
        <>
        <NavBar />
        <Component />
        </>
    )
}

export default App;

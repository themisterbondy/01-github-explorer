import Counter from './components/Counter'
import { ReposotoryList } from './components/RepositorioList'
import './styles/global.scss'

export function App() {
    return (
        <>
            <ReposotoryList />
            <Counter />
        </>
    )
}
import { Routes, Route } from 'react-router-dom'
import kkk from './pags/kkk'
import aaau from './pags/aaau'

function Rotas() {
    return(
        <Routes>
            <Route path = '/aaau' element={<aaau/>} />
            <Route path = '/risadinha' element={<kkk/>} />
        </Routes>
    )
}

export default Rotas
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { AuthRouter } from "./AuthRouter"
import { JornalScreen } from "../components/journal/JornalScreen"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/" element={<JornalScreen />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}
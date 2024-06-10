import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { SignIn } from "./Pages/SignIn";
import { Dashboard } from "./Pages/Dashboard";
import { AddUser } from "./Pages/AddUser";
import { MedicineDiet } from "./Pages/MedicineDiet";
import { DoctorsAppointment } from "./Pages/DoctorsAppointment";
import { Appointments } from "./Pages/Appointments";
import { useSession } from "./helpers/useSession";
import { UpdatePassword } from "./Pages/UpdatePassword";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  useSession();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<AddUser />} />

        <Route path="/appointments" element={<Appointments />} />

        <Route path="/doctors/appointments" element={<DoctorsAppointment />} />

        <Route path="/medicine-and-diet" element={<MedicineDiet />} />
        <Route path="/user/update-password" element={<UpdatePassword />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

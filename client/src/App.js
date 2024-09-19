import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Homepage from "./pages/Homepage";
import Registerpage from"./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>
        <Route path="/properties/:listingId" element={<ListingDetails />}/>
        <Route path="/:userId/trips" element={<TripList />}/>
        <Route path="/:userId/wishList" element={<WishList />} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

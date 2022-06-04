import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "assets/css/layout/Layout.css";
import { Blog } from "pages/Blog";

export default function Layout() {
  return (
    <Router>
      <div className='layout-root'>
        <Routes>
          <Route path='/' element={<Blog />} />
        </Routes>
        <div className='layout-footer'>PhoneNumbers.org</div>
      </div>
    </Router>
  );
}

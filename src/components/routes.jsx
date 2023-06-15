import { Routes, Route, useLocation } from "react-router-dom";

import BestPlates from "../pages/Menu/BestPlates";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          {/* <Route path="/BestPlates" element={<BestPlates />} /> */}

          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default AnimatedRoutes;

// import OrderOnline from "../pages/Order/Order";
// import OrderScreen from "../pages/Order/screens/OrderScreen";
// import ChoseScreen from "../pages/Order/screens/ChoseScreen";
// import ReviewScreen from "../pages/Order/screens/ReviewScreen";
// import SelectPaymentScreen from "../pages/Order/screens/selectPaymentScreen";
// import PaymentScreen from "../pages/Order/screens/PaymentScreen";
// import CompleteOrderScreen from "../pages/Order/screens/CompleteOrderScreen";
// import AdminScreen from "../pages/Order/screens/AdminScreen";
// import QueueScreen from "../pages/Order/screens/QueueScreen";
/* <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Choose" element={<ChoseScreen />} />
          <Route path="/Order" element={<OrderScreen />} />
          <Route path="/Review" element={<ReviewScreen />} />
          <Route path="/Select-payment" element={<SelectPaymentScreen />} />
          <Route path="/Payment" element={<PaymentScreen />} />
          <Route path="/complete" element={<CompleteOrderScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/queue" element={<QueueScreen />} /> */

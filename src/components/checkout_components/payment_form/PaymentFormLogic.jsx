// Import Component Ui
import PaymentFormUi from "./PaymentFormUi";

// Import Hooks
import { useState } from "react";

export default function PaymentFormLogic() {
  const [paymentsState, setPaymentsState] = useState([
    { id: 1, title: "Direct Bank Transfer", active: true },
    { id: 2, title: "Check Payment", active: false },
    { id: 3, title: "Paypal", active: false },
  ]);

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    payment: paymentsState[0].title,
  });

  function handlePayments(id) {
    const newPaymentsState = [...paymentsState];

    newPaymentsState.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setPaymentsState(newPaymentsState);
  }

  function handleFormInfo(key, value) {
    setFormInfo({ ...formInfo, [key]: value });
  }

  return (
    <>
      <PaymentFormUi
        payments={paymentsState}
        handlePayments={handlePayments}
        formInfo={formInfo}
        handleFormInfo={handleFormInfo}
      />
    </>
  );
}

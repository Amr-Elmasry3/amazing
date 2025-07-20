// Import Ui Component
import TopHeadrUi from "./TopHeadrUi";

// Import Hooks
import { useState } from "react";

export default function TopHeadrLogic() {
  const [languages, setLanguages] = useState({
    data: [
      { id: 1, language: "English", active: true },
      { id: 2, language: "Arabic", active: false },
      { id: 3, language: "Spanish", active: false },
    ],
    valueNow: "English",
    status: false,
  });

  const [currency, setCurrency] = useState({
    data: [
      { id: 1, currency: "USD", active: true },
      { id: 2, currency: "EUR", active: false },
      { id: 3, currency: "GBP", active: false },
    ],
    valueNow: "USD",
    status: false,
  });

  // Function
  function handleLanguagesState(typeAction, value) {
    const newLanguages = { ...languages };

    if (typeAction === "status") {
      newLanguages.status = value;
    } else if (typeAction === "changeLanguage") {
      newLanguages.data.map((lang) => {
        return lang.id === value.id
          ? ((lang.active = true), (newLanguages.valueNow = value.newValue))
          : (lang.active = false);
      });
    }

    setLanguages(newLanguages);
  }

  function handleCurrencyState(typeAction, value) {
    const newCurrency = { ...currency };

    if (typeAction === "status") {
      newCurrency.status = value;
    } else if (typeAction === "changeCurrency") {
      newCurrency.data.map((curr) => {
        return curr.id === value ? (curr.active = true) : (curr.active = false);
      });

      newCurrency.valueNow = newCurrency.data[value - 1].currency;
    }

    setCurrency(newCurrency);
  }

  return (
    <>
      <TopHeadrUi
        languages={languages}
        currency={currency}
        handleLanguagesState={handleLanguagesState}
        handleCurrencyState={handleCurrencyState}
      />
    </>
  );
}

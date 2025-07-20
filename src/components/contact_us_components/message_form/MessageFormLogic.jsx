// Import Component Ui
import MessageFormUi from "./MessageFormUi";

// Import Hooks
import { useState } from "react";

export default function MessageFormLogic() {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleMessageInfo(key, value) {
    setMessageInfo({ ...messageInfo, [key]: value });
  }

  return (
    <>
      <MessageFormUi
        messageInfo={messageInfo}
        handleMessageInfo={handleMessageInfo}
      />
    </>
  );
}

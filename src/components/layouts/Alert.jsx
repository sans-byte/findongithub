import React, { useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  if (alert) {
    return (
      <div className="flex flex-row items-center  px-4 py-1 rounded-md bg-base-300 text-error">
        <FiAlertCircle className="mr-4" />
        <p className="font-semibold flex-1 text-base">{alert.message}</p>
      </div>
    );
  }
}

export default Alert;

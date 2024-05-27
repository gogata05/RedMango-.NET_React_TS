import React from "react";
import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Page/Payment";
import { OrderSummary } from "../Components/Page/Order";

function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  const stripePromise = loadStripe(
    "pk_test_51PDiPUHnhnqR1L0xHDf9eAwQOR6OdzELRFra7t5mgP1WLPHMl2CV0Rh2q7tYJJrB8R5cqrAyPQJ58lmjny9QGkBX00RCReXyFq"
  );
  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-md-7">
            <OrderSummary />
          </div>
          <div className="col-md-5">
            <PaymentForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Payment;

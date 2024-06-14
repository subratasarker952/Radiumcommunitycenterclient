import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div>
      <p>Payment Fail</p>
      <Link className="btn" to={"/events"}>
        Go to events Page
      </Link>
    </div>
  );
};

export default PaymentFail;

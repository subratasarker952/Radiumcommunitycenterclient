import { Link } from "react-router-dom";

const PaymentCancel = () => {
  return (
    <div>
      <p>PaymentCancel</p>
      <Link className="btn" to={"/events"}>
        Go to events pages
      </Link>
    </div>
  );
};

export default PaymentCancel;

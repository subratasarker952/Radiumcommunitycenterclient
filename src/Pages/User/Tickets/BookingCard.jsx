const BookingCard = ({ booking }) => {
  const {
    img,
    date,
    seat,
    amount,
    title,
    email,
    location: eventLocation,
    paidAt,
    paymentMethod,
    paymentStatus,
    mobile,
  } = booking;
  return (
    <div className="card min-w-[300px] mt-3 bg-base-100 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={img} alt={title} className="rounded-xl h-[100px] w-[200px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Event:- {title}</h2>
        <h2 className="card-title">Date:- {date}</h2>
        <h2 className="card-title">Number of Seat:- {seat} </h2>
        <h2 className="card-title">Total Amount:- {amount} /-</h2>
        <h2 className="card-title">Email:-{email}</h2>
        <h2 className="card-title">Mobile:-{mobile}</h2>
        <h2 className="card-title">Location:-{eventLocation}</h2>
        <h2 className="card-title">Paid At:-{paidAt}</h2>
        <h2 className="card-title capitalize">
          {paymentStatus} || {paymentMethod}
        </h2>
        <div className="card-actions">
          <button
            className="btn print:hidden btn-sm block bg-pink-500 w-full"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

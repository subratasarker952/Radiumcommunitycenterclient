import toast from "react-hot-toast";

const AddEvent = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const ticketPrice = parseInt(form.price.value);
    const description = form.description.value;
    const img = form.img.value;
    const date = form.date.value;
    const time = form.time.value;
    const location = "Radium Community Center";
    if (!title || !ticketPrice || !description || !img || !date || !time) {
      toast.error("Please Provide event Information");
      return;
    }
    const event = {
      title,
      ticketPrice,
      description,
      img,
      date,
      time,
      location,
    };
    const sure = window.confirm("Are you sure event save to db?");
    if (sure) {
      console.log(event);
      //     const url = process.env.SERVER_URL
      //   fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json; charset=UTF-8",
      //       authorization: `barer ${localStorage.getItem("token")}`,
      //     },
      //     body: JSON.stringify(event),
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       if (data.insertedId) {
      //         toast.success("event Added");
      //         form.reset();
      //       } else if (data.message) {
      //         toast.error(data.message);
      //       }
      //     });
    }
  };
  return (
    <div>
      <div className="my-10">
        <div className="card shrink-0 w-full max-w-lg mx-auto shadow-2xl bg-base-100">
          <h2 className=" mt-2 text-3xl text-center">Add Event</h2>
          <form className="card-body" onSubmit={handleForm}>
            {/* title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue=""
                placeholder="event title"
                className="input input-bordered"
                required
              />
            </div>
            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue=""
                placeholder="event Price"
                className="input input-bordered"
                required
              />
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue=""
                placeholder="event Description"
                className="input input-bordered"
                required
              />
            </div>
            {/* img */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Image</span>
              </label>
              <input
                type="text"
                name="img"
                defaultValue=""
                placeholder="event Image Url"
                className="input input-bordered"
                required
              />
            </div>
            {/* date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue=''
                className="input input-bordered"
                required
              />
            </div>
            {/* time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                name="time"
                defaultValue=''
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Add event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

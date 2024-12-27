import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Feedback = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};

  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitted = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const displayNameValue = e.target.displayName.value;
    const textareaValue = e.target.textarea.value;

    // Get current date (without time)
    const submissionDate = new Date().toISOString().split("T")[0];

    const body = {
      email: emailValue,
      displayName: displayNameValue,
      photoURL,
      textarea: textareaValue,
      rating: selectedRating,
      submissionDate, // Just the date without time
    };

    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Feedback sent successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Clear textarea after successful submission
          e.target.textarea.value = "";
          setSelectedRating(0);
        }
      });
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        <span className="text-[#ff9f0d]">Pl</span>ease share your feedback
      </h2>

      <span className="flex justify-center py-4 text-sm md:text-base lg:text-lg">
        How was your experience?
      </span>
      <div className="flex space-x-2 md:space-x-3 justify-center">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            title={`Rate ${rating} stars`}
            aria-label={`Rate ${rating} stars`}
            className={`${
              rating <= selectedRating ? "text-yellow-500" : "text-gray-400"
            } w-8 h-8 md:w-10 md:h-10`}
            onClick={() => handleRatingClick(rating)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmitted} className="w-full max-w-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <input
              type="text"
              placeholder="Your name"
              name="displayName"
              defaultValue={displayName}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={email}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <textarea
              placeholder="Give Your Feedback"
              name="textarea"
              required
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>

          <div className="text-center mt-5">
            <button
              className="btn btn-outline border-0 border-[#ff9f0d] hover:bg-[#ff9f0d] hover:border-[#ff9f0d] border-b-4 hover:text-white btn-sm md:btn-md lg:btn-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

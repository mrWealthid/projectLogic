import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LikeButton from "./LikeButton";

// import DateInput from "../DateInput";

const Shopify = () => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: false,
  });

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // const [focused, setFocused] = useState(false);

  function formatDate(date) {
    let myDate = new Date(date),
      month = "" + (myDate.getMonth() + 1),
      day = "" + myDate.getDate(),
      year = myDate.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  //   const [search, setSearch] = useState("");
  let content = null;

  let startDates = formatDate(startDate);

  let endDates = formatDate(endDate);

  let url =
    endDate === undefined && startDate === undefined
      ? "https://api.nasa.gov/planetary/apod?api_key=ZeS2ABWgbioS2oB03u2GPJ5T8reP6cNu7bQpB5uV"
      : `https://api.nasa.gov/planetary/apod?api_key=ZeS2ABWgbioS2oB03u2GPJ5T8reP6cNu7bQpB5uV&start_date=${startDates}&end_date=${endDates}`;
  //  (!startDates && !endDates)

  useEffect(() => {
    setState({ loading: true, data: null, error: false });

    axios
      .get(url)
      .then((resp) => resp.data)
      .then((data) => {
        console.log(data);
        setState({
          loading: false,
          data: data,
          error: false,
        });
      })
      .catch(() => setState({ loading: false, data: null, error: true }));
  }, [url, endDates]);

  state.loading && (content = <p>Loading...</p>);
  state.error && (content = <p>Oooops! An error occured... Retry</p>);

  return (
    <div>
      <div className="flex">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="rounded-lg"
          placeholderText="Start Date.."
          dateFormat="yyyy-MM-d"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date.."
          className="rounded-lg"
          dateFormat="yyyy-MM-d"
        />
      </div>

      {state.data ? (
        <div
          className={` grid mt-10  ${
            endDate === undefined
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } mx-auto justify-center gap-6`}
        >
          {endDate === undefined ? (
            <div className="rounded-lg  max-w-sm shadow-2xl mx-auto bg-white overflow-hidden mb-5">
              <p>{state.data.copyRight}</p>
              <img
                className="w-full h-60 min-w-full"
                src={state.data.hdurl}
                alt="pics"
              />
              <div className="p-3">
                <p>{state.data.title}</p>
                <p>{state.data.explanation.slice(0, 100)}</p>
                <p>{state.data.date}</p>
                <LikeButton />
              </div>
            </div>
          ) : (
            state.data.map((item) => {
              const {
                hdurl: image,
                explanation: desc,
                title,
                copyRight,
                date,
              } = item;

              return (
                <div className="rounded-lg transform max-w-sm shadow-2xl mx-auto bg-white overflow-hidden mb-5">
                  <p>{copyRight}</p>
                  <img
                    className="w-full h-60 min-w-full"
                    src={image}
                    alt="pics"
                  />
                  <div className="p-3">
                    <p>{title}</p>
                    <p>{desc.slice(0, 100)}</p>
                    <p>{date}</p>
                    <LikeButton />
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default Shopify;

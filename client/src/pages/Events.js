import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { backendUrl } from "../App";
import { UserContext } from "../App";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const dummyEventData = [
  {
    title: "Event 1",
    description: "This is the first event",
    image: "https://aespontario.ca/wp-content/uploads/2023/02/events.jpg",
  },
  {
    title: "Event 2",
    description: "This is the second event",
    image: "https://aespontario.ca/wp-content/uploads/2023/02/events.jpg",
  },
  {
    title: "Event 3",
    description: "This is the third event",
    image: "https://aespontario.ca/wp-content/uploads/2023/02/events.jpg",
  },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const { user, setUser, selectedEventId, setSelectedEventId } =
    useContext(UserContext);
  const navigate = useNavigate();
  const getAllEvents = async () => {
    try {
      await axios
        .get(`${backendUrl}/api/user/getevents`, {
          headers: {
            Authorization: localStorage.getItem("auth_token"),
            email: user.email,
          },
        })
        .then((res) => {
          console.log(res.data);
          setEvents(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div>
        <h1 className="text-green-400 text-2xl font-bold">Events</h1>
      </div>
      <div className="flex flex-wrap gap-10 pb-4 items-center justify-center">
        {events.map((event) => (
          <div
            onClick={() => {
              setSelectedEventId(event._id);
              navigate(`/event/${event._id}`);
            }}
            className={`text-green-500 cursor-pointer ${
              event.active == true ? `border-green-400` : `border-gray-500`
            } border-[2px] p-4 rounded-md`}
          >
            <h2
              className={`font-semibold text-2xl ${
                event.active == true ? `text-green-400` : `text-gray-500`
              }`}
            >
              {event.title}
            </h2>
            <p className={`${event.active == true ? `text-green-400` : `text-gray-500`}`}>{event.description}</p>
            <img
              src={event.image}
              alt="event"
              className={`w-80 h-80 object-cover rounded-md mt-2 ${
                event.active == true ? `filter-none` : `filter grayscale`
              }`}
            />

            <div className={`mt-2 ${event.active == true ? `text-green-400` : `text-gray-500`}`}>
              <p className="flex items-center">
                <MdDateRange className="text-xl" /> {event.Date.split("T")[0]}
              </p>
              <p className="flex items-center">
                <CiLocationOn className="text-xl" /> {event.location}
              </p>
            </div>
          </div>
        ))}
        {events.length === 0 && (
          <h1 className="text-red-500">
            There are no upcoming events yet, but the team is cooking something
            👀
          </h1>
        )}
      </div>
    </div>
  );
};

export default Events;

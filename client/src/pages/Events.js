import React from "react";

const dummyEventData = [
    {
        title: "Event 1",
        description: "This is the first event",
        image: "https://aespontario.ca/wp-content/uploads/2023/02/events.jpg"
    },
    {
        title: "Event 2",
        description: "This is the second event",
        image: "https://aespontario.ca/wp-content/uploads/2023/02/events.jpg"
    },
    {
        title: "Event 3",
        description: "This is the third event",
        image: "https://aespontario.ca/wp-content/uploads/2023/02/events.jpg"
    }
]

const Events = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-10">
            <div>
                <h1 className="text-green-400 text-2xl font-bold">Events</h1>
            </div>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {dummyEventData.map(event => (
                    <div className="text-green-500 border-[2px] border-green-400 p-4 rounded-md">
                        <h2 className="font-semibold text-2xl">{event.title}</h2>
                        <p>{event.description}</p>
                        <img className="h-32 rounded-md" src={event.image} alt="event" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
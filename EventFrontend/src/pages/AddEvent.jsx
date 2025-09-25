import React, { useState } from "react";
import axios from "axios";
import config from "../components/config";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    venue: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${config.url}events/add`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMessage(res.data.message || "Event added successfully!");
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        venue: "",
        description: "",
      });
    } catch (err) {
      setMessage("Error adding event!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          Add Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Add Event
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center font-medium text-orange-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AddEvent;

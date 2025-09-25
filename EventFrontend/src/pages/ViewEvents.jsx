import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../components/config";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    venue: "",
    description: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${config.url}events/all`);
      setEvents(res.data);
    } catch {
      setEvents([]);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const res = await axios.delete(`${config.url}events/delete/${id}`);
        setMessage(res.data.message || "Event deleted successfully");
        fetchEvents();
      } catch {
        setMessage("Error deleting event");
      }
    }
  };

  const handleEdit = (event) => {
    setEditId(event.id);
    setFormData({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      venue: event.venue,
      description: event.description,
    });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${config.url}events/update/${editId}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage(res.data.message || "Event updated successfully");
      setFormData({ eventName: "", startDate: "", endDate: "", venue: "", description: "" });
      setEditId(null);
      fetchEvents();
    } catch {
      setMessage("Error updating event");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Events</h2>

      {message && (
        <p className="mb-4 text-center font-semibold text-orange-500">{message}</p>
      )}

      {/* Update Form */}
      {editId && (
        <form
          onSubmit={handleUpdate}
          className="bg-orange-50 p-6 rounded-lg shadow-md mb-6 max-w-lg mx-auto"
        >
          <h3 className="text-xl font-semibold text-orange-600 mb-4">
            Update Event (ID: {editId})
          </h3>
          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setEditId(null)}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Events Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Start</th>
              <th className="p-3">End</th>
              <th className="p-3">Venue</th>
              <th className="p-3">Description</th>
              <th className="p-3">Update</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No events available.
                </td>
              </tr>
            ) : (
              events.map((e) => (
                <tr
                  key={e.id}
                  className="border-b hover:bg-orange-50 transition"
                >
                  <td className="p-3 text-center">{e.id}</td>
                  <td className="p-3">{e.eventName}</td>
                  <td className="p-3 text-center">{e.startDate}</td>
                  <td className="p-3 text-center">{e.endDate}</td>
                  <td className="p-3">{e.venue}</td>
                  <td className="p-3">{e.description}</td>
                  <td className="p-3 text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                      onClick={() => handleEdit(e)}
                    >
                      Update
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEvents;

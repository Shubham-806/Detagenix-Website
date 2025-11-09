import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookingServiceForm = () => {
  const location = useLocation();
  const preselectedServiceId = location.state?.serviceId || "";
  const preselectedServiceName = location.state?.serviceName || "";
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    serviceType: preselectedServiceId,
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!form.name || !form.email || !form.serviceType) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/services/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Booking failed");

      setMessage("Service booked successfully!");
      setForm({ name: "", email: "", serviceType: preselectedServiceId });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
      />
      <select
        name="serviceType"
        value={form.serviceType}
        onChange={handleChange}
      >
        <option value="">Select Service</option>
        {preselectedServiceId && (
          <option value={preselectedServiceId}>{preselectedServiceName}</option>
        )}
        {services
          .filter((s) => s._id !== preselectedServiceId)
          .map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
      </select>
      <button type="submit">Book Service</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default BookingServiceForm;

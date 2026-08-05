import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = async  (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  

    } catch (error) {
      alert("Error sending message");
    }
  };
      const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://fullstackportfolio11-p283.vercel.app/contact",
      form
    );

    alert(res.data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error sending message");
  }
};const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://fullstackportfolio11-p283.vercel.app/contact",
      form
    );

    alert(res.data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error sending message");
  }
};const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://fullstackportfolio11-p283.vercel.app/contact",
      form
    );

    alert(res.data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error sending message");
  }
};const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://fullstackportfolio11-p283.vercel.app/contact",
      form
    );

    alert(res.data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error sending message");
  }
};const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://fullstackportfolio11-p283.vercel.app/contact",
      form
    );

    alert(res.data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error sending message");
  }
};const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://fullstackportfolio11-p283.vercel.app/contact",
      form
    );

    alert(res.data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error sending message");
  }
};});

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Write your message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
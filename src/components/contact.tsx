import { useState } from "react";
import { motion } from "framer-motion";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <div
      id="contact"
      className="contact bg-linear-to-b from-black via-black to-gray-800 pb-8 pt-16"
    >
      <motion.form
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onSubmit={(e) => {
          e.preventDefault();
          {
            console.log(form);
          }
        }}
        className="my-container text-center md:text-left px-6 md:px-0"
      >
        <h3 className="font-bold text-4xl border-b-4 border-gray-500 inline">
          Contat Us
        </h3>
        <p className="py-8!">Submit the form below to get in touch with me</p>
        <div className="form flex flex-col gap-4 md:w-120 mx-auto my-0 w-[90%]">
          <input
            className="border-2 border-white p-3 rounded-md"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            placeholder="Your Name..."
            type="text"
          />
          <input
            className="border-2 border-white p-3 rounded-md"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            type="email"
            placeholder="Your Email..."
          />
          <textarea
            className="border-2 border-white h-60 p-3 rounded-md"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            value={form.message}
            placeholder="Your Message..."
          ></textarea>
          <button className="button py-2 px-4 bg-linear-to-r from-cyan-500 to-blue-500 w-40 my-0 mx-auto">
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
}

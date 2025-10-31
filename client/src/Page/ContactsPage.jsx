// Contact.jsx
import  { useState } from "react";
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"

const ContactPage = () => {
   const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject:"",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ws4vbfq",
        "template_tmy4pxj",
        formData,
        "PSXkCey2URo15tNnm"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Thank you, ${formData.name}! Your message has been sent.`);
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
   
    <section className="py-16 bg-gray-500">
       <motion.div
        className="max-w-4xl mx-auto bg-white text-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions or want to plan your trip? Send us a message and we’ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
               onChange={(e) =>
                setFormData({ ...formData, user_name: e.target.value })
              }
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
               onChange={(e) =>
                setFormData({ ...formData, user_email: e.target.value })
              }
              placeholder="Email Address"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
               onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Subject"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            ></textarea>
        
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-md font-medium transition"
            >
              Send Message
            </motion.button>
              {isSent && (
              <p className="text-green-600 font-medium mt-3">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Office</h3>
              <p className="text-gray-600">RZ 2 & @A Ashok Park West Sagar Pur</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@travelandtours.com</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 9871047857</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <a href="https://www.facebook.com/" className="text-sky-600 hover:text-sky-800 font-medium">
                  Facebook
                </a>
                <a href="https://www.instagram.com/" className="text-sky-600 hover:text-sky-800 font-medium">
                  Instagram
                </a>
                <a href="https://www.twitter.com/" className="text-sky-600 hover:text-sky-800 font-medium">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import { ContactBackground, ContactImg } from "@/assets/images";

// Assets
import Layout from "@/components/Layout";

//Constants
import { contactDetails } from "@/constants";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Layout>
      <div className="wrapper">
        <div
          className="breadcrumb-area shadow dark bg-cover text-center text-light"
          style={{ backgroundImage: `url(${ContactBackground})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h1>Contact Us</h1>
                <ul className="breadcrumb">
                  <li>
                    <Link to="/">
                      <i className="fas fa-home"></i> Home
                    </Link>
                  </li>

                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-area default-padding">
          <div className="container">
            <div className="contact-content">
              <div className="shape">
                <img src={ContactImg} alt="illustration" />
              </div>
              <div className="row">
                <div className="col-lg-4 info">
                  <div className="content">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="info">
                          <h5>Our Email</h5>
                          <Link to="#">{contactDetails.email}</Link>
                          <br />
                          <Link to="/">{contactDetails.email}</Link>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info">
                          <h5>Address</h5>
                          <p>
                            22 Baker Street, <br /> London, United Kingdom,
                            <br /> W1U 3BW
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <i className="fas fa-headphones-alt"></i>
                        </div>
                        <div className="info">
                          <h5>Phone</h5>
                          <Link to="#">{contactDetails.phone}</Link> <br />
                          <Link to="#">{contactDetails.phone}</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 contact-form-box">
                  <div className="form-box">
                    <h2>Let's talk?</h2>
                    <p>
                      It's all about the humans behind a brand and those
                      experiencing it, br we're right there. <br /> In the
                      middle performance quick.
                    </p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              required
                              onChange={handleChange}
                              value={data.name}
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              required
                              onChange={handleChange}
                              value={data.email}
                              className="form-control"
                              name="email"
                              placeholder="Email*"
                              type="email"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              required
                              onChange={handleChange}
                              value={data.phone}
                              className="form-control"
                              name="phone"
                              placeholder="Phone"
                              type="number"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group comments">
                            <textarea
                              required
                              value={data.note}
                              onChange={handleChange}
                              className="form-control"
                              name="note"
                              placeholder="Tell Us About Project *"></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" name="submit">
                            Send Message
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

import axios from "axios";
import Field from "./Filed";

import { IoMdClose } from "react-icons/io";

const Modal = ({
  isModelOpen,
  setIsModelOpen,
  setContacts,
  editItem,
  setEditItem,
}) => {
  // Function to be executed when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ! Access the form using "FormData" structure provided by JavaScript
    const formData = new FormData(e.target);

    // ! Get the values from the form and convert them to an object using entries and "Object.fromEntries"
    const newContact = Object.fromEntries(formData.entries());

    try {
      if (!editItem) {
        // Send form data to the API to add a new contact
        const response = await axios.post("/contact", newContact);
        // ! To prevent losing previous data, use the "spread operator" to include new data
        setContacts((contacts) => [...contacts, response.data]);
      } else {
        // Update the contact data in the API with the edited item
        const response = await axios.put(`/contact/${editItem.id}`, newContact);
        setContacts((contacts) =>
          contacts.map((contact) =>
            contact.id === editItem.id ? response.data : contact
          )
        );
        setEditItem(null);
      }
      // Close the modal
      setIsModelOpen(() => false);
    } catch (err) {
      // Show a message to the user if an error occurs
      alert(`Operation could not be completed`);
      console.log(`Error: ${err}`);
    }
  };

  console.log(editItem);

  return (
    isModelOpen && (
      <div className="modal">
        <div className="modal-inner">
          {/* Modal Header */}
          <div className="modal-head">
            <h2>{editItem ? "Update Contact" : "Add New Contact"}</h2>
            <button onClick={() => setIsModelOpen(false)}>
              <IoMdClose />
            </button>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Field value={editItem?.name} label="Full Name" name="name" />
            <Field value={editItem?.positon} label="Position" name="positon" />
            <Field value={editItem?.company} label="Company" name="company" />
            <Field value={editItem?.phone} label="Phone" name="phone" />
            <Field value={editItem?.email} label="Email" name="email" />
            <div className="buttons" name="name">
              <button type="button" onClick={() => setIsModelOpen(false)}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;

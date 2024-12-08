import { useEffect, useState } from "react";
import axios from "axios";
// Icons Imports
import { RiSearchLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoPersonAdd } from "react-icons/io5";
// Components Import
import Card from "./components/Card";
import Modal from "./components/Modal";

// Setting up baseUrl with axios
axios.defaults.baseURL = "http://localhost:3000";
function App() {
  // Define state to manage data within the component
  const [contacts, setContacts] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // ! Fetch data from the API when the page loads
  useEffect(() => {
    axios.get("/contact").then((res) => setContacts(res.data));
  }, []);

  // ! Function to run when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the page from refreshing
    e.preventDefault();
    // Access the value in the input
    const text = e.target[1].value;

    // Define parameters to be sent to the API
    const params = {
      q: text,
    };

    // Fetch the relevant data from the API based on the input value
    axios.get("/contact", { params }).then((res) => setContacts(res.data));
  };

  // ! Function to delete the selected contact when the delete button is clicked
  const handleDelete = (id) => {
    const res = confirm("Are you sure you want to delete this contact?");

    if (res) {
      // Delete the user with the known id from the API
      axios
        .delete(`/contact/${id}`)
        .then(() => {
          // Remove the deleted contact from the state
          const updated = contacts.filter((contact) => contact.id !== id);
          setContacts(updated);
        })
        .catch((err) => {
          alert("An error occurred while deleting the contact!!");
          alert(err);
        });
    }
  };

  // ! Function to update the contact data when the edit icon is clicked
  const handleEdit = (contact) => {
    // Open the modal
    setIsModelOpen(true);

    // Transfer the contact to be edited to the state
    setEditItem(contact);
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>Contacts</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <button>
              <RiSearchLine />
            </button>
            <input type="text" placeholder="Search for a contact..." />
          </form>

          <button className="ns">
            <IoMenu />
          </button>
          <button className="ns">
            <HiMiniSquares2X2 />
          </button>

          <button onClick={() => setIsModelOpen(true)} className="add">
            <IoPersonAdd />
            <span>New Contact</span>
          </button>
        </div>
      </header>
      {/* Main */}
      <main>
        {contacts.map((contact) => (
          <Card
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </main>
      {/* Modal */}
      <Modal
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        setContacts={setContacts}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </div>
  );
}

export default App;

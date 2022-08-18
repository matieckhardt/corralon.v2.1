// import  { useState } from 'react'
// import { v4 as uuidv4  } from 'uuid';
// import EditableRow from './EditableRow';
// import ReadOnlyRow from './ReadOnlyRow';



// const CustomTable = () => {
//     const [contacts, setContacts] = useState(data);
//     const [addFormData, setAddFormData] = useState({
//       fullName: "",
//       address: "",
//       phoneNumber: "",
//       email: "",
//     });
  
//     const [editFormData, setEditFormData] = useState({
//       fullName: "",
//       address: "",
//       phoneNumber: "",
//       email: "",
//     });
  
//     const [editContactId, setEditContactId] = useState(null);
  
//     const handleAddFormChange = (event:any) => {
//       event.preventDefault();
  
//       const fieldName = event.target.getAttribute("name");
//       const fieldValue = event.target.value;
  
//       const newFormData = { ...addFormData };
//       newFormData[fieldName] = fieldValue;
  
//       setAddFormData(newFormData);
//     };
  
//     const handleEditFormChange = (event:any) => {
//       event.preventDefault();
  
//       const fieldName = event.target.getAttribute("name");
//       const fieldValue = event.target.value;
  
//       const newFormData = { ...editFormData };
//       newFormData[fieldName] = fieldValue;
  
//       setEditFormData(newFormData);
//     };
  
//     const handleAddFormSubmit = (event:any) => {
//       event.preventDefault();
  
//       const newContact = {
//         id: uuidv4(),
//         fullName: addFormData.fullName,
//         address: addFormData.address,
//         phoneNumber: addFormData.phoneNumber,
//         email: addFormData.email,
//       };
  
//       const newContacts = [...contacts, newContact];
//       setContacts(newContacts);
//     };
  
//     const handleEditFormSubmit = (event:any) => {
//       event.preventDefault();
  
//       const editedContact = {
//         id: editContactId,
//         fullName: editFormData.fullName,
//         address: editFormData.address,
//         phoneNumber: editFormData.phoneNumber,
//         email: editFormData.email,
//       };
  
//       const newContacts = [...contacts];
  
//       const index = contacts.findIndex((contact: any) => contact.id === editContactId);
  
//       newContacts[index] = editedContact;
  
//       setContacts(newContacts);
//       setEditContactId(null);
//     };
  
//     const handleEditClick = ({event, contact}:any) => {
//       event.preventDefault();
//       setEditContactId(contact.id);
  
//       const formValues = {
//         fullName: contact.fullName,
//         address: contact.address,
//         phoneNumber: contact.phoneNumber,
//         email: contact.email,
//       };
  
//       setEditFormData(formValues);
//     };
  
//     const handleCancelClick = () => {
//       setEditContactId(null);
//     };
  
//     const handleDeleteClick = (contactId: any) => {
//       const newContacts = [...contacts];
  
//       const index = contacts.findIndex((contact: any) => contact.id === contactId);
  
//       newContacts.splice(index, 1);
  
//       setContacts(newContacts);
//     };
  
//     return (
//       <div className="app-container">
//         <form onSubmit={handleEditFormSubmit}>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Address</th>
//                 <th>Phone Number</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact: any) => (
//                 <>
//                   {editContactId === contact.id ? (
//                     <EditableRow
//                       editFormData={editFormData}
//                       handleEditFormChange={handleEditFormChange}
//                       handleCancelClick={handleCancelClick}
//                     />
//                   ) : (
//                     <ReadOnlyRow
//                       contact={contact}
//                       handleEditClick={handleEditClick}
//                       handleDeleteClick={handleDeleteClick}
//                     />
//                   )}
//                 </>
//               ))}
//             </tbody>
//           </table>
//         </form>
  
//         <h2>Add a Contact</h2>
//         <form onSubmit={handleAddFormSubmit}>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Enter a name..."
//             onChange={handleAddFormChange}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter an addres..."
//             onChange={handleAddFormChange}
//           />
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Enter a phone number..."
//             onChange={handleAddFormChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter an email..."
//             onChange={handleAddFormChange}
//           />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   };

// export default CustomTable

import React from 'react'

export const CustomTable = () => {
  return (
    <div>CustomTable</div>
  )
}

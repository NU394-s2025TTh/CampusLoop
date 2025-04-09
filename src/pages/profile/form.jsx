import './form.css';

export default function Form(){

  function handleSubmit(FormData){
    console.log("Form Submitted!")
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="eventName" placeholder="Event Name" required />
      <textarea name="description" placeholder="Description" required></textarea>
      <input type="url" name="linkToTicket" placeholder="Link to Tickets" required />
      <input type="file" name="image" required />
      <input type="date" name="date" required />
      <input type="time" name="time" required />
      <input type="text" name="location" placeholder="Location" required />
      <button type="submit">Submit Event</button>
    </form>
);
}
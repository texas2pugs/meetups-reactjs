import NewMeetupForm from '../components/meetups/NewMeetupForm.js';

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch('https://meetups-reactjs-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

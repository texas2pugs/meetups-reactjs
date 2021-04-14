import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Hill top meetup',
    image:
      'https://i.pinimg.com/originals/f1/17/a4/f117a4bfe2db2c3b8c529e0b8e169d65.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      "This hill will take hours to hike.  Let's meetup at the top!!",
  },
  {
    id: 'm2',
    title: "Let's get lost in a forest",
    image: 'https://wallpaperaccess.com/full/36322.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      "Who's up for getting lost?? This forest has everything from winding trails and mismarked paths. Perfect for getting lost!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;

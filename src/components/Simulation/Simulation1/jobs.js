// Define an array of job objects
const jobs = [
	{
	  title: 'Babysitter',
	  description: 'Most work involves watching the kids, keeping them safe, playing with them and having them in bed by their bedtime. The average pay for babysitting is $11.57 per hour.',
	  image: 'https://via.placeholder.com/150', // Placeholder image URL
	  pay: 11.57,
	},
	{
	  title: 'Food Service',
	  description: 'Jobs in this industry require multitasking, good communication, and stamina.',
	  image: 'https://via.placeholder.com/150', // Placeholder image URL
	  pay: (Math.random() * (14.66 - 8.55) + 8.55).toFixed(2),
	},
	{
	  title: 'Cashier or Retail',
	  description: 'Tasks include checking people out and bagging their items. Cashiers should have good etiquette, product knowledge, and problem-solving skills.',
	  image: 'https://via.placeholder.com/150', // Placeholder image URL
	  pay: 10.78,
	},
	{
	  title: 'Tutoring',
	  description: 'Tutors should be adept at teaching others, have good time management skills, and be empathetic.',
	  image: 'https://via.placeholder.com/150', // Placeholder image URL
	  pay: (Math.random() * (30.25 - 8.55) + 8.55).toFixed(2), // Temporary Range
	},
	{
	  title: 'Lifeguard',
	  description: 'Lifeguards are responsible for keeping people safe in lakes, ponds, beaches, etc. A CPR/lifeguard certification is required.',
	  image: 'https://via.placeholder.com/150', // Placeholder image URL
	  pay: 10.77,
	},
  ];

export default jobs;
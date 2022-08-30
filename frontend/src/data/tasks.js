const tasks = [
  {
    name: 'Agnus MacGyver',
    email: 'agnus@gmail.com',
    profile_image: '',
    labels: ['Read', 'Coding', 'Workout', 'Django'],
    task: [
      {
        _id: '1',
        name: 'Go to gym',
        status: 'notstarted',
        labels: ['Read', 'Coding', 'Workout', 'Django'],
        start_date: '1 feb 2023',
      },
      {
        _id: '2',
        name: 'Play Football',
        status: 'inprogress',
        labels: ['Read', 'Coding', 'Workout', 'Django'],
        progress: 45,
        start_date: '1 feb 2023',
      },
      {
        _id: '3',
        name: 'Programming',
        status: 'complete',
        labels: ['Read', 'Coding', 'Workout', 'Django'],
        start_date: '1 feb 2023',
        complete_date: '21 feb 2023',
        is_like: true,
      },
      {
        _id: '4',
        name: 'Data structures and algorithm',
        status: 'notstarted',
        labels: ['Read', 'Coding', 'Workout', 'Django'],
        start_date: '1 feb 2023',
      },
      {
        _id: '5',
        name: 'Gaming',
        status: 'notstarted',
        labels: ['Read', 'Coding', 'Workout', 'Django'],
        start_date: '1 feb 2023',
      },
      {
        _id: '6',
        name: 'Web Developement',
        status: 'inprogress',
        labels: ['Read', 'Coding', 'Workout', 'Django'],
        progress: 60,
        start_date: '1 feb 2023',
      },
    ],
  },
];

export default tasks;

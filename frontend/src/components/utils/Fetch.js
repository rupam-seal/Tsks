import tasks from '../../data/tasks';

export const FilterTask = (status) => {
  const task = tasks[0].task.filter((task) => task.status === status);
  return task;
};

export const Labels = () => {
  const labels = tasks[0].labels;
  return labels;
};

export const UserInfo = (value) => {
  return value === 'name'
    ? tasks[0].name
    : value === 'email'
    ? tasks[0].email
    : value === 'profile_image'
    ? tasks[0].profile_image
    : '';
};

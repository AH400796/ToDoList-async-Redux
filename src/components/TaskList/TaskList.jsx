import Task from 'components/Task';
import { useSelector } from 'react-redux';
import { List, ListItem } from './TaskList.styled';
import { selectcVisibleTasks } from 'redux/selectors';

export default function TaskList() {
  const visibleTasks = useSelector(selectcVisibleTasks);

  return (
    <List>
      {visibleTasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
}

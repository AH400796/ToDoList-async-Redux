import { useSelector } from 'react-redux';
import { Text } from './TaskCounter.styled';
import { selectTaskCount } from 'redux/selectors';

export default function TaskCounter() {
  const count = useSelector(selectTaskCount);
  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
}

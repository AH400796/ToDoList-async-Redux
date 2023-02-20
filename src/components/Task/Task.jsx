import { MdClose } from 'react-icons/md';
import { Wrapper, Text, Checkbox, ButtonStyled } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux//tasksSlice';

export default function Task({ task }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <ButtonStyled type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </ButtonStyled>
    </Wrapper>
  );
}

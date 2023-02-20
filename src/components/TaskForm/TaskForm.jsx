import Button from 'components/Button';
import { FormStyled, Field } from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasksSlice';

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </FormStyled>
  );
}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import Layout from 'components/Layout';
import AppBar from 'components/AppBar';
import TaskForm from 'components/TaskForm';
import TaskList from 'components/TaskList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <p>Request in progress...</p>}
      <TaskList />
    </Layout>
  );
};

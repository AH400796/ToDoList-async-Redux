import Button from 'components/Button';
import { Wrapper } from './StatusFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/filtersSlice';

export default function StatusFilter() {
  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
}

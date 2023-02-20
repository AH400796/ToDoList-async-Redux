import StatusFilter from 'components/StatusFilter';
import TaskCounter from 'components/TaskCounter';
import { Header, Section, Title } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Header>
  );
}

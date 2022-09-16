import { AiFillLike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { useToggle } from '../../hooks/useToggle';

const Completed = ({ task }) => {
  const completedDate = task.complete_date;

  const { status: isLike, toggleStatus: toggleLike } = useToggle();

  return (
    <div className="completed">
      <div className="completed__left">
        <Text>Complete</Text>
        <CompleteDate>{completedDate}</CompleteDate>
      </div>
      <div className="completed__like" onClick={toggleLike}>
        {isLike ? <AiFillLike /> : <AiOutlineLike />}
      </div>
    </div>
  );
};

export const Text = ({ children }) => {
  return <div className="completed__text">{children}</div>;
};

export const CompleteDate = ({ children }) => {
  return <div className="completed__date">{children}</div>;
};

export default Completed;

import LoadMoreBtn from './Button.styled';

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

export default Button;

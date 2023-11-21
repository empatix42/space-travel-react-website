import './Heading.css';

const Heading = ({ number, text }) => {
  return (
    <h5 className='page-heading'>
      <span>{number}</span>
      {'  '}
      {text}
    </h5>
  );
};

export default Heading;

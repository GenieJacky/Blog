import "assets/css/components/Pagination.css";

export const Pagination = () => {
  return (
    <div className='pagination-root'>
      <div className='pagination-detail'>
        <i className='fas fa-file-alt'></i>
        Page 1 of 7
      </div>
      <div className='pagination-btns'>
        <div className='pagination-btn'>1</div>
        <div className='pagination-btn active'>2</div>
        <div className='pagination-btn'>...</div>
        <div className='pagination-btn'>7</div>
        <div className='pagination-btn'>&gt;&gt;</div>
        <div className='pagination-btn'>All Post</div>
      </div>
    </div>
  );
};

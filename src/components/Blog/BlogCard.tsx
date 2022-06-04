import "assets/css/components/blog/BlogCard.css";
import blogcardImg from "assets/images/blogcard-imag.svg";

export const BlogCard = () => {
  return (
    <div className='blogcard'>
      <img src={blogcardImg} className='blogcard-img' />
      <div className='blogcard-description'>
        <div className='blogcard-header'>
          <i className='fas fa-address-book'></i>
          How to ...
        </div>
        <div className='blogcard-links'>
          <li className='blogcard-link'>Find owner by phone &gt;</li>
          <li className='blogcard-link'>Check some info &gt;</li>
          <li className='blogcard-link'>Find number by name &gt;</li>
        </div>
      </div>
    </div>
  );
};

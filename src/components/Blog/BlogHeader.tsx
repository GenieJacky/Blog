import "assets/css/components/blog/BlogHeader.css";
import headerIcon from "assets/images/blog-header-icon.svg";

export const BlogHeader = () => {
  return (
    <div className='blogheader-root'>
      <img src={headerIcon} className='blogheader-icon' alt='blogheadericon' />
      <div className='blogheader-title'>PHONE NUMBERS.ORG BLOG</div>
    </div>
  );
};

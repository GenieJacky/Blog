import "assets/css/pages/Blog.css";
import { BlogCard } from "components/Blog/BlogCard";
import { BlogHeader } from "components/Blog/BlogHeader";
import { Breadcrumbs } from "components/Base/Breadcrumbs/Breadcrumbs";
import { NewsItem } from "components/Blog/NewsItem";
import { Pagination } from "components/Base/Pagination/Pagination";

import newsImg1 from "assets/images/News/1.svg";
import newsImg2 from "assets/images/News/2.svg";
import newsImg3 from "assets/images/News/3.svg";
import { UpBtn } from "components/Base/UpBtn";

export const Blog = () => {
  return (
    <>
      <div className='blog-root'>
        <BlogHeader />
        <div className='blog-content-root'>
          <div className='blog-content-title'>
            Federal, State, and Local Government Agencies and Elected Officials
            Information
          </div>
          <Breadcrumbs />
          <BlogCard />
          <div className='blog-content-news'>
            <NewsItem img={newsImg1} className='mr-top-32' />
            <NewsItem img={newsImg2} className='mr-top-32' nodata />
            <NewsItem img={newsImg1} className='mr-top-32' />
          </div>
          <div className='blog-content-pagination'>
            <Pagination />
          </div>
          <UpBtn />
        </div>
      </div>
      <div className='blog-gradient'></div>
    </>
  );
};

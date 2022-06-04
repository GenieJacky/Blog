import "assets/css/components/blog/NewsItem.css";

interface NewsItemProps {
  className?: string;
  img: any;
  nodata?: boolean;
}

export const NewsItem = ({ className, img, nodata }: NewsItemProps) => {
  return (
    <div className={`newsitem-root ${className}`}>
      <img src={img} className='newsitem-img' alt='newsitemicon' />
      <div className='newsitem-description'>
        <div className='newsitem-description-title'>
          Why Am I Getting So Many Spam Calls?
        </div>
        {nodata ? (
          <></>
        ) : (
          <div className='newsitem-description-detail'>
            Finding contact information for a federal department or agency is a
            top task at USA.gov and USAGov en Español. Our A-Z Index of U.S.
            Government Departments ...
          </div>
        )}
      </div>
    </div>
  );
};

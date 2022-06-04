import "assets/css/components/Breadcrumbs.css";

export const Breadcrumbs = () => {
  return (
    <div className='breadcrumbs-root'>
      <div className='breadcrumbs-home'>
        <div className='breadcrumbs-home-title'>Phone Number Lookup</div>
        <i className='fas fa-caret-right'></i>
      </div>
      <div className='breadcrumbs-blog'>
        Why Am I Getting So Many Spam Calls?
      </div>
    </div>
  );
};

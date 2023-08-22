import './Skeleton.css'; // Import CSS file for styling

const SkeletonLoader = ({width,height,border}) => {
  return (
    <div className="skeleton-loader" style={{width:width,height:height,borderRadius:border}}>
      <div className="skeleton-loader__content"></div>
    </div>
  );
};

export default SkeletonLoader;

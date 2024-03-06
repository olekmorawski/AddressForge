function FeatureBox({
  title,
  description,
  srcIcon,
}: {
  title: string;
  description: string;
  srcIcon: string;
}) {
  return (
    <div className="feature_box">
      <div className="feature_icon">
        <img src={srcIcon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureBox;

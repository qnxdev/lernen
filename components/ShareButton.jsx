const ShareButton = ({ name, link, color }) => {
  return (
    <a
      className="w100 tc share-btn"
      target="_blank"
      href={link}
      style={{ backgroundColor: color }}
    >
      Share on {name}
    </a>
  );
};

export default ShareButton;

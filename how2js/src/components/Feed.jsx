
import '../styles/Feed.css';

class FeedItem {
  constructor(name) {
    this.name = name;
  }
}

function Feed() {
  const items = [];

  items.push(new FeedItem("salut"));
  items.unshift(new FeedItem("haha"));
  items.push(new FeedItem("hihi"));
  items.pop();
  items.push(new FeedItem("zefuizefiu"));

  return (
    <div className="feed">
      <p>This is the main feed</p>
      {items.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
}

export default Feed

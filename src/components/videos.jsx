import React from 'react';
import { Player } from 'video-react';
import InfiniteScroll from 'react-infinite-scroll-component';

export class Videos extends React.Component {
  constructor() {
    super();
    this.state = { videos: [], allVideos: [], total: 0, loaded: 0 };
  }

  async componentDidMount() {
    const videosResp = await fetch(
      'https://www.masters.com/relatedcontent/rest/v2/masters_2019/en/content/byType/video'
    );
    const videos = await videosResp.json();
    const total = videos.content.length;
    const loaded = 5 < total ? 5 : total;
    this.setState({
      allVideos: videos.content,
      videos: videos.content.slice(0, loaded),
      total,
      loaded
    });
  }

  render() {
    const { videos, loaded, total } = this.state;

    return videos.map(video => {
      return (
        <InfiniteScroll
          style={{ overflow: 'none' }}
          next={this.addVideos}
          hasMore={loaded < total}
        >
          <div className='d-flex flex-column my-3'>
            <div className='h5'>{video.title}</div>
            <Player playsInline src={video.media.mp4} />
          </div>
        </InfiniteScroll>
      );
    });
  }

  addVideos = () => {
    const { allVideos, loaded, total } = this.state;

    this.setState({
      videos: allVideos.slice(0, loaded),
      loaded: loaded + 5 >= total ? total : loaded + 5
    });
  };
}

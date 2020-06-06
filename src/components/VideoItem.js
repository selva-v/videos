import React from 'react';

const VideoItem = ({ video, onSelect }) => {
  return (
    <div onClick={() => onSelect(video)} className="video-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
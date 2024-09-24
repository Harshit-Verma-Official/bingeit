import { RouteObject } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

export const VIDEO_PLAYER_ROUTE: RouteObject = {
  path: '/play',
  element: <VideoPlayer />,
};

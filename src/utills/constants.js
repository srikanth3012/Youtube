const Youtube_key = "AIzaSyBfwfV0YPleZOddjX76sk8Lo2cSMiWn9ZU  ";
//AIzaSyDVwTEFLIzMUEzehFsX4-ueYe3qprypT3U
//AIzaSyBfwfV0YPleZOddjX76sk8Lo2cSMiWn9ZU
export const Youtubedata =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` +
  Youtube_key;

export const Youtube_Search =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const Comments_data =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&key=" +
  Youtube_key;
export const Suggestion_videos =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  Youtube_key;
export const video_info =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Youtube_key;
export const Histriy_video_api =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key=" +
  Youtube_key;
export const SEARCH_RESULTS_API =
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=` +
  Youtube_key;

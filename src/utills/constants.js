const Youtube_key = "AIzaSyBkl86Sf63PIBoFuCLEpEvv5aM2U2l8cFk";
export const Youtubedata =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` +
  Youtube_key;

export const Youtube_Search =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const Comments_data =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=`" +
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

import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const RepliesCard = ({ data }) => {
  const [replies, setReplies] = useState(false);
  return (
    <div className="flex m-2 rounded-lg">
      {!data.snippet.authorProfileImageUrl ? (
        <CgProfile className="w-10 h-10 m-1 rounded-full" />
      ) : (
        <img
          alt="logouser"
          className="h-10  w-10 rounded-full m-1"
          src={data.snippet.authorProfileImageUrl}
        />
      )}

      <div className="pl-2 pb-1">
        <p className="text-sm font-semibold">
          @{data.snippet.authorDisplayName}
        </p>
        <p className="text-sm">{data.snippet.textOriginal}</p>
        {!data.replies ? null : (
          <div>
            <button
              className="text-blue-600"
              onClick={() => {
                !replies ? setReplies(true) : setReplies(false);
              }}
            >
              replies
            </button>
            {!replies ? null : <Replies data={data.replies.comments} />}
          </div>
        )}
      </div>
    </div>
  );
};
const Replies = ({ data }) => {
  return data.map((item) => <RepliesCard key={item} data={item} />);
};

const CommentCard = ({ data }) => {
  const [replies, setReplies] = useState(false);
  return (
    <div className="flex m-2 rounded-lg">
      {!data.snippet.topLevelComment.snippet.authorProfileImageUrl ? (
        <CgProfile className="w-10 h-10 m-1 rounded-full" />
      ) : (
        <img
          alt="logouser"
          className="h-10  w-10 rounded-full m-1"
          src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}
        />
      )}

      <div className="pl-2 pb-1">
        <p className="text-sm font-semibold">
          @{data.snippet.topLevelComment.snippet.authorDisplayName}
        </p>
        <p className="text-sm w-[700px]">
          {data.snippet.topLevelComment.snippet.textOriginal}
        </p>
        {!data.replies ? null : (
          <div>
            <button
              className="text-blue-600"
              onClick={() => {
                !replies ? setReplies(true) : setReplies(false);
              }}
            >
              replies
            </button>
            {!replies ? null : <Replies data={data.replies.comments} />}
          </div>
        )}
      </div>
    </div>
  );
};
const MCommentCard = ({ videoKey }) => {
  const apiKey = "AIzaSyB6HtuqTUCr-Q6gLlT3Do1Ea_K1QagWlzY";
  const videoId = videoKey;
  const [commentData, setCommentData] = useState();

  useEffect(() => {
    youtubeData();
  }, []);

  const youtubeData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&key=${apiKey}&videoId=${videoId}`
    );
    const json = await data.json();
    setCommentData(json.items);
    console.log(json);
    console.log("json");
  };
  return !commentData
    ? null
    : commentData.map((item) => <CommentCard key={item} data={item} />);
};
export default MCommentCard;

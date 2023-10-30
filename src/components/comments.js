import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDislike, AiOutlineLike, AiOutlineFlag } from "react-icons/ai";
import { Comments_data } from "../utills/constants";

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
        <div className=" pt-1  flex  rounded-l-3xl  h-8 text-sm items-center m-2">
          <AiOutlineLike className="w-10 h-6" />
          <h1 className="text-xs">123</h1>
          <h1 className="text-xs pl-2">|</h1>
          <div className="shadow-gray-900 mt-0.5">
            <AiOutlineDislike className="w-10 h-6 transform scale-x-[-1] " />
          </div>
          <h1 className="text-xs pl-2 text-blue-900">Reply</h1>
        </div>

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
const MCommentCard = ({ search }) => {
  const [commentData, setCommentData] = useState();
  useEffect(() => {
    youtubeData();
  }, [search]);

  const youtubeData = async () => {
    const data = await fetch(Comments_data + `&videoId=${search}`);
    const json = await data.json();
    setCommentData(json.items);
  };
  return !commentData ? null : (
    <>
      <h1 className="text-lg font-bold">{commentData.length} Comments:</h1>
      <div className="flex mt-8 mb-8">
        <CgProfile className="w-16 h-8" />{" "}
        <input
          className=" border border-b-4 w-[800px]"
          type="text"
          value="Add a comment"
        />
      </div>
      {commentData.map((item) => (
        <CommentCard key={item.id} data={item} />
      ))}
    </>
  );
};
export default MCommentCard;

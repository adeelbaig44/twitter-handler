import tweetListStyles from "../styles/TweetsList.module.css";
import TweetItem from "./TweetItem";
import { Center } from "@chakra-ui/layout";

const TweetsList = ({ user, tweets }) => {
  return (
    <div className={tweetListStyles.container}>
      {tweets?.map((item, index) => (
        <TweetItem user={user} tweet={item} key={index} />
      ))}
    </div>
  );
};

export default TweetsList;

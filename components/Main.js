import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import bodyStyle from "../styles/Body.module.css";
import { useState } from "react";
import TweetsList from "./TweetsList";
import { useToast } from "@chakra-ui/react";

const Body = () => {
  const toast = useToast();
  const [handle, setHandle] = useState("");
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`/api/twitter/users`, {
      method: "post",
      body: JSON.stringify({
        handle,
      }),
    });
    const userData = await res.json();
    if (!userData.data) {
      toast({
        title: "Not found",
        description: "@handle not found!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const res2 = await fetch(`/api/twitter/tweets`, {
        method: "post",
        body: JSON.stringify({
          id: userData.data.id,
        }),
      });
      const tweetsData = await res2.json();
      if (!tweetsData.data) {
        toast({
          title: "Not found",
          description: "Tweets not found!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setUser(userData.data);
        setTweets(tweetsData.data);
      }
    }
  };

  return (
    <div className={bodyStyle.container}>
      <div className={bodyStyle.flexContainer}>
        <Input
          placeholder="@handle"
          htmlSize={40}
          className={bodyStyle.input}
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <TweetsList user={user} tweets={tweets} />
    </div>
  );
};

export default Body;

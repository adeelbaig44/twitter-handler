import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

const TweetItem = ({ user, tweet }) => {
  return (
    <Box p="5" mt="10" maxW="400px" borderWidth="1px">
      <Text fontSize="sm" fontWeight="bold" color="blue.800">
        {user.name}
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="gray">
        @{user.username}
      </Text>
      <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short">
        {tweet.text}
      </Text>
    </Box>
  );
};

export default TweetItem;

import axios from "axios";

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const { id } = body;
    var config = {
      method: "get",
      url: `https://api.twitter.com/2/users/${id}/tweets`,
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        Cookie:
          'guest_id=v1%3A164725308273747456; guest_id_ads=v1%3A164725308273747456; guest_id_marketing=v1%3A164725308273747456; personalization_id="v1_yCRQUhGIpMhlHijbPBjxiw=="',
      },
    };

    let tweets = await axios(config);
    res.status(200).json({ data: tweets.data.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

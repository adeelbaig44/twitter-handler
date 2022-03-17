import axios from "axios";

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const { handle } = body;
    var config = {
      method: "get",
      url: `https://api.twitter.com/2/users/by/username/${handle}`,
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        Cookie:
          'guest_id=v1%3A164725308273747456; guest_id_ads=v1%3A164725308273747456; guest_id_marketing=v1%3A164725308273747456; personalization_id="v1_yCRQUhGIpMhlHijbPBjxiw=="',
      },
    };

    let user = await axios(config);
    res.status(200).json({ data: user.data.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

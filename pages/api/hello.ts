import type { NextApiRequest, NextApiResponse } from "next";

type Text = {
  text: string;
};

export default (_: NextApiRequest, res: NextApiResponse<Text>) => {
  res.status(200).json({ text: "Hello" });
};

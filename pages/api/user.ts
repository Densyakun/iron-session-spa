import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { NextApiRequest, NextApiResponse } from "next";

export type User = {
  isLoggedIn: boolean;
  loginPasswordIsExist: boolean;
};

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (!process.env.LOGIN_PASSWORD) {
    res.json({
      isLoggedIn: true,
      loginPasswordIsExist: false,
    });
  } else if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true,
      loginPasswordIsExist: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      loginPasswordIsExist: true,
    });
  }
}

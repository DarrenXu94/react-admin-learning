import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://api.football-data.org/v2//competitions",
    (req, res, ctx) => {
      return res(
        ctx.json({
          competitions: [{ title: "Test", id: 1 }],
          count: 1,
        })
      );
    }
  ),
];

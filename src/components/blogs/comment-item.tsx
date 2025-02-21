"use client";

import { FC } from "react";
import { Comments } from "@/types/posts";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface IProps {
  index: number;
  comment: Comments;
}
const CommentItem: FC<IProps> = ({ comment, index }) => {
  dayjs.extend(relativeTime);
  return (
    <ListItem sx={{ padding: "8px", display: "block", width: "100%" }}>
      <div className="flex justify-start">
        <ListItemAvatar className="flex items-start gap-2 text-gray-500">
          <Avatar alt={String(index)} src={"/avatar.svg"} />
        </ListItemAvatar>
        <div className="grid mt-2 gap-2">
          <div className="flex gap-2 items-baseline">
            <Typography variant="subtitle1">{comment.updatedBy}</Typography>
            <Typography variant="subtitle2">
              {dayjs(comment.updatedAt).fromNow()}
            </Typography>
          </div>
          <ListItemText
            secondary={
              <Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    display: "inline",
                  }}
                >
                  {comment.message}
                </Typography>
              </Fragment>
            }
          />
        </div>
      </div>
    </ListItem>
  );
};

export default CommentItem;

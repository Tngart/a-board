"use client";

import { FC } from "react";
import { MessageProps } from "@/app/types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { FaRegComment } from "react-icons/fa";
import { Fragment } from "react";
import { highlightText, SetToLabel } from "@/app/helpers";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
interface IProps {
  post: MessageProps;
  topicFiltered?: string;
  isPostDetail?: boolean;
}
const PostItem: FC<IProps> = ({ isPostDetail, post, topicFiltered }) => {
  const { _id, comments, community, description, topic, userInfo, updatedAt } =
    post;
  dayjs.extend(relativeTime);

  return (
    <ListItem sx={{ padding: "20px", display: "block", width: "100%" }}>
      <ListItemAvatar className="flex items-center gap-2 text-gray-500">
        <Avatar alt={userInfo._id} src={"/avatar.svg"} />
        <Typography variant="subtitle1">{userInfo.username}</Typography>
        <Typography variant="subtitle2">
          {dayjs(updatedAt).fromNow()}
        </Typography>
      </ListItemAvatar>
      <Chip
        size="small"
        label={SetToLabel(community)}
        sx={{ marginTop: "10px", fontSize: "10px" }}
      />
      <ListItemText
        primary={
          isPostDetail ? (
            <div className="mb-4">
              <Typography variant="h3">{topic}</Typography>
            </div>
          ) : (
            <Link href={`/homepage/${_id}`}>
              <Typography variant="h6">
                {highlightText(topic, topicFiltered)}
              </Typography>
            </Link>
          )
        }
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
              {description}
            </Typography>
          </Fragment>
        }
      />

      {isPostDetail ? (
        <p
          className="flex items-center gap-2 mt-6"
          style={{
            color: "gray",
            fontWeight: 400,
            fontSize: "12px",
          }}
        >
          <FaRegComment fontSize="12px" />
          {comments?.length} Comments
        </p>
      ) : (
        <Link
          href={`/homepage/${_id}`}
          style={{ color: "gray", fontWeight: 400, fontSize: "12px" }}
        >
          <div className="flex items-center gap-2">
            <FaRegComment fontSize="12px" />
            {comments?.length} Comments
          </div>
        </Link>
      )}
    </ListItem>
  );
};

export default PostItem;

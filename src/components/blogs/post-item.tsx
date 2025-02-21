"use client";

import { FC } from "react";
import { PostDataResponse } from "@/app/types/posts";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Chip, IconButton, useTheme } from "@mui/material";
import { FaRegComment } from "react-icons/fa";
import { Fragment } from "react";
import { highlightText, SetToLabel } from "@/app/helpers";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { usePostStore } from "@/store/posts";
interface IProps {
  post?: PostDataResponse;
  titleFiltered?: string;
  isPostDetail?: boolean;
  isEditable?: boolean;
}

dayjs.extend(relativeTime);

const PostItem: FC<IProps> = ({
  isPostDetail,
  post,
  titleFiltered,
  isEditable,
}) => {
  const theme = useTheme();
  const { SetOpenDeleteDialog, SetOpenUpdateDialog } = usePostStore();
  const { _id, comments, community, description, title, userInfo, createdAt } =
    post || {};

  const handleOpenEditDialog = () => {
    if (!post) return;
    SetOpenUpdateDialog(post);
  };

  const handleOpenDeleteDialog = () => {
    if (!_id) return;
    SetOpenDeleteDialog(_id);
  };

  return (
    <>
      <ListItem sx={{ padding: "20px", display: "block", width: "100%" }}>
        <ListItemAvatar className="flex justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Avatar alt={userInfo?._id} src={"/avatar.svg"} />
            <Typography variant="subtitle1">{userInfo?.username}</Typography>
            {isPostDetail && (
              <Typography variant="subtitle2">
                {dayjs(createdAt).fromNow()}
              </Typography>
            )}
          </div>
          <div hidden={!isEditable}>
            <IconButton
              onClick={handleOpenEditDialog}
              color="primary"
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontSize: "16px",
              }}
            >
              <FiEdit3 color={theme.palette.primary.main} />
            </IconButton>
            <IconButton
              onClick={handleOpenDeleteDialog}
              color="primary"
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontSize: "16px",
              }}
            >
              <FiTrash2 />
            </IconButton>
          </div>
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
                <Typography variant="h3">{title}</Typography>
              </div>
            ) : (
              <Link href={`/homepage/${_id}`}>
                <Typography variant="h6">
                  {highlightText(title, titleFiltered)}
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
    </>
  );
};

export default PostItem;

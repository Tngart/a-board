"use client";
import List from "@mui/material/List";
import { FC, Fragment } from "react";
import { Comments } from "../../app/types";
import CommentItem from "./comment-item";

interface IProps {
  comments?: Comments[];
}
const CommentList: FC<IProps> = ({ comments }) => {
  return (
    <div className="p-[16px]">
      <List>
        {comments?.map((comment, index) => (
          <Fragment key={index}>
            <CommentItem comment={comment} index={index} />
          </Fragment>
        ))}
      </List>
    </div>
  );
};

export default CommentList;

import { FC } from "react";
import { MessageProps } from "@/app/types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Chip, ListItemIcon } from "@mui/material";
import { FaRegComment } from "react-icons/fa";
import { Fragment } from "react";
import { SetToLabel } from "@/app/helpers";

const PostItem: FC<MessageProps> = ({
  username,
  type,
  avatarAlt,
  primaryText,
  secondaryText,
  secondaryUser,
}) => (
  <ListItem sx={{ padding: "20px 20px", display: "block", width: "100%" }}>
    <ListItemAvatar className="flex items-center gap-2 text-gray-500">
      <Avatar alt={avatarAlt} src={"/avatar.svg"} />
      <Typography variant="body2">{username}</Typography>
    </ListItemAvatar>
    <ListItemIcon>
      <Chip
        label={SetToLabel(type)}
        sx={{ marginTop: "10px", fontSize: "10px" }}
      />
    </ListItemIcon>
    <ListItemText
      sx={{ padding: 0 }}
      primary={<Typography variant="h6">{primaryText}</Typography>}
      secondary={
        <Fragment>
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "text.primary", display: "inline" }}
          >
            {secondaryUser}
          </Typography>
          {` — ${secondaryText}`}
        </Fragment>
      }
    />
    <Button
      size="small"
      disableRipple
      sx={{ color: "gray", fontWeight: 400, fontSize: "12px" }}
    >
      <div className="flex items-center gap-2">
        <FaRegComment fontSize="12px" />
        32 Comments
      </div>
    </Button>
  </ListItem>
);

export default PostItem;

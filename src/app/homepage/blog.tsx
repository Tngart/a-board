import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Chip, ListItemIcon } from "@mui/material";
import { FaRegComment } from "react-icons/fa";

interface MessageProps {
  avatarSrc: string;
  avatarAlt: string;
  primaryText: string;
  secondaryText: string;
  secondaryUser: string;
  type: string;
  username: string;
}

const MessageItem: React.FC<MessageProps> = ({
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
      <Chip label={type} sx={{ marginTop: "10px", fontSize: "10px" }} />
    </ListItemIcon>
    <ListItemText
      sx={{ padding: 0 }}
      primary={<Typography variant="h6">{primaryText}</Typography>}
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            sx={{ color: "text.primary", display: "inline" }}
          >
            {secondaryUser}
          </Typography>
          {` — ${secondaryText}`}
        </React.Fragment>
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

const messages = [
  {
    avatarSrc: "/static/images/avatar/1.jpg",
    avatarAlt: "Remy Sharp",
    primaryText: "Brunch this weekend?",
    secondaryText: "I'll be in your neighborhood doing errands this…",
    secondaryUser: "Ali Connors",
    type: "History",
    username: "Remy Sharp",
  },
  {
    avatarSrc: "/static/images/avatar/2.jpg",
    avatarAlt: "Travis Howard",
    primaryText: "Summer BBQ",
    secondaryText: "Wish I could come, but I'm out of town this…",
    secondaryUser: "to Scott, Alex, Jennifer",
    type: "Exercise",
    username: "Travis Howard",
  },
  {
    avatarSrc: "/static/images/avatar/3.jpg",
    avatarAlt: "Cindy Baker",
    primaryText: "Oui Oui",
    secondaryText: "Do you have Paris recommendations? Have you ever…",
    type: "Food",
    secondaryUser: "Sandra Adams",
    username: "Cindy Baker",
  },
];

export default function AlignItemsList() {
  return (
    <div className="p-[16px]">
      <List
        sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "8px" }}
      >
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <MessageItem {...message} />
            {index < messages.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

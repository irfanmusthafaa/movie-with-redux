import React, { useEffect } from "react";
import { Popover, PopoverHandler, PopoverContent, Avatar, Button, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMeAction } from "../../redux/actions/GetMeAction";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogOut } from "../../redux/actions/AuthAction";
import iconUser from "../icons/user.png";

export const PopOver = ({ className }) => {
  const data = useSelector((state) => state.getMe);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetMeAction());
  }, [dispatch]);

  return (
    <Popover className={className} placement="bottom-end">
      <PopoverHandler>
        <button className="w-full rounded-md px-6 py-4 font-semibold lg:inline-block bg-[#BE123C] hover:bg-pink-500 text-white flex justify-center items-center gap-3">
          <FontAwesomeIcon icon={faUser} /> Account
        </button>
      </PopoverHandler>
      <PopoverContent className="w-72 z-20">
        <div className="mb-4 flex items-center gap-4 border-b  border-blue-gray-50 pb-4">
          <Avatar src={iconUser} alt="tania andrew" />
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div>
            <Typography variant="h6" color="blue-gray">
              {data?.getMe?.name}
            </Typography>
            <Typography variant="small" color="gray" className="font-medium text-blue-gray-500">
              {data?.getMe?.email}
            </Typography>
          </div>
        </div>
        <List className="p-0  text-center">
          <Button
            onClick={() => {
              dispatch(LogOut());
            }}
            className="px-7 bg-[#BE123C]  hover:opacity-75"
          >
            <span>Logout</span>
          </Button>
          {/* <a href="/" className="text-initial font-medium text-blue-gray-500">
            <ListItem>
              <Button
                onClick={() => {
                  dispatch(LogOut());
                }}
                className="px-7 bg-[#BE123C] hidden lg:inline-block hover:opacity-75"
              >
                <span>Logout</span>
              </Button>
            </ListItem>
          </a> */}
        </List>
      </PopoverContent>
    </Popover>
  );
};

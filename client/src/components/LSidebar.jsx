import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const LSidebar = () => {
  const {getUsers, users , selectedUser, setSelectedUser, unseenMessages, setUnseenMessages} = useContext(ChatContext)
  const { logout, onlineUsers } = useContext(AuthContext);
  const [input, setInput] = useState("")
  const filteredUsers = input ? users.filter((user)=>user.fullName.toLowerCase().includes(input.toLowerCase())) : users ;
  const navigate = useNavigate();

  useEffect(()=>{
    getUsers();
  },[onlineUsers])

  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div
          className={`flex justify-between items-center font-bold ${
            selectedUser ? "text-2xl" : "text-3xl"
          }`}
        >
          <img
            src={assets.logo}
            alt="logo"
            className="max-w-10 cursor-pointer"
          />
          ChatBuddy
          <div className="relative py-2 group">
            <img
              src={assets.menu}
              alt="menu"
              className="max-h-5 cursor-pointer invert-100"
            />
            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t gray-500" />
              <p onClick={() => logout()} className="cursor-pointer text-sm">
                Logout
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-full flex items-center gap-2 px-4 py-3 mt-5">
          <img src={assets.search} alt="Search" className="w-4.5" />
          <input
            type="text"
            onChange={(e)=>setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-black text-sm placeholder-[#000000] flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>
      <div className="flex flex-col">
        {filteredUsers.map((user, index) => (
          <div
            className={`relative flex items-center gap-2 p-2 pl-4 rounded max-sm:text-sm cursor-pointer hover:backdrop-blur-3xl ${
              selectedUser?._id === user._id && "bg-[#282142]/50"
            }`}
            key={index}
            onClick={() => {setSelectedUser(user); setUnseenMessages(prev=>({...prev, [user._id]:0}))}}
          >
            <img
              src={user?.profilePic || assets.avatar}
              alt=""
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {onlineUsers.includes(user._id) ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-gray-400 text-xs">Offline</span>
              )}
            </div>
            { unseenMessages[user._id] > 0 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                {unseenMessages[user._id]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LSidebar;

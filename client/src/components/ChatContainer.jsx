import React, { useContext, useEffect, useRef, useState } from "react";
import assets, { messageDummyData } from "../assets/assets";
import { formatMessageTime } from "../lib/utils";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ChatContainer = () => {
  const { messages, selectedUser, setselectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const scrollEnd = useRef(null);

  const handleSendMessage = async () => {
    if (!input.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: input.trim(),
        image: imagePreview, // include image if set
      });

      setInput("");
      setImagePreview(null); // ✅ clear image preview after sending
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    }
  };

  const handleSendImage = (e) => {
    const file = e.target.files[0];

    if (!file || !file.type.startsWith("image/")) {
      toast.error("Select a valid image file.");
      return;
    }

    const maxSizeMB = 5;
    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`Image size should be under ${maxSizeMB}MB.`);
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result); // ✅ set image preview
      // Don't send it yet — send it when user clicks send
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={selectedUser.profilePic || assets.avatar}
          alt=""
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) &&
          <span className="w-2 h-2 rounded-full bg-green-500"></span>}
        </p>
        <img
          onClick={() => setselectedUser(null)}
          src={assets.arrow}
          alt=""
          className="md:hidden max-w-7 invert-100 cursor-pointer"
        />
        <img
          src={assets.help}
          alt=""
          className="max-md:hidden max-w-5 invert-100 cursor-pointer"
        />
      </div>

      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end  justify-end gap-2 ${
              msg.senderId === authUser._id
                ? "justify-items-start"
                : "justify-items-start flex flex-row-reverse"
            }`}
          >
            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[230px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  msg.senderId === authUser._id
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            )}
            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === authUser._id
                    ? authUser?.profilePic || assets.avatar
                    : selectedUser?.profilePic || assets.avatar
                }
                alt=""
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">
                {formatMessageTime(msg.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full relative">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => (e.key === "Enter" ? handleSendMessage() : null)}
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400 bg-transparent"
          />

          <input
            onChange={handleSendImage}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            hidden
          />

          <label htmlFor="image">
            <img
              src={assets.gallery}
              alt="Upload"
              className="w-5 mr-2 cursor-pointer invert-100"
            />
          </label>

          {/* ✅ Image preview block */}
          {imagePreview && (
            <div className="absolute top-[-80px] left-3 bg-gray-800 p-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-md"
              />
              <button
                onClick={() => setImagePreview(null)}
                className="text-white text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="hover:rounded-full hover:backdrop-blur-3xl hover:bg-blue-500 w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full cursor-pointer"
          onClick={handleSendMessage}
        >
          <img
            src={assets.send}
            alt=""
            className="w-7 cursor-pointer invert-90 "
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo} alt="" className="h-[50%]" />
      <p className="text-lg font-medium text-white">Chat with your Buddy</p>
    </div>
  );
};

export default ChatContainer;

import React, { useState } from "react";
import { PREVIEW_MESSAGE, THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Icon } from "@iconify/react/dist/iconify.js";

const SettingPage = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
              group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
              ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}>
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div className="divider">
          <h3 className="text-lg font-semibold mb-3"> Preview </h3>
        </div>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-4 bg-base-200">
            <div className="max-w-lg mx-auto">
              {/* Mock UI */}
              <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                {/* Chat header */}

                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      J
                    </div>
                    <div>
                      <h3>John Doe</h3>
                      <p className="text-xs text-green-500">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Message */}
              <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                {PREVIEW_MESSAGE.map((message) => (
                  <div
                    key={message.id}
                    className={`chat ${
                      !message.isSent ? "chat-start" : "chat-end"
                    }`}>
                    <div
                      className={`
                        chat-bubble 
                        max-w-[80%] rounded-xl p-3 shadow-sm
                        ${
                          !message.isSent
                            ? "bg-base-400"
                            : "bg-primary text-primary-content"
                        }
                        `}>
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-[10px] mt-1.5 ${
                          message.isSent
                            ? "text-primary-content/70 "
                            : "text-primary-content/600"
                        }`}>
                        12:00 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-base-300 bg-base-100">
                <div className="flex gap-2">
                  <input
                    text="text"
                    className="input input-bordered flex-1 text-sm h-10"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn bt0-primary h-10 min-h-0">
                    <Icon icon="mingcute:send-plane-fill" className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

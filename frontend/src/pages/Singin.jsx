import React from 'react'
import { CgLogIn } from "react-icons/cg";
export default function singin() {
  return (
    <div>
    {/* Chat thread */}
      {/* <div className="space-y-3 mb-4">
        {thread.map((msg, idx) => (
          <p
            key={idx}
            className={
              msg.role === 'user'
                ? 'text-right text-blue-600'
                : 'text-left text-green-700'
            }
          >
            {msg.content}
          </p>
        ))}
        {loading && <p className="text-gray-500 italic">AI is typing…</p>}
      </div> */}

      {/* Input form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 border rounded-md p-2 shadow-sm"
      >
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Ask something..."
          className="flex-1 outline-none"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-1 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  )
}

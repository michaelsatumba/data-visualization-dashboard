import React, { useState } from 'react';

const mockComments = [
  { id: 1, text: 'To the moon!', responses: [] }
];

const Comments = () => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { id: comments.length + 1, text: newComment, responses: [] }]);
      setNewComment('');
    }
  };

  const addResponse = (id, response) => {
    setComments(comments.map(comment => comment.id === id ? { ...comment, responses: [...comment.responses, response] } : comment));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Comments</h2>
      <div className="mb-4">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a comment"
          className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded p-2 mb-2 w-full"
        />
        <button
          onClick={addComment}
          className={`px-4 py-2 rounded w-full ${newComment.trim() !== '' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
        >
          Submit
        </button>
      </div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="text-gray-900 dark:text-gray-100">{comment.text}</p>
            <ul className="mt-2">
              {comment.responses.map((response, index) => (
                <li key={index} className="mb-2 p-2 bg-gray-200 dark:bg-gray-600 rounded">
                  <p className="text-gray-800 dark:text-gray-200">{response}</p>
                </li>
              ))}
              <li>
                <input
                  placeholder="Add a response"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addResponse(comment.id, e.target.value);
                      e.target.value = '';
                    }
                  }}
                  className="bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded p-2 mb-2 w-full"
                />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
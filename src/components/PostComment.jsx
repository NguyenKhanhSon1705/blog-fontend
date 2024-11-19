// eslint-disable-next-line no-unused-vars
import React from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;
const PostComment = () => {
  return (
    <div className="w-full mt-12">
      {/* Post Comment */}
      <div className="flex flex-row gap-5">
        <div>
          <img
            className="w-10 h-10 rounded-full bg-slate-500"
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <TextArea
            className="p-4 text-xl lg:w-[900px]"
            placeholder="Write your comment in here"
            rows={4}
          />
          <Button
            className="w-[200px] px-2 py-6 lg:text-lg font-medium"
            type="primary"
            danger
          >
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments */}

      <div className="flex flex-col gap-5">
        {/* Comments 1 */}
        <div className="flex flex-row gap-5 mt-10 w-full max-w-[900px]">
          <div>
            <img
              className="w-10 h-10 rounded-full bg-slate-500"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <span className="block font-medium text-black text-lg">
                Floyd Miles
              </span>
              <span className="block font-normal text-gray-400 text-md">
                2 Days Ago
              </span>
            </div>

            <div>
              <p className="lg:text-lg">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Comments 2 */}
        <div className="flex flex-row gap-5 mt-10 w-full max-w-[900px]">
          <div>
            <img
              className="w-10 h-10 rounded-full bg-slate-500"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <span className="block font-medium text-black text-lg">
                Floyd Miles
              </span>
              <span className="block font-normal text-gray-400 text-md">
                2 Days Ago
              </span>
            </div>

            <div>
              <p className="lg:text-lg">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Comments 3 */}
        <div className="flex flex-row gap-5 mt-10 w-full max-w-[900px]">
          <div>
            <img
              className="w-10 h-10 rounded-full bg-slate-500"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <span className="block font-medium text-black text-lg">
                Floyd Miles
              </span>
              <span className="block font-normal text-gray-400 text-md">
                2 Days Ago
              </span>
            </div>

            <div>
              <p className="lg:text-lg">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;

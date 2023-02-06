import React from "react";
import upArrow from "../../Assets/Icons/up-arrow.gif";

const Story = ({ hit, page, index, minutes, hours, days }) => {
  return (
    <a
      className="flex flex-row mx-2 text-justify"
      target="_blank"
      href={hit.url}
      key={hit.objectID}
      rel="noreferrer"
    >
      {!!(index + 1) && (
        <>
          <div className="w-5  ml-2 font-sans ">
            <p className="text-sm  text-link-text-color">
              {page * 30 + index + 1}.
            </p>
          </div>
          <div>
            <img src={upArrow} alt="" className="h-2.5 w-2.5 mt-1.5 mr-1" />
          </div>
        </>
      )}
      {hit.comment_text ? (
        <div>
          {hit.points && (
            <p className=" text-xs inline text-sub-heading-text-color mx-2">
              {hit.points +
                (hit.points > 1 ? " points" : " point") +
                (hit.author ? " | " + hit.author : "") +
                (minutes <= 59
                  ? " | " +
                    minutes +
                    (minutes > 1 ? "minutes ago" : "minute ago")
                  : hours <= 24
                  ? " | " + hours + (hours > 1 ? " hours ago" : " hour ago")
                  : days <= 365
                  ? " | " + days + " days ago"
                  : " more then a year") +
                (hit.parent_id ? " | parent" : "") +
                (hit.story_title ? " | on: " + hit.story_title : "")}
            </p>
          )}
          <div
            className="text-xs mx-2"
            dangerouslySetInnerHTML={{ __html: hit.comment_text }}
          ></div>
        </div>
      ) : (
        <div>
          <p className="text-sm inline ">{hit.title}</p>
          {hit.url && (
            <p className=" text-xs inline text-link-text-color hover:underline">
              {" ( "}
              {hit.url.split("/").at(2)}
              {" ) "}
            </p>
          )}
          <br />
          <p className=" text-xs inline text-sub-heading-text-color mx-2">
            {hit.points +
              (hit.points > 1 ? " points" : " point") +
              " by " +
              hit.author}
          </p>
          <p className=" text-xs inline text-sub-heading-text-color hover:underline">
            {minutes <= 59
              ? minutes + (minutes > 1 ? " minutes ago" : " minute ago")
              : hours <= 24
              ? hours + (hours > 1 ? " hours ago" : " hour ago")
              : days <= 365
              ? days + " days ago"
              : " more then a year"}
          </p>
          <p className=" text-xs inline text-sub-heading-text-color ">
            {" | "}
          </p>

          <p className=" text-xs inline text-sub-heading-text-color hover:underline">
            hide
          </p>
          <p className=" text-xs inline text-sub-heading-text-color ">
            {" | "}
          </p>
          <p className=" text-xs inline text-sub-heading-text-color hover:underline">
            pass
          </p>
          <p className=" text-xs inline text-sub-heading-text-color ">
            {" | "}
          </p>
          <p className=" text-xs inline text-sub-heading-text-color hover:underline">
            {hit.num_comments > 0
              ? hit.num_comments +
                (hit.num_comments > 1 ? " comments" : " comment")
              : "discuss"}
          </p>
        </div>
      )}
    </a>
  );
};

export default Story;

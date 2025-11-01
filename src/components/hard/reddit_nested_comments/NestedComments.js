import React, { use } from "react";

//N level Nested

const nestedData = [
  {
    userName: "User1",
    comment: "This is a comment from User1",
    replies: [
      {
        userName: "User2",
        comment: "This is a reply from User2",
        replies: [
          {
            userName: "User3",
            comment: "This is a reply from User3",
            replies: [],
          },
        ],
      },
      {
        userName: "User4",
        comment: "This is another reply from User4",
        replies: [],
      },
    ],
  },
  {
    userName: "User5",
    comment: "This is a comment from User5",
    replies: [],
  },
  { userName: "User6", comment: "This is a comment from User6", replies: [] },
  {
    userName: "User7",
    comment: "This is a comment from User7",
    replies: [
      {
        userName: "User8",
        comment: "This is a reply from User8",
        replies: [
          {
            userName: "User9",
            comment: "This is a reply from User9",
            replies: [
              {
                userName: "User10",
                comment: "This is a reply from User10",
                replies: [
                  {
                    userName: "User11",
                    comment: "This is a reply from User11",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const ListComments = ( {comments} ) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        borderLeft: "1px solid #ccc",
        paddingLeft: "10px",
        marginBottom: '15px'
      }}
      >
      { comments.length>0 && comments.map((e)=>{
       return <div key={e.userName} 
       style={{
        margin: '10px',
        paddingLeft: "10px",
      }}>
        <div
        >
        <img height={"15px"}  width={"15px"}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBn2WR4XeQ2lzMoW-2GhoBbqHUsNKD272HQ&s" alt="user" />
            <span 
            style={{
                marginLeft: '5px',
                fontWeight: "bold",
                fontFamily: "inherit"
            }}
            >{e.userName}</span>
            </div>
            <div 
             style={{
                fontFamily: "inherit",
                fontSize: '12px'
            }}
            >{e.comment}</div>
            { e.replies.length>0 && <ListComments comments={e.replies}/>

            }
        </div>
      })}

    </div>
  );
};
const NestedComments = () => {
  return (
    <div>
      <ListComments comments={nestedData} />
    </div>
  );
};

export default NestedComments;

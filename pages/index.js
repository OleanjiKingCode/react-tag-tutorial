import { WithContext as ReactTags } from "react-tag-input";
import Head from "next/head";
import { useState } from "react";
import { TAGS } from "../components/data/tags";

export default function Home() {
  //This serves as the tag that shows up on load
  const [Tags, setTags] = useState([
    { id: "Deafault Tag", text: "Deafault Tag" },
  ]);

  const suggestions = TAGS.map((tag) => {
    return {
      id: tag,
      text: tag,
    };
  });

  // keycodes for different keys on the keyboard
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  //this says that when the key with the specified code is clicked the tag should be added
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  //This deletes i.e removes the tag from the array thereby also from the UI
  const handleDelete = (i) => {
    setTags(Tags.filter((tag, index) => index !== i));
  };

  //This checks for a condition when a new tag is added
  const handleAddition = (tag) => {
    if (Tags.length >= 40) {
      alert("Max length of tags is 4");
    } else {
      setTags([...Tags, tag]);
    }
  };

  // this allows one to drag a tag from one place to another
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = Tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  return (
    <>
      <Head>
        <title>React Tag Web Tutorial</title>
        <meta
          name="description"
          content="An example of a react tag in a website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-[109vh] -mt-16 flex flex-col items-center text-center justify-center bg-pink-300">
        <div className="w-full mt-2 py-5 font-bold text-2xl">
          <ReactTags
            tags={Tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            inputFieldPosition="inline"
            editable
          />
        </div>
        <div className="bottom-0 py-10"> Made with 💖 by Oleanji</div>
      </div>
    </>
  );
}

import React from "react";

export default function Community() {
  return (
    <div className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
      <div className="py-2 px-2  text-gray-600 border bg-white bg-opacity-[80%]">
        <h1 className="text-2xl font-bold text-green-500">
          {" "}
          Cookpal Community Rules
        </h1>
        <h2 className="text-xl font-bold my-2">Keep It Relevant </h2>
        <p className="my-2 leading-loose tracking-wide">
          We encourage comments on food subjects, written in an intelligent and
          constructive manner
        </p>
        <h2 className="text-xl font-bold my-2"> Do not Span</h2>
        <p className="my-2 leading-loose tracking-wide">
          Constructive criticisms of Cookpal upon which we can act or to which
          we can respond are allowed. However repeated duplicate postings (spam)
          by the same user or groups will be removed, as they clutter up
          discussions for other users. We will also remove comments subject to
          legal issues (slander, defamation, contempt of court) and any
          publicizing/encouraging/endorsing illegal activity.
        </p>
        <h2 className="text-xl font-bold my-2">Be Kind and Respectful</h2>
        <p className="my-2 leading-loose tracking-wide">
          Cookpal allows individuals to share recipes to help others, with no
          promise for any monetary reward. Kindly be respectful towards the
          creators. Treat others as you would like to be treated. Be polite,
          even if you disagree. Abusive language, aggression and
          bullying/trolling are not allowed.Content with overt religious or
          political bias intended to incite others, or aggressive lobbying that
          disrupts the community for other Cookpal users, will be removed.
        </p>
        <h2 className="text-xl font-bold my-2">Keep it Original</h2>
        <p className="my-2 leading-loose tracking-wide">
          Impersonating brands or other users, or featuring licensed or
          copyright material, is not allowed. Content containing unverified or
          false claims about products will be removed.
        </p>
        <h2 className="text-xl font-bold my-2">
          Be Helpful and You will be helped
        </h2>
        <p className="my-2 leading-loose tracking-wide">
          Finally, Cookpal retains the right to remove any content posted
          toCookpal Real Food, or block users from posting for any other reason
          deemed necessary, to create a helpful community.
        </p>
      </div>
    </div>
  );
}

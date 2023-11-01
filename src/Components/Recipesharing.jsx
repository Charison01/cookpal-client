import React from "react";
import toast from "react-hot-toast";

const RecipeSharing = ({ recipe }) => {
  const recipeUrl = `http://localhost:3000/recipedetails/${recipe}`;

  // Function to open the share dialog for Facebook
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer.php?u=${recipeUrl}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  // Function to open the share dialog for Twitter
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${recipeUrl}&text=${recipe.title}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  // Function to share on WhatsApp
  const shareOnWhatsApp = () => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
      `${recipe.title}: ${recipeUrl}`
    )}`;
    window.open(whatsappUrl);
  };

  // Function to copy the recipe link to the clipboard
  const copyRecipeLink = () => {
    const textArea = document.createElement("textarea");
    textArea.value = recipeUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    toast.success("Link copied to clipboard");
  };

  return (
    <div>
      <div className="flex items-center gap-2 tex-3xl">
        {/* Facebook */}
        <button onClick={shareOnFacebook}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="blue"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </button>

        {/* Twitter */}
        <button onClick={shareOnTwitter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="blue"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-twitter">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button onClick={shareOnWhatsApp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0,0,256,256">
            <g
              fill="#0bde43"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokelinejoin="miter"
              strokeMiterlimit="10">
              <g transform="scale(5.33333,5.33333)">
                <path d="M24,4c-11.03,0 -20,8.97 -20,20c0,3.19 0.77,6.34 2.23,9.17l-2.14,7.66c-0.24,0.87 0.01,1.8 0.64,2.44c0.48,0.47 1.12,0.73 1.77,0.73c0.23,0 0.45,-0.03 0.67,-0.09l7.66,-2.14c2.83,1.46 5.99,2.23 9.17,2.23c11.03,0 20,-8.97 20,-20c0,-11.03 -8.97,-20 -20,-20zM34.36,31.37c-0.44,1.23 -2.6,2.42 -3.57,2.51c-0.97,0.09 -1.88,0.44 -6.34,-1.32c-5.38,-2.12 -8.78,-7.63 -9.04,-7.99c-0.27,-0.35 -2.16,-2.86 -2.16,-5.47c0,-2.6 1.37,-3.88 1.85,-4.41c0.49,-0.53 1.06,-0.66 1.41,-0.66c0.36,0 0.71,0 1.02,0.01c0.37,0.02 0.79,0.04 1.19,0.92c0.47,1.04 1.5,3.66 1.63,3.93c0.13,0.26 0.22,0.57 0.04,0.92c-0.17,0.35 -0.26,0.57 -0.53,0.88c-0.26,0.31 -0.55,0.69 -0.79,0.93c-0.26,0.26 -0.54,0.55 -0.23,1.08c0.31,0.53 1.37,2.26 2.94,3.66c2.02,1.8 3.72,2.36 4.25,2.63c0.53,0.26 0.84,0.22 1.15,-0.14c0.31,-0.35 1.32,-1.54 1.68,-2.07c0.35,-0.53 0.7,-0.44 1.19,-0.26c0.48,0.17 3.08,1.45 3.61,1.72c0.53,0.26 0.88,0.39 1.01,0.61c0.13,0.22 0.13,1.28 -0.31,2.52z"></path>
              </g>
            </g>
          </svg>
        </button>

        {/* Copy Link */}
        <button onClick={copyRecipeLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecipeSharing

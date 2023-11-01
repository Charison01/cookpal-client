import RecipeSharing from "./Recipesharing";

export default function ShareModal({recipeId}){
    return (
        <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
            onClick={() => {
              document.getElementById("my_modal_5").close();
            }}>
            ✕
          </button>
          <form method="dialog">
            <RecipeSharing recipe={recipeId} />
          </form>
        </div>
      </dialog>
    )
}

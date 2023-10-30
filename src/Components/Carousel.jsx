import { Carousel } from "flowbite-react";

export default function DefaultCarousel() {
  return (
    <Carousel className="xsm:h-[250px] h-[300px] mt-0 md:my-2 px-2 relative">
      <img
        alt="Mikes-Salad"
        src="https://heavenlyoliveoils.com/wp-content/uploads/2020/04/Recipes_Salad_SonomaSalad_@2x-scaled.jpg"
      />

      <img
        alt="no idea what it is"
        src="https://blog.walls.io/wp-content/uploads/2020/06/Featured-Image-COSTA.png"
      />
      <img
        alt="southern-tangalog"
        src="https://mb.com.ph/media/food_tour_featured_image_e39d09e26e/food_tour_featured_image_e39d09e26e.jpg"
      />
      <img
        alt="chapati looks horrible"
        src="https://www.dominthekitchen.com/wp-content/uploads/2016/11/0d2ee-beefcurry_whitebowl1.jpg"
      />
      <img
        alt="githeri"
        src="https://winniespurehealth.co.ke/wp-content/uploads/2020/04/Githeri-1.jpg"
      />
    </Carousel>
  );
}

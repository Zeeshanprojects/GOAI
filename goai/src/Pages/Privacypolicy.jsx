import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Privacypolicy() {
      useEffect(() => {
        document.title = "Terms and Conditions | GO AI";
        AOS.init({
          duration: 1200,
          offset: 120,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
  return (
    <div>Privacypolicy</div>
  )
}

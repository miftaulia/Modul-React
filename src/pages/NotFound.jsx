import error404 from "../assets/error404.jpg";
export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <img src={error404} alt="error 404" className="mx-auto w-1/2" />
    </div>
  );
}

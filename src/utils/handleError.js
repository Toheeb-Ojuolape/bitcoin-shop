import { toast } from "react-hot-toast";

export default function handleError(message) {
  toast.error(message);
}

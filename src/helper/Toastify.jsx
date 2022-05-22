import { toast } from "react-toastify";

export const onayMesaj = (mesaj) => {
  toast.success(mesaj, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

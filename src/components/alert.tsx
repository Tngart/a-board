import Swal, { SweetAlertIcon } from "sweetalert2";

interface IProps {
  title: string;
  text: string;
  icon: SweetAlertIcon;
  width?: number;
}

const Alert = ({ title, text, icon, width }: IProps) => {
  Swal.fire({
    title,
    icon,
    text: text,
    confirmButtonColor: "#243831",
    width: width ?? undefined,
  });
};

export default Alert;

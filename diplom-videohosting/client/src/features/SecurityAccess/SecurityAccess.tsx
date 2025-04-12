import { useSelector } from "react-redux";
import { RootState } from "../../shared/stores/store";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { UserRoles } from "../../shared/auth/AuthController";

export enum AccessType {
  NEED_AUTH,
  NO_AUTH,
  UNNECESSATY_AUTH,
  ADMIN,
}

interface SecurityAccessProps {
  accessType: AccessType;
  child: ReactNode;
}

const SecurityAccess: React.FC<SecurityAccessProps> = ({
  accessType,
  child,
}) => {
  const isAuth = useSelector((state: RootState) => state.authController.isAuth);
  const role = useSelector(
    (state: RootState) => state.authController.user?.role
  );

  switch (accessType) {
    case AccessType.ADMIN:
      if (isAuth && role == UserRoles.ADMIN) return child;
      else return <Navigate to="/" />;
    case AccessType.NEED_AUTH:
      if (isAuth) return child;
      else return <Navigate to="/" />;
    case AccessType.NO_AUTH:
      if (isAuth) return <Navigate to="/" />;
      else return child;
    case AccessType.UNNECESSATY_AUTH:
      return child;

    default:
      return <Navigate to="/" />;
  }
};

export default SecurityAccess;

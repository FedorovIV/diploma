import { useContext, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Context from "..";
import { AccessLevels } from "../shared/accessLevel/accessLevel";

interface ForAuthPageInterface {
  children: any;
}

const ForAuthPage: React.FC<ForAuthPageInterface> = observer(
  ({ children}) => {
    const location = useLocation();
    const { store } = useContext(Context);

    useEffect(() => {
      store.checkAuth();
    });

    return store.accessLevel === 0 ? (
      children
    ) : (
      <>
         <Navigate to="/confirmEmail" state={{ from: location }} />
      </>
    );
  }
);

export { ForAuthPage };

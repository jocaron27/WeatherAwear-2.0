import { ReactNode, SyntheticEvent } from "react";

export module shell {
    export type MainProps = {
        children: ReactNode,
    }
    
    export type NavProps = {
        children?: ReactNode,
        handleLogout: React.EventHandler<SyntheticEvent>;
        isLoggedIn: boolean;
    }
}


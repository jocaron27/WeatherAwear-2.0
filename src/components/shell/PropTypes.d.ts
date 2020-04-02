import { ReactNode, SyntheticEvent } from "react";

export type MainProps = {
    children: ReactNode,
}

export type NavProps = {
    children?: ReactNode,
    handleLogout: React.EventHandler<SyntheticEvent>;
    isLoggedIn: boolean;
}
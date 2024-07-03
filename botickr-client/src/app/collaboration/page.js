import NotAuthorizedComponent from "./NotAuthorizedComponent";
import OrganizerRoleComponent from "./OrganizerRoleComponent";

export default function Home() {
    return (
        <>
            <NotAuthorizedComponent />
            <OrganizerRoleComponent />
        </>
    );
}
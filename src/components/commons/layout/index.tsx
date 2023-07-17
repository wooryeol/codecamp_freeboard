import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
// import LayoutNavigation from "./navigation";
// import LayoutSidebar from "./sidebar";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      {/* <LayoutNavigation /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: "30px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>{props.children}</div>
          {/* <LayoutSidebar /> */}
        </div>
      </div>
      <LayoutFooter />
    </>
  );
}

import LayoutSidebar from "../../src/components/commons/layout/sidebar/index";

export default function MyPage(): JSX.Element {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <LayoutSidebar />
        <div></div>
      </div>
    </>
  );
}

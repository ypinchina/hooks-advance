import { FC, useState, useTransition } from "react";
export const TabsContainer: FC = () => {
  const [tabActive, setTabActive] = useState("home");
  const [isPending, startTranstion] = useTransition();
  const renderTab = () => {
    if (isPending) return <h3>loading...</h3>;
    switch (tabActive) {
      case "home":
        return <HomeTab></HomeTab>;
      case "movie":
        return <MovieTab></MovieTab>;
      case "about":
        return <AboutTab></AboutTab>;
      default:
        return <HomeTab></HomeTab>;
    }
  };
  const btnClick = (name: string) => {
    // 此方法是导致页面渲染的关键影响方法
    startTranstion(() => {
      setTabActive(name);
    });
  };
  return (
    <div style={{ height: 500 }}>
      <TabButton
        isActive={tabActive === "home"}
        onClick={() => btnClick("home")}
      >
        Home
      </TabButton>
      <TabButton
        isActive={tabActive === "movie"}
        onClick={() => btnClick("movie")}
      >
        Movie
      </TabButton>
      <TabButton
        isActive={tabActive === "about"}
        onClick={() => btnClick("about")}
      >
        About
      </TabButton>
      {/* 按钮区域 */}
      <hr></hr>
      {renderTab()}
      {/* 标签页区域 */}
    </div>
  );
};
const TabButton: FC<
  React.PropsWithChildren & { onClick: () => void; isActive: boolean }
> = (props) => {
  return (
    <button
      className={["btn", props.isActive ? "active" : ""].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
const HomeTab: FC = () => {
  return <>HomeTab</>;
};
// Movie 组件
const MovieTab: React.FC = () => {
  const items = Array(100000)
    .fill("MovieTab")
    .map((item, i) => <p key={i}>{item}</p>);
  return items;
};
const AboutTab: FC = () => {
  return <>AboutTab</>;
};
